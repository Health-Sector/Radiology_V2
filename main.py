from fastapi import FastAPI, HTTPException, UploadFile, File, Form, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import openai
from dotenv import load_dotenv
import os
import re
import json
import psycopg2
from datetime import datetime, timedelta
from typing import Optional
from jose import jwt
from passlib.context import CryptContext
import uuid

# ---------------- Setup ----------------

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# JWT settings
SECRET_KEY = os.getenv("JWT_SECRET_KEY", "your-secret-key")  # Change in production
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 1440  # 24 hours

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# PostgreSQL credentials from .env file
db_host = os.getenv("DB_HOST")
db_name = os.getenv("DB_NAME")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_port = os.getenv("DB_PORT")


app = FastAPI()

from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Request

@app.get("/")
async def read_root(request: Request):
    try:
        # Print request information
        print(f"Received request from: {request.client}")
        print(f"Headers: {request.headers}")
        
        # Test database connection
        conn = get_db_connection()
        conn.close()
        
        return JSONResponse(
            content={"status": "ok", "message": "Server is running, database connected"},
            headers={"Access-Control-Allow-Origin": "*"}
        )
    except Exception as e:
        print(f"Error: {str(e)}")
        return JSONResponse(
            content={"status": "error", "message": f"Server is running, but error: {str(e)}"},
            headers={"Access-Control-Allow-Origin": "*"}
        )

# Allow CORS for your React frontend
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Could not validate credentials")
        return username
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except jwt.JWTError:
        raise HTTPException(status_code=401, detail="Could not validate credentials")

# Database connection helper function
def get_db_connection():
    try:
        conn = psycopg2.connect(
            host=db_host,
            database=db_name,
            user=db_user,
            password=db_password,
            port=db_port
        )
        return conn
    except Exception as e:
        print(f"Database connection failed: {str(e)}")
        raise HTTPException(
            status_code=503,
            detail="Service temporarily unavailable. Please try again later."
        )

def authenticate_user(username: str, password: str):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT password FROM rugrel WHERE username = %s OR gmail = %s", (username, username))
        row = cursor.fetchone()
        conn.close()
        
        if row and verify_password(password, row[0]):
            return True
        return False
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

# Updated login function
@app.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    try:
        print(f"Login attempt for: {form_data.username}")
        conn = get_db_connection()
        cursor = conn.cursor()
        
        cursor.execute(
            "SELECT username, password, gmail FROM rugrel WHERE username = %s OR gmail = %s",
            (form_data.username, form_data.username)
        )
        user = cursor.fetchone()
        
        if not user:
            print(f"User not found: {form_data.username}")
            raise HTTPException(
                status_code=401,
                detail="Invalid credentials",
                headers={"WWW-Authenticate": "Bearer"}
            )
            
        username, hashed_password, gmail = user
        print(f"Found user: {username}")
        
        if not pwd_context.verify(form_data.password, hashed_password):
            print(f"Invalid password for: {username}")
            raise HTTPException(
                status_code=401,
                detail="Invalid credentials",
                headers={"WWW-Authenticate": "Bearer"}
            )
            
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"sub": username},
            expires_delta=access_token_expires
        )
        
        print(f"Login successful for: {username}")
        return {"access_token": access_token, "token_type": "bearer"}
        
    except HTTPException as he:
        print(f"HTTPException during login: {he.detail}")
        raise he
    except Exception as e:
        print(f"Unexpected login error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Internal server error"
        )
    finally:
        if 'conn' in locals():
            conn.close()

# Add this test endpoint before other routes
@app.get("/test_db")
async def test_db_connection():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT 1")
        result = cursor.fetchone()
        conn.close()
        return {"status": "success", "db_response": result[0]}
    except Exception as e:
        return {"status": "error", "detail": str(e)}

# ---------------- Helper Functions ----------------

def sanitize_json_string(json_string):
    return re.sub(r'[\x00-\x1F]+', ' ', json_string)

def normalize_text(text):
    return " ".join(text.split())

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
            messages=[{
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
            }, {
                "role": "user", "content": section_text
            }]
        )
        result_str = response['choices'][0]['message']['content'].strip()
        result_str = sanitize_json_string(result_str)
        return json.loads(result_str)
    except Exception as e:
        print(f"Error analyzing section: {str(e)}")
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
            messages=[{
                "role": "system", 
                "content": (
                    "You are an expert radiologist and language editor. Analyze the following full medical report. "
                    "Check for genuine spelling mistakes, typographical errors, and anatomical or contextual discrepancies. "
                    "Be extremely conservative—only make changes that improve clinical clarity or accuracy. "
                    "Return the corrected version of the full report."
                )
            }, {
                "role": "user", "content": report_text
            }]
        )
        corrected_report = response['choices'][0]['message']['content'].strip()
        return corrected_report
    except Exception as e:
        return f"Error during full report correction: {str(e)}"

def generate_summary(report_text):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            temperature=0,
            messages=[{
                "role": "system", 
                "content": (
                    "You are an expert radiologist. Summarize the following medical report in 5 concise bullet points. "
                    "Each bullet point should clearly state a key clinical finding or conclusion from the report. "
                    "Output only the bullet points, each starting with a dash (-)."
                )
            }, {
                "role": "user", "content": report_text
            }]
        )
        summary = response['choices'][0]['message']['content'].strip()
        return summary
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
        highlighted_text = pattern.sub(
            lambda m: f'<span title="{tooltip}" style="color:red; cursor:pointer;">{m.group(0)}</span>',
            highlighted_text
        )
    return highlighted_text

def get_user_history_from_db(username):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT report_history FROM rugrel WHERE username = %s", (username,))
        row = cursor.fetchone()
        conn.close()
        if row and row[0]:
            return json.loads(row[0])
        return []
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")

def save_report_to_db(username, new_report):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        # Get existing history
        cursor.execute("SELECT report_history FROM rugrel WHERE username = %s", (username,))
        row = cursor.fetchone()
        
        if row and row[0]:
            history = json.loads(row[0]) if isinstance(row[0], str) else row[0]
        else:
            history = []
        
        # Add new report
        new_report = {
            "id": str(uuid.uuid4()),
            "timestamp": datetime.now().isoformat(),
            "report_text": new_report
        }
        history.append(new_report)
        
        # Update database
        cursor.execute(
            "UPDATE rugrel SET report_history = %s WHERE username = %s",
            (json.dumps(history), username)
        )
        conn.commit()
        
        return {"message": "Report successfully saved!"}
        
    except Exception as e:
        print(f"Error saving report: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to save report. Please try again."
        )
    finally:
        if 'conn' in locals():
            conn.close()

# ---------------- API Endpoints ----------------

@app.post("/analyze_report")
async def analyze_report(
    username: str = Form(...),
    report_text: str = Form(None),
    uploaded_file: UploadFile = File(None)
):
    try:
        # If a file is uploaded, read its content
        if uploaded_file:
            try:
                report_text = (await uploaded_file.read()).decode("utf-8")
            except Exception as e:
                raise HTTPException(
                    status_code=400,
                    detail=f"Error reading uploaded file: {str(e)}"
                )

        if not report_text or not report_text.strip():
            raise HTTPException(
                status_code=400,
                detail="Please provide a medical report text or upload a file."
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

        return {
            "username": username,
            "original_report": report_text,
            "final_corrected_report": final_corrected_report,
            "diagnostic_discrepancies": all_errors,
            "highlighted_report": "\n\n".join(final_highlighted_sections) if all_errors else report_text,
            "summary": summary
        }

    except HTTPException as he:
        print(f"HTTP Exception during analysis: {str(he)}")
        raise he
    except Exception as e:
        print(f"Error during analysis: {str(e)}")
        error_message = str(e)
        if "getaddrinfo failed" in error_message:
            error_message = "Cannot connect to OpenAI API. Please check your internet connection and try again."
        elif "api_key" in error_message.lower():
            error_message = "Invalid or missing API key. Please check your OpenAI API key configuration."
        raise HTTPException(status_code=500, detail=f"Error processing the report: {error_message}")

# Add a simple test endpoint that doesn't use OpenAI
@app.post("/test_analyze")
async def test_analyze(
    username: str = Form(...),
    report_text: str = Form(None),
    uploaded_file: UploadFile = File(None)
):
    try:
        # Simple endpoint to verify routing is working
        result_text = report_text
        if uploaded_file:
            try:
                result_text = (await uploaded_file.read()).decode("utf-8")
            except:
                result_text = "Error reading uploaded file"
        
        if not result_text:
            result_text = "No text provided"
            
        return {
            "status": "success",
            "username": username,
            "text_length": len(result_text),
            "sample": result_text[:50] + "..." if len(result_text) > 50 else result_text
        }
    except Exception as e:
        print(f"Error in test_analyze: {str(e)}")
        return {"status": "error", "detail": str(e)}

@app.get("/history")
def get_history(current_user: str = Depends(get_current_user)):
    history = get_user_history_from_db(current_user)
    return {"username": current_user, "history": history}

@app.post("/save_report")
def save_report(current_user: str = Depends(get_current_user), report_text: str = Form(...)):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        # Get existing history (handle both string and list cases)
        cursor.execute("SELECT report_history FROM rugrel WHERE username = %s", (current_user,))
        row = cursor.fetchone()
        
        if row and row[0]:
            history = json.loads(row[0]) if isinstance(row[0], str) else row[0]
        else:
            history = []
        
        # Add new report with metadata
        new_report = {
            "id": str(uuid.uuid4()),
            "timestamp": datetime.now().isoformat(),
            "report_text": report_text,
            "status": "corrected",
            "version": len(history) + 1
        }
        history.append(new_report)
        
        # Update database
        cursor.execute(
            "UPDATE rugrel SET report_history = %s WHERE username = %s",
            (json.dumps(history), current_user)
        )
        conn.commit()
        
        return {
            "message": "Report successfully saved to database!",
            "report_id": new_report["id"],
            "version": new_report["version"],
            "timestamp": new_report["timestamp"]
        }
        
    except Exception as e:
        print(f"Error saving report: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to save report: {str(e)}"
        )
    finally:
        if 'conn' in locals():
            conn.close()

@app.delete("/history")
def delete_history(current_user: str = Depends(get_current_user)):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("UPDATE rugrel SET report_history = %s WHERE username = %s", (json.dumps([]), current_user))
        conn.commit()
        conn.close()
        return {"message": "History deleted successfully", "username": current_user}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
