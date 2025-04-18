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

# Copy backend files
COPY main.py report_analyzer.py ./
COPY backend/ ./backend/
COPY .env ./

# Install Python dependencies
RUN pip install --no-cache-dir -r backend/requirements.txt && \
    pip install --no-cache-dir psycopg2-binary python-jose[cryptography] \
    aiofiles uvicorn fastapi passlib python-dotenv bcrypt

# Copy built frontend from first stage
RUN mkdir -p /app/static/
COPY --from=frontend-build /frontend-dist/ /app/static/

# Create the database initialization script
COPY backend/db_init.sh /app/db_init.sh
RUN chmod +x /app/db_init.sh

# Create the FastAPI wrapper
COPY backend/main_wrapper.py /app/main_wrapper.py

# Create the startup script
RUN echo '#!/bin/bash\n\
\n\
echo "Starting MediXscan Full Stack Application..."\n\
echo "- FastAPI backend and React frontend will be available at http://localhost:8000"\n\
echo "- API endpoints are available at http://localhost:8000/api/..."\n\
echo "- Using database at $DB_HOST:$DB_PORT"\n\
\n\
# Check database connection
echo "Checking database connection..."\n\
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "SELECT version();" || {\n\
    echo "ERROR: Cannot connect to database at $DB_HOST:$DB_PORT"\n\
    echo "Please check your database configuration in .env file"\n\
    exit 1\n\
}\n\
\n\
# Initialize database\n\
/app/db_init.sh\n\
\n\
# Fix frontend asset paths if needed\n\
if [ -f "/app/static/index.html" ]; then\n\
    cp /app/static/index.html /app/static/index.html.bak\n\
    sed -i "s|href=\"/|href=\"|g" /app/static/index.html\n\
    sed -i "s|src=\"/|src=\"|g" /app/static/index.html\n\
fi\n\
\n\
# Start FastAPI server with the wrapper\n\
echo "Starting FastAPI server..."\n\
exec python -m uvicorn main_wrapper:app --host 0.0.0.0 --port 8000 --reload\n\
' > /app/start.sh

RUN chmod +x /app/start.sh

# Expose port for the combined application
EXPOSE 8000

# Start the application
CMD ["/app/start.sh"] 