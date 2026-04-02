-- Create database if not exists
CREATE DATABASE IF NOT EXISTS devops_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Use the database
USE devops_db;

-- Create students table
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    major VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample data
INSERT INTO students (name, email, phone, major, created_at) VALUES
('Phạm Nhân Tài', 'pham.nhan.tai@university.edu', '0987654321', 'Công Nghệ Thông Tin', NOW()),
('Nguyễn Văn A', 'nguyen.van.a@university.edu', '0912345678', 'Hệ Thống Thông Tin', NOW()),
('Trần Thị B', 'tran.thi.b@university.edu', '0901234567', 'Khoa Học Dữ Liệu', NOW()),
('Lê Minh C', 'le.minh.c@university.edu', '0923456789', 'Phát Triển Phần Mềm', NOW()),
('Hoàng Yến D', 'hoang.yen.d@university.edu', '0934567890', 'Công Nghệ Thông Tin', NOW());

-- Create a user for the application
CREATE USER IF NOT EXISTS 'devops_user'@'%' IDENTIFIED BY 'devops_password_123';
GRANT ALL PRIVILEGES ON devops_db.* TO 'devops_user'@'%';
FLUSH PRIVILEGES;
