CREATE DATABASE IF NOT EXISTS devops_db;
USE devops_db;

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  major VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO students (name, email, phone, major) VALUES
('Nguyễn Văn Thương', 'thuong@example.com', '0123456789', 'Công Nghệ Thông Tin'),
('Trần Văn A', 'trananh@example.com', '0987654321', 'Khoa Học Máy Tính'),
('Phạm Thị B', 'phamthib@example.com', '0912345678', 'Hệ Thống Thông Tin');
