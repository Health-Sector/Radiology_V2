import os
import sys
from dotenv import load_dotenv
from fastapi import FastAPI, Request, Response, Depends, Form, File, UploadFile
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables from .env at the very start
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '..', '.env'), override=True)

# Import the original app
sys.path.insert(0, ".")
from main import app as original_app, login_for_access_token, test_db_connection, analyze_report, get_history, save_report, get_current_user, test_analyze

# Create wrapper app
app = FastAPI(title="MediXscan Full Stack", description="Combined FastAPI backend and React frontend")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount original app at /api path
app.mount("/api", original_app)

# Handle token endpoint separately for authentication
@app.post("/token")
async def token_endpoint(username: str = Form(...), password: str = Form(...)):
    print(f"Token endpoint called with username: {username}")
    
    # Create a Form object that matches what the login function expects
    class FormData:
        def __init__(self, username, password):
            self.username = username
            self.password = password
            self.scope = ""
            self.client_id = None
            self.client_secret = None
    
    form_data = FormData(username, password)
    
    try:
        # Call the original login function
        return await login_for_access_token(form_data=form_data)
    except Exception as e:
        print(f"Error in token endpoint: {str(e)}")
        import traceback
        traceback.print_exc()
        return JSONResponse(
            status_code=401,
            content={"detail": "Invalid credentials"}
        )

# Add test_db route at the root level for compatibility
@app.get("/test_db")
async def test_db_root():
    print("Root test_db endpoint called")
    return await test_db_connection()

# Add analyze_report endpoint at root level
@app.post("/analyze_report")
async def analyze_report_root(
    username: str = Form(...),
    report_text: str = Form(None),
    uploaded_file: UploadFile = File(None)
):
    print("Root analyze_report endpoint called")
    return await analyze_report(username=username, report_text=report_text, uploaded_file=uploaded_file)

# Add test_analyze endpoint at root level (doesn't use OpenAI)
@app.post("/test_analyze")
async def test_analyze_root(
    username: str = Form(...),
    report_text: str = Form(None),
    uploaded_file: UploadFile = File(None)
):
    print("Root test_analyze endpoint called")
    return await test_analyze(username=username, report_text=report_text, uploaded_file=uploaded_file)

# Add history endpoint at root level
@app.get("/history")
async def history_root(current_user: str = Depends(get_current_user)):
    print("Root history endpoint called")
    return get_history(current_user=current_user)

# Add save_report endpoint at root level
@app.post("/save_report")
async def save_report_root(current_user: str = Depends(get_current_user), report_text: str = Form(...)):
    print("Root save_report endpoint called")
    return save_report(current_user=current_user, report_text=report_text)

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "healthy", "components": {"api": "up", "frontend": "up"}}

# Serve static files for React app
if os.path.exists("static"):
    # Mount static files
    app.mount("/static", StaticFiles(directory="static"), name="static")
    
    # Mount subdirectories that might contain assets
    for subdir in ["assets", "js", "css", "media", "img", "images"]:
        if os.path.exists(f"static/{subdir}"):
            app.mount(f"/{subdir}", StaticFiles(directory=f"static/{subdir}"), name=subdir)
    
    # Mount root files
    for file in os.listdir("static"):
        if file.endswith((".js", ".css")) and not file.startswith("."): 
            @app.get(f"/{file}")
            async def serve_root_file(file_name=file):
                return FileResponse(f"static/{file_name}")
    
    # Serve React app for all other routes, but prioritize API calls
    @app.get("/{full_path:path}")
    async def serve_frontend(request: Request, full_path: str):
        # API endpoints to bypass frontend serving
        api_endpoints = ["analyze_report", "history", "save_report", "test_db", "test_analyze"]
        
        if full_path == "token" or full_path.startswith("api/") or full_path in api_endpoints:
            pass  # Let API routes handle these
        else:
            # Check if static file
            static_path = f"static/{full_path}"
            if os.path.exists(static_path) and os.path.isfile(static_path):
                return FileResponse(static_path)
            
            # Default to index.html for client-side routing
            index_path = "static/index.html"
            if os.path.exists(index_path):
                return FileResponse(index_path)
            else:
                return JSONResponse(
                    {"error": "React app not found", "path": full_path},
                    status_code=404
                ) 