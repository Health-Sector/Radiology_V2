from sqlalchemy import Column, Integer, String, DateTime, Text
from sqlalchemy.sql import func
from database import Base

class User(Base):
    __tablename__ = "rugrel"  # Using your existing table name

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    gmail = Column(String, unique=True, index=True, nullable=False)  # Using gmail instead of email
    password = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    report_history = Column(Text, server_default="[]")
