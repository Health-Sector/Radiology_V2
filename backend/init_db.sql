-- Drop existing tables if they exist
DROP TABLE IF EXISTS report_history;
DROP TABLE IF EXISTS rugrel;

-- Create the rugrel table for user authentication
CREATE TABLE rugrel (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    gmail VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert users with temporary passwords
-- These passwords will be updated by update_password.py
INSERT INTO rugrel (username, gmail, password)
VALUES 
    ('admin', 'admin@medixscan.com', 'temporary_placeholder'),
    ('safwan', 'safwan@gmail.com', 'temporary_placeholder');

-- Create table for report history
CREATE TABLE report_history (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) REFERENCES rugrel(username),
    report_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 