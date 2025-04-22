import os
import psycopg2
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Database connection parameters
DB_HOST = os.getenv('DB_HOST', 'localhost')
DB_PORT = os.getenv('DB_PORT', '5432')
DB_NAME = os.getenv('DB_NAME', 'postgres')
DB_USER = os.getenv('DB_USER', 'postgres')
DB_PASSWORD = os.getenv('DB_PASSWORD', 'postgres')

def check_database():
    print("Checking database connection and contents...")
    try:
        # Connect to database
        print(f"\nTrying to connect to database at {DB_HOST}:{DB_PORT}")
        conn = psycopg2.connect(
            host=DB_HOST,
            port=DB_PORT,
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD
        )
        cur = conn.cursor()
        
        # Check if rugrel table exists
        print("\nChecking rugrel table...")
        cur.execute("""
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE table_name = 'rugrel'
            );
        """)
        table_exists = cur.fetchone()[0]
        print(f"Table 'rugrel' exists: {table_exists}")
        
        if table_exists:
            # Check table structure
            print("\nTable structure:")
            cur.execute("""
                SELECT column_name, data_type 
                FROM information_schema.columns 
                WHERE table_name = 'rugrel';
            """)
            columns = cur.fetchall()
            for col in columns:
                print(f"  {col[0]}: {col[1]}")
            
            # Check table contents
            print("\nTable contents:")
            cur.execute("SELECT id, username, gmail, password FROM rugrel;")
            rows = cur.fetchall()
            for row in rows:
                print(f"  ID: {row[0]}")
                print(f"  Username: {row[1]}")
                print(f"  Email: {row[2]}")
                print(f"  Password hash: {row[3][:20]}...")
                print()
        
        cur.close()
        conn.close()
        print("\nDatabase check completed successfully.")
        
    except Exception as e:
        print(f"\nError during database check: {str(e)}")

if __name__ == "__main__":
    check_database()
