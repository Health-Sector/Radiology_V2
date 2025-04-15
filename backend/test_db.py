from sqlalchemy import create_engine, text
from database import SQLALCHEMY_DATABASE_URL
import psycopg2

def test_sqlalchemy_connection():
    print("Testing SQLAlchemy connection...")
    try:
        engine = create_engine(SQLALCHEMY_DATABASE_URL)
        with engine.connect() as conn:
            result = conn.execute(text("SELECT 1"))
            print("SQLAlchemy connection successful!")
            
            # Check if the rugrel table exists
            result = conn.execute(text("SELECT * FROM information_schema.tables WHERE table_name = 'rugrel'"))
            if result.fetchone():
                print("Table 'rugrel' exists!")
                # Check table structure
                result = conn.execute(text("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'rugrel'"))
                print("\nTable structure:")
                for row in result:
                    print(f"Column: {row[0]}, Type: {row[1]}")
            else:
                print("Table 'rugrel' does not exist!")
    except Exception as e:
        print(f"SQLAlchemy connection failed: {e}")

def test_psycopg2_connection():
    print("\nTesting direct PostgreSQL connection...")
    try:
        conn = psycopg2.connect(
            dbname="radiology",
            user="postgres",
            password="Mirza#tanzeem786",
            host="rugrel-db.ctwu8i8qk05m.ap-south-1.rds.amazonaws.com",
            port="5432"
        )
        print("PostgreSQL connection successful!")
        conn.close()
    except Exception as e:
        print(f"PostgreSQL connection failed: {e}")

if __name__ == "__main__":
    test_sqlalchemy_connection()
    test_psycopg2_connection()
