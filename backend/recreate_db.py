from sqlalchemy import create_engine, text
from database import SQLALCHEMY_DATABASE_URL
from models import Base
import psycopg2
from database import DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME

def recreate_database():
    # First, connect to PostgreSQL and drop the existing table
    conn = psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )
    conn.autocommit = True
    cursor = conn.cursor()
    
    try:
        # Drop the existing table if it exists
        cursor.execute("DROP TABLE IF EXISTS rugrel CASCADE")
        print("Dropped old table 'rugrel'")
        
        # Close PostgreSQL connection
        cursor.close()
        conn.close()
        
        # Create new tables using SQLAlchemy
        engine = create_engine(SQLALCHEMY_DATABASE_URL)
        Base.metadata.create_all(bind=engine)
        print("Created new table 'users' with updated schema")
        
    except Exception as e:
        print(f"Error: {str(e)}")
        raise e

if __name__ == "__main__":
    recreate_database()
