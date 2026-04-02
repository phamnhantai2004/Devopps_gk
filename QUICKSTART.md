# Hướng Dẫn Nhanh - DevOps Project

Chạy dự án DevOps Student Management System trong 3 bước.

## 🚀 Bước 1: Chuẩn Bị

```bash
# Clone repository
git clone https://github.com/phamnhantai2004/devops-project.git
cd devops-project
```

## 📦 Bước 2: Build & Run

```bash
# Khởi động tất cả services (Backend + Frontend + MySQL Database)
docker-compose up --build
```

Chờ khoảng 30 giây để tất cả services khởi động hoàn tất.

## ✅ Bước 3: Truy Cập Ứng Dụng

**Frontend (Giao diện chính)**
```
http://localhost
```

**Health Check (Kiểm tra trạng thái)**
```
http://localhost:3000/health
```

**Thông Tin Sinh Viên**
```
http://localhost:3000/about
```

**API Students (Danh sách sinh viên)**
```
http://localhost:3000/api/students
```

## 🎯 Các Lệnh Hữu Ích

```bash
# Xem trạng thái containers
docker-compose ps

# Xem logs của backend
docker-compose logs -f backend

# Xem logs của frontend
docker-compose logs -f frontend

# Xem logs của database
docker-compose logs -f mysql

# Stop tất cả services
docker-compose down

# Stop và xóa dữ liệu
docker-compose down -v
```

## 🐳 Push lên Docker Hub

```bash
# Build images
docker-compose build

# Tag images
docker tag devops_backend:latest phamtai123/devops-backend:latest
docker tag devops_frontend:latest phamtai123/devops-frontend:latest

# Push lên Docker Hub
docker push phamtai123/devops-backend:latest
docker push phamtai123/devops-frontend:latest
```

## 📋 API Endpoints

### Health Check
```bash
curl http://localhost:3000/health
# Response: {"status":"ok", "service":"DevOps Student Management System"}
```

### Thông Tin Sinh Viên
```bash
curl http://localhost:3000/about
# Response: {"student_name":"Phạm Nhân Tài", "student_id":"2251220183", "class":"22ct4"}
```

### Lấy Danh Sách Sinh Viên
```bash
curl http://localhost:3000/api/students
```

### Thêm Sinh Viên Mới
```bash
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Nguyễn Văn X","email":"x@email.com","phone":"0123456789","major":"IT"}'
```

### Cập Nhật Sinh Viên
```bash
curl -X PUT http://localhost:3000/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Tên mới","email":"email@new.com"}'
```

### Xóa Sinh Viên
```bash
curl -X DELETE http://localhost:3000/api/students/1
```

## 🛠 Cấu Hình

Mọi tham số cấu hình trong file `.env`:

```env
# Thông tin sinh viên
STUDENT_NAME=Phạm Nhân Tài
STUDENT_ID=2251220183
CLASS=22ct4

# Backend
PORT=3000
APP_NAME=DevOps Student Management System
NODE_ENV=production

# Database
DB_HOST=mysql
DB_USER=devops_user
DB_PASSWORD=devops_password_123
DB_NAME=devops_db
DB_PORT=3306

# Docker Hub
DOCKER_REGISTRY=phamtai123
```

## ⚠️ Sự Cố Thường Gặp

### Lỗi: "Port 3000 is already in use"
```bash
# Windows
netstat -ano | find ":3000"
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
```

### Lỗi: "Cannot connect to database"
- Chờ MySQL container khởi động (30 giây)
- Kiểm tra: `docker-compose logs mysql`
- Kiểm tra DB_HOST = "mysql" trong .env

### Frontend không hiển thị dữ liệu
- Kiểm tra backend: http://localhost:3000/health
- Xóa cache browser: Ctrl+Shift+Delete
- Check logs: `docker-compose logs frontend`

---

💡 **Tip**: Tất cả dữ liệu sẽ được lưu trong MySQL database, không bị mất khi restart container.

Để xóa dữ liệu: `docker-compose down -v`
