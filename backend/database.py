from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os
import time
from sqlalchemy.exc import OperationalError
from contextlib import contextmanager

# Load environment variables
load_dotenv()

# Database credentials from environment variables
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DATABASE_PORT")

# Create PostgreSQL URL
SQLALCHEMY_DATABASE_URL = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

# Create engine with connection pool settings
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_pre_ping=True,  # Enable connection health checks
    pool_size=5,  # Maximum number of connections in the pool
    pool_recycle=1800,  # Recycle connections after 30 minutes
    connect_args={
        "connect_timeout": 30,  # Connection timeout in seconds
    }
)

# Create SessionLocal class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create Base class
Base = declarative_base()

def wait_for_db(max_retries=5, retry_interval=5):
    """Wait for database to be available"""
    retries = 0
    while retries < max_retries:
        try:
            # Try to connect to the database
            with engine.connect() as conn:
                conn.execute(text("SELECT 1"))
            print("Successfully connected to the database")
            return True
        except OperationalError as e:
            retries += 1
            if retries == max_retries:
                print(f"Could not connect to database after {max_retries} attempts: {e}")
                return False
            print(f"Database not ready, retrying in {retry_interval} seconds... (Attempt {retries}/{max_retries})")
            time.sleep(retry_interval)

@contextmanager
def get_db_context():
    """Context manager for database sessions"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_db():
    """Dependency to get database session"""
    with get_db_context() as db:
        yield db

def check_db_connection():
    """Check if database connection is alive"""
    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        return True
    except Exception as e:
        print(f"Database connection check failed: {e}")
        return False
