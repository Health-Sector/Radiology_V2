######################
# Stage 1: Frontend Build
######################
FROM node:20-alpine AS frontend-build

WORKDIR /app/frontend

# Copy package files and install dependencies
COPY CODE-REACT/package*.json ./
RUN npm install

# Copy frontend source and build
COPY CODE-REACT/ ./
ENV PUBLIC_URL=/
RUN npm run build

# Handle different build output directories
RUN mkdir -p /frontend-dist && \
    if [ -d "dist" ]; then \
        cp -r dist/* /frontend-dist/; \
    elif [ -d "build" ]; then \
        cp -r build/* /frontend-dist/; \
    else \
        echo "<html><body><h1>MediXscan</h1><p>Frontend build not available</p></body></html>" > /frontend-dist/index.html; \
    fi

######################
# Stage 2: Backend Build
######################
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    curl \
    postgresql-client \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js and npm for Vite dev server
RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/*

# Copy backend files
COPY main.py report_analyzer.py ./
COPY backend/ ./backend/

# Install Python dependencies
RUN pip install --no-cache-dir -r backend/requirements.txt && \
    pip install --no-cache-dir psycopg2-binary python-jose[cryptography] \
    aiofiles uvicorn fastapi passlib python-dotenv bcrypt

# Create the FastAPI wrapper
COPY backend/main_wrapper.py /app/main_wrapper.py

# Copy .env file for development (REMOVE FOR PRODUCTION!)
COPY .env /app/.env

# Create the startup script
RUN echo '#!/bin/bash\n\
# Load environment variables from .env if present\n\
if [ -f "/app/.env" ]; then\n\
    export $(grep -v "^#" /app/.env | xargs)\n\
fi\n\
echo "Starting MediXscan Full Stack Application..."\n\
echo "- FastAPI backend and React frontend will be available at http://localhost:8000"\n\
echo "- API endpoints are available at http://localhost:8000/api/..."\n\
echo "- Using database at $DB_HOST:$DB_PORT"\n\
# Check database connection\n\
echo "Checking database connection..."\n\
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "SELECT version();" || {\n\
    echo "ERROR: Cannot connect to database at $DB_HOST:$DB_PORT"\n\
    echo "Please check your database configuration in .env file"\n\
    exit 1\n\
}\n\
' > /app/start.sh

WORKDIR /app/frontend
COPY CODE-REACT/ ./
RUN npm install

WORKDIR /app
RUN pip install uvicorn

# Expose both frontend and backend dev ports
EXPOSE 8000 5175

# Start both Vite dev server and FastAPI (production mode)
CMD ["/bin/sh", "-c", "\
    (cd /app/frontend && npm run dev -- --port 5175 &) && \
    uvicorn main_wrapper:app --host 0.0.0.0 --port 8000\
"]