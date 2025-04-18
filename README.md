# MediXscan

This project consists of a FastAPI backend and a React frontend for medical image scanning and analysis.

## Running with Docker

### Prerequisites
- Docker
- Docker Compose

### Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd MediXscan
```

2. Set up environment variables:
   - Make sure the `.env` file exists in the `backend` directory with the required configuration

3. Build and start the containers:
```bash
docker-compose up -d
```

4. Access the application:
   - Frontend: http://localhost:80
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

### Development Mode

To run the services in development mode:

1. Backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn app:app --reload
```

2. Frontend:
```bash
cd CODE-REACT
npm install
npm run dev
```

## Architecture

- **Backend**: FastAPI (Python) in the `backend` directory
- **Frontend**: React.js in the `CODE-REACT` directory
- **Database**: PostgreSQL

## Docker Services

- **backend**: The FastAPI application
- **frontend**: The React application served with Nginx
- **db**: PostgreSQL database

## Notes

- The backend environment variables are stored in `backend/.env`
- The frontend is configured to proxy API requests to the backend
- Database data is persisted using a Docker volume 