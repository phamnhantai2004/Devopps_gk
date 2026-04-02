-- Create database
CREATE DATABASE IF NOT EXISTS student_db;

USE student_db;

-- Create students table
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    class_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO students (name, email, class_name) VALUES
('Nguyễn Văn A', 'nguyena@example.com', 'DevOps Class 2026'),
('Trần Thị B', 'tranb@example.com', 'DevOps Class 2026'),
('Lê Văn C', 'levc@example.com', 'DevOps Class 2026'),
('Phạm Thị D', 'phamd@example.com', 'DevOps Class 2026'),
('Hoàng Văn E', 'hoange@example.com', 'DevOps Class 2026');

-- Create index for email
CREATE INDEX idx_email ON students(email);
