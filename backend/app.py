from fastapi import FastAPI, HTTPException, UploadFile, File, Form, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pathlib import Path
import openai
from dotenv import load_dotenv
import os
import re
import json
import boto3
from datetime import datetime, timedelta
import pkg_resources
import sys
from pydantic import BaseModel
import urllib3
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from jose import JWTError, jwt
from models import User
from database import get_db, wait_for_db, check_db_connection

# ---------------- Setup ----------------

# Force the use of OpenAI 0.28 API
openai_version = pkg_resources.get_distribution("openai").version
print(f"Using OpenAI version: {openai_version}")

# Ensure we're using the correct version
if not openai_version.startswith("0.28"):
    print("WARNING: This code requires OpenAI version 0.28.")
    print("Please run: pip install openai==0.28")
    # Attempt to reinstall the correct version
    try:
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "openai==0.28", "--force-reinstall"])
        print("Successfully reinstalled OpenAI 0.28. Please restart the server.")
    except Exception as e:
        print(f"Failed to reinstall OpenAI: {e}")

# Configure OpenAI with proxy settings if needed
retry_strategy = Retry(
    total=3,
    backoff_factor=1,
    status_forcelist=[429, 500, 502, 503, 504],
)

# Create a session with the retry strategy
session = requests.Session()
session.mount("https://", HTTPAdapter(max_retries=retry_strategy))

# Configure OpenAI to use the session
openai.requests_session = session

load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")
if not openai_api_key:
    raise ValueError("OPENAI_API_KEY not found in environment variables")

openai.api_key = openai_api_key

# Test OpenAI connection
def test_openai_connection():
    try:
        # Simple test completion
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": "test"}],
            max_tokens=5
        )
        print("OpenAI connection test successful")
        return True
    except Exception as e:
        print(f"OpenAI connection test failed: {str(e)}")
        return False

# Test connection on startup
test_openai_connection()

# Database connection check
print("Checking database connection...")
if not wait_for_db():
    print("Warning: Could not establish initial database connection. The application will continue to retry connections.")

# AWS credentials from .env file
aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
aws_secret_access_key = os.getenv("AWS_SECRET_ACCESS_KEY")
aws_region = os.getenv("AWS_REGION")
bucket_name = os.getenv("AWS_S3_BUCKET_NAME")

# Initialize boto3 S3 client via helper function
def get_s3_client():
    return boto3.client(
        "s3",
        aws_access_key_id=aws_access_key_id,
        aws_secret_access_key=aws_secret_access_key,
        region_name=aws_region
    )

app = FastAPI()

# Allow CORS for your frontend (adjust origins as needed)
origins = ["http://localhost:3000", "http://localhost", "*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/health")
async def health_check():
    db_status = check_db_connection()
    openai_status = test_openai_connection()
    
    return {
        "status": "healthy" if db_status and openai_status else "unhealthy",
        "database": "connected" if db_status else "disconnected",
        "openai": "connected" if openai_status else "disconnected"
    }

# ---------------- Auth Setup ----------------

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# JWT settings
SECRET_KEY = os.getenv("JWT_SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# ---------------- Auth Models ----------------

class UserCreate(BaseModel):
    username: str
    gmail: str
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    gmail: str

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None

# ---------------- Auth Functions ----------------

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def get_user_by_gmail(db: Session, gmail: str):
    return db.query(User).filter(User.gmail == gmail).first()

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def authenticate_user(db: Session, login: str, password: str):
    user = get_user_by_gmail(db, login)
    if not user:
        user = get_user_by_username(db, login)  # Try username if gmail not found
    if not user:
        return False
    if not verify_password(password, user.password):
        return False
    return user

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    user = get_user_by_username(db, username)
    if user is None:
        raise credentials_exception
    return user

# ---------------- Auth Endpoints ----------------

@app.post("/register", response_model=UserResponse)
async def register_user(user: UserCreate, db: Session = Depends(get_db)):
    try:
        # Validate input
        if not user.username or not user.gmail or not user.password:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="All fields are required"
            )

        # Check if username exists
        db_user = get_user_by_username(db, user.username)
        if db_user:
            print(f"Registration failed: Username {user.username} already exists")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Username already registered"
            )

        # Check if gmail exists
        db_user = get_user_by_gmail(db, user.gmail)
        if db_user:
            print(f"Registration failed: Gmail {user.gmail} already exists")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Gmail already registered"
            )

        # Validate gmail format
        if not user.gmail.endswith('@gmail.com'):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Please enter a valid Gmail address"
            )

        # Validate password length
        if len(user.password) < 6:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Password must be at least 6 characters long"
            )

        # Hash the password
        hashed_password = get_password_hash(user.password)

        # Create new user
        new_user = User(
            username=user.username,
            gmail=user.gmail,
            password=hashed_password,
            report_history="[]"
        )

        try:
            db.add(new_user)
            db.commit()
            db.refresh(new_user)
            print(f"Successfully registered user: {user.username}")
            return new_user
        except Exception as e:
            db.rollback()
            print(f"Database error during registration: {str(e)}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Error creating user account. Please try again."
            )

    except HTTPException as he:
        print(f"HTTP Exception during registration: {str(he)}")
        raise he
    except Exception as e:
        print(f"Unexpected error during registration: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurred. Please try again."
        )

@app.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username/email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users/me", response_model=UserResponse)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user

# ---------------- Helper Functions ----------------

def sanitize_json_string(json_string):
    return re.sub(r'[\x00-\x1F]+', ' ', json_string)

def normalize_text(text):
    return " ".join(text.split())

def upload_text_to_s3(file_name, text_data):
    try:
        client = get_s3_client()
        client.put_object(Bucket=bucket_name, Key=file_name, Body=text_data.encode("utf-8"))
        return True
    except Exception as e:
        print(f"Error uploading to S3: {str(e)}")
        # Don't raise exception, just log it and continue
        return False

def split_into_sections(report_text):
    lines = report_text.splitlines()
    sections = []
    current_heading = None
    current_content = []
    for line in lines:
        line_stripped = line.strip()
        if line_stripped and line_stripped.endswith(":") and line_stripped.upper() == line_stripped:
            if current_heading is not None or current_content:
                sections.append((current_heading, "\n".join(current_content)))
            current_heading = line_stripped
            current_content = []
        else:
            current_content.append(line)
    if current_heading is not None or current_content:
        sections.append((current_heading, "\n".join(current_content)))
    return sections

def analyze_section(heading, content):
    section_text = (heading + "\n" if heading else "") + content
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            temperature=0,
            messages=[
                {
                    "role": "system", 
                    "content": (
                        "You are an expert radiologist and language editor. Analyze the following section of a medical report. "
                        "The section may start with a heading (e.g., 'CLINICAL INFORMATION:', 'FINDINGS:', etc.). "
                        "Check for genuine spelling mistakes, typographical errors, and anatomical or contextual discrepancies. "
                        "Be extremely conservative—only flag errors that you are certain affect clinical meaning. "
                        "Return a JSON object with exactly two keys: 'corrected_section' (the corrected version of the section) and "
                        "'errors' (an array of objects, each with keys 'error', 'correction', and 'error_type'). "
                        "The 'error_type' should be one of: 'typographical', 'medical', or 'misspelled'. "
                        "Output only the JSON object."
                    )
                },
                {"role": "user", "content": section_text}
            ]
        )
        result_str = response["choices"][0]["message"]["content"].strip()
        result_str = sanitize_json_string(result_str)
        return json.loads(result_str)
    except Exception as e:
        return {"corrected_section": section_text, 
                "errors": [{"error": "Exception", "correction": str(e), "error_type": "unknown"}]}

def analyze_report_sections(report_text):
    sections = split_into_sections(report_text)
    analyzed_sections = []
    for heading, content in sections:
        analysis = analyze_section(heading, content)
        original_section = (heading + "\n" if heading else "") + content
        analyzed_sections.append((heading, original_section, analysis))
    return analyzed_sections

def correct_full_report(report_text):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            temperature=0,
            messages=[
                {
                    "role": "system", 
                    "content": (
                        "You are an expert radiologist and language editor. Analyze the following full medical report. "
                        "Check for genuine spelling mistakes, typographical errors, and anatomical or contextual discrepancies. "
                        "Be extremely conservative—only make changes that improve clinical clarity or accuracy. "
                        "Return the corrected version of the full report."
                    )
                },
                {"role": "user", "content": report_text}
            ]
        )
        return response["choices"][0]["message"]["content"].strip()
    except Exception as e:
        return f"Error during full report correction: {str(e)}"

def generate_summary(report_text):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            temperature=0,
            messages=[
                {
                    "role": "system", 
                    "content": (
                        "You are an expert radiologist. Summarize the following medical report in 5 concise bullet points. "
                        "Each bullet point should clearly state a key clinical finding or conclusion from the report. "
                        "Output only the bullet points, each starting with a dash (-)."
                    )
                },
                {"role": "user", "content": report_text}
            ]
        )
        return response["choices"][0]["message"]["content"].strip()
    except Exception as e:
        return f"Error during summary generation: {str(e)}"

def highlight_error_phrases(text, errors):
    highlighted_text = text
    for error in sorted(errors, key=lambda x: len(x["error"]), reverse=True):
        error_phrase = error["error"]
        error_type = error.get("error_type", "unknown")
        correction = error.get("correction", "")
        pattern = re.compile(re.escape(error_phrase), re.IGNORECASE)
        tooltip = f"{error_type}: Suggested correction is '{correction}'"
        highlighted_text = pattern.sub(lambda m: f'<span title="{tooltip}" style="color:red; cursor:pointer;">{m.group(0)}</span>', highlighted_text)
    return highlighted_text

class ChatMessage(BaseModel):
    message: str

class ReportAnalysisRequest(BaseModel):
    report_text: str = None
    username: str = "default_user"

# ---------------- API Endpoints ----------------

@app.get("/")
def root():
    """Root endpoint that redirects to the report analysis page"""
    return {"message": "Welcome to the Medical Report Analysis API"}

@app.get("/api")
def api_root():
    """API root endpoint"""
    return {"message": "Welcome to the Medical Report Analysis API"}

@app.get("/api/test-openai")
async def test_openai():
    """Test endpoint to verify OpenAI connectivity"""
    try:
        if test_openai_connection():
            return {"status": "success", "message": "OpenAI connection successful"}
        else:
            raise HTTPException(status_code=500, detail="OpenAI connection failed")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error testing OpenAI connection: {str(e)}")

@app.post("/api/analyze")
async def analyze_report(
    report_text: str = Form(None),
    file: UploadFile = File(None),
    username: str = Form("default_user")  # Default username if not provided
):
    # Use uploaded file if provided; otherwise, use report_text.
    if file:
        try:
            report_text = (await file.read()).decode('utf-8')
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Error reading uploaded file: {str(e)}")
    if not report_text or not report_text.strip():
        raise HTTPException(status_code=400, detail="Please provide a medical report text or upload a file.")

    try:
        # Test OpenAI connection first
        if not test_openai_connection():
            raise HTTPException(
                status_code=503,
                detail="Cannot connect to OpenAI API. Please check your internet connection and try again."
            )

        analyzed_sections = analyze_report_sections(report_text)
        final_corrected_sections = []
        final_highlighted_sections = []
        all_errors = []

        for heading, original_section, analysis in analyzed_sections:
            corrected_section = analysis.get("corrected_section", original_section)
            errors = analysis.get("errors", [])
            if errors:
                all_errors.extend(errors)
            final_corrected_sections.append(corrected_section)
            highlighted = highlight_error_phrases(original_section, errors)
            final_highlighted_sections.append(highlighted)
        
        if not all_errors:
            final_corrected_report = report_text
            summary = generate_summary(report_text)
        else:
            final_corrected_report = "\n\n".join(final_corrected_sections)
            summary = generate_summary(final_corrected_report)
        
        # Optionally, save the fully corrected report to S3 if credentials are available
        if aws_access_key_id and aws_secret_access_key and aws_region and bucket_name:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            corrected_file_name = f"reports/{username}/corrected_{timestamp}.txt"
            upload_text_to_s3(corrected_file_name, correct_full_report(report_text))
        
        return {
            "username": username,
            "original_report": report_text,
            "final_corrected_report": correct_full_report(report_text),
            "diagnostic_discrepancies": all_errors,
            "highlighted_report": "\n\n".join(final_highlighted_sections) if all_errors else report_text,
            "summary": summary
        }
    except Exception as e:
        error_message = str(e)
        if "getaddrinfo failed" in error_message:
            error_message = "Cannot connect to OpenAI API. Please check your internet connection and try again."
        elif "api_key" in error_message.lower():
            error_message = "Invalid or missing API key. Please check your OpenAI API key configuration."
        
        raise HTTPException(status_code=500, detail=error_message)

@app.post("/analyze_report")
async def analyze_report(
    report_text: str = Form(None),
    username: str = Form("default_user"),
    uploaded_file: UploadFile = File(None)
):
    try:
        # If a file is uploaded, read its content
        if uploaded_file:
            try:
                report_text = (await uploaded_file.read()).decode("utf-8")
            except Exception as e:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST, 
                    detail=f"Error reading uploaded file: {str(e)}"
                )

        # Validate input
        if not report_text or not report_text.strip():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Please provide a medical report text or upload a file."
            )

        # Test OpenAI connection
        if not test_openai_connection():
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Cannot connect to OpenAI API. Please check your internet connection and try again."
            )

        # Analyze the report
        analyzed_sections = analyze_report_sections(report_text)
        final_corrected_sections = []
        final_highlighted_sections = []
        all_errors = []

        for heading, original_section, analysis in analyzed_sections:
            corrected_section = analysis.get("corrected_section", original_section)
            errors = analysis.get("errors", [])
            if errors:
                all_errors.extend(errors)
            final_corrected_sections.append(corrected_section)
            highlighted = highlight_error_phrases(original_section, errors)
            final_highlighted_sections.append(highlighted)

        # Generate summary and corrections
        if not all_errors:
            final_corrected_report = report_text
            summary = generate_summary(report_text)
        else:
            final_corrected_report = "\n\n".join(final_corrected_sections)
            summary = generate_summary(final_corrected_report)

        # Save to S3 if configured
        if aws_access_key_id and aws_secret_access_key and aws_region and bucket_name:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            corrected_file_name = f"reports/{username}/corrected_{timestamp}.txt"
            upload_text_to_s3(corrected_file_name, final_corrected_report)

        return {
            "username": username,
            "original_report": report_text,
            "final_corrected_report": final_corrected_report,
            "diagnostic_discrepancies": all_errors,
            "highlighted_report": "\n\n".join(final_highlighted_sections) if all_errors else report_text,
            "summary": summary
        }

    except HTTPException as he:
        raise he
    except Exception as e:
        error_message = str(e)
        if "getaddrinfo failed" in error_message:
            error_message = "Cannot connect to OpenAI API. Please check your internet connection and try again."
        elif "api_key" in error_message.lower():
            error_message = "Invalid or missing API key. Please check your OpenAI API key configuration."
        raise HTTPException(status_code=500, detail=error_message)

def highlight_error_phrases(text, errors):
    """Highlight error phrases in the text with HTML spans"""
    if not errors:
        return text

    # Sort errors by their position in reverse order to avoid offset issues
    sorted_errors = sorted(errors, key=lambda x: x.get("position", 0), reverse=True)

    # Create a copy of the text to modify
    highlighted_text = text

    for error in sorted_errors:
        phrase = error.get("phrase", "")
        if phrase and phrase in highlighted_text:
            highlighted_phrase = f'<span class="error-highlight" style="background-color: #ffeb3b;">{phrase}</span>'
            highlighted_text = highlighted_text.replace(phrase, highlighted_phrase)

    return highlighted_text

@app.post("/chatbot")
async def chat_with_bot(chat_message: ChatMessage):
    try:
        # Use OpenAI to generate response
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": """You are a helpful AI assistant for a radiology application. 
                You can help users with:
                1. Report Correction: Analyzing and correcting radiology reports
                2. Report Anonymization: Helping anonymize patient data while preserving clinical information
                3. General application usage and features
                Keep responses concise, friendly, and focused on radiology topics."""},
                {"role": "user", "content": chat_message.message}
            ],
            max_tokens=150,
            temperature=0.7
        )
        
        return {"message": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8001)
