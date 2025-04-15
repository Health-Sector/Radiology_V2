from sqlalchemy.orm import Session
from database import get_db
from models import User

def check_users():
    db = next(get_db())
    try:
        # Get all users
        users = db.query(User).all()
        print("\nAll Users:")
        for user in users:
            print(f"ID: {user.id}")
            print(f"Username: {user.username}")
            print(f"Gmail: {user.gmail}")
            print(f"Password (hashed): {user.password}")
            print("-" * 50)
    except Exception as e:
        print(f"Error: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    check_users()
