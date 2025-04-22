"""
Script to update user passwords in the database.
Run this once to fix the password hashing.
"""

import os
import sys
import psycopg2
from passlib.context import CryptContext
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Database connection parameters
DB_HOST = os.getenv('DB_HOST', 'postgres')
DB_PORT = os.getenv('DB_PORT', '5432')
DB_NAME = os.getenv('DB_NAME', 'medixscan')
DB_USER = os.getenv('DB_USER', 'postgres')
DB_PASSWORD = os.getenv('DB_PASSWORD', 'postgres')

# Create password context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_db_connection():
    """Create a database connection."""
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            port=DB_PORT,
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD
        )
        return conn
    except Exception as e:
        print(f"Error connecting to database: {e}")
        return None

def check_user_exists(username: str):
    """Check if a user exists in the database."""
    conn = get_db_connection()
    if not conn:
        return False
    
    try:
        cur = conn.cursor()
        cur.execute("SELECT COUNT(*) FROM rugrel WHERE username = %s", (username,))
        count = cur.fetchone()[0]
        return count > 0
    except Exception as e:
        print(f"Error checking if user exists: {e}")
        return False
    finally:
        if conn:
            conn.close()

def update_password(username: str, new_password: str):
    """Update password for a specific user."""
    # First check if user exists
    if not check_user_exists(username):
        print(f"User {username} does not exist. Skipping password update.")
        return False
    
    conn = get_db_connection()
    if not conn:
        return False
    
    try:
        # Hash the new password
        hashed_password = pwd_context.hash(new_password)
        
        # Create a cursor
        cur = conn.cursor()
        
        # Update the password
        cur.execute(
            "UPDATE rugrel SET password = %s WHERE username = %s",
            (hashed_password, username)
        )
        
        # Commit the transaction
        conn.commit()
        print(f"Successfully updated password for user: {username}")
        return True
    
    except Exception as e:
        print(f"Error updating password: {e}")
        return False
    
    finally:
        if conn:
            conn.close()

def main():
    try:
        # Update admin password
        admin_success = update_password("admin", "password123")
        print(f"Admin password update {'successful' if admin_success else 'failed'}")
        
        # Update safwan password
        safwan_success = update_password("safwan", "safwan")
        print(f"Safwan password update {'successful' if safwan_success else 'failed'}")
        
        # Return success if at least one password was updated
        return admin_success or safwan_success
    except Exception as e:
        print(f"Unexpected error during password update: {e}")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1) 