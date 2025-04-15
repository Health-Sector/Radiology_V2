from fastapi import FastAPI, HTTPException, Form, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import re
import random
from datetime import datetime
import json

app = FastAPI()

# Allow CORS for your React frontend
origins = ["http://localhost:3000", "http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock function to analyze report sections
def analyze_report_sections(report_text):
    # Split report into sections (simplified for demo)
    sections = []
    current_section = ""
    current_heading = "REPORT"
    
    for line in report_text.split('\n'):
        if line.strip().isupper() and len(line.strip()) > 3:
            # This might be a heading
            if current_section:
                sections.append((current_heading, current_section, {}))
            current_heading = line.strip()
            current_section = ""
        else:
            current_section += line + "\n"
    
    # Add the last section
    if current_section:
        sections.append((current_heading, current_section, {}))
    
    # Analyze each section
    analyzed_sections = []
    for heading, content, _ in sections:
        # Mock analysis with random errors
        errors = []
        if random.random() > 0.5:  # 50% chance to have errors
            error_types = ["medical", "typographical", "misspelled"]
            error_phrases = ["patient", "diagnosis", "treatment", "examination", "findings"]
            
            # Generate 0-3 random errors
            for _ in range(random.randint(0, 3)):
                error_type = random.choice(error_types)
                error_phrase = random.choice(error_phrases)
                errors.append({
                    "error_type": error_type,
                    "phrase": error_phrase,
                    "suggestion": f"Corrected {error_phrase}",
                    "explanation": f"This is a {error_type} error that needs correction."
                })
        
        # Create corrected section with mock corrections
        corrected_section = content
        for error in errors:
            corrected_section = corrected_section.replace(
                error["phrase"], 
                f"**{error['suggestion']}**"
            )
        
        analyzed_sections.append((
            heading, 
            content, 
            {
                "corrected_section": corrected_section,
                "errors": errors
            }
        ))
    
    return analyzed_sections

# Mock function to generate summary
def generate_summary(report_text):
    return "This is an automated summary of the medical report. The report appears to contain findings related to a medical examination."

# Mock function to highlight error phrases
def highlight_error_phrases(text, errors):
    highlighted = text
    for error in errors:
        phrase = error.get("phrase", "")
        if phrase:
            highlighted = highlighted.replace(
                phrase, 
                f"<span class='highlight-error'>{phrase}</span>"
            )
    return highlighted

# Mock function to correct full report
def correct_full_report(report_text):
    return report_text  # In a real implementation, this would apply corrections

# API Endpoints
@app.post("/analyze_report")
async def analyze_report(
    username: str = Form(...),
    report_text: str = Form(None),
    uploaded_file: UploadFile = File(None)
):
    # Use the uploaded file if provided; otherwise use the report_text field.
    if uploaded_file:
        try:
            report_text = (await uploaded_file.read()).decode('utf-8')
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Error reading uploaded file: {str(e)}")
    if not report_text or not report_text.strip():
        raise HTTPException(status_code=400, detail="Please provide a medical report text or upload a file.")

    try:
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
            final_highlighted_report = "\n\n".join(final_highlighted_sections)
            summary = generate_summary(final_corrected_report)

        return {
            "username": username,
            "original_report": report_text,
            "final_corrected_report": correct_full_report(report_text),
            "diagnostic_discrepancies": all_errors,
            "highlighted_report": "\n\n".join(final_highlighted_sections) if all_errors else report_text,
            "summary": summary
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing the report: {str(e)}")

@app.get("/test")
def test_endpoint():
    return {"status": "ok", "message": "Report Analyzer API is running"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
