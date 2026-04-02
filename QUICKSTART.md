​# Quick Start Guide

## Bắt Đầu Nhanh

### Chạy Ứng Dụng Cục Bộ (Local)

#### 1. Cài Đặt Dependencies
```bash
cd backend
npm install
```

#### 2. Thiết Lập Database (MySQL)
Đảm bảo MySQL đang chạy, sau đó import init.sql:
```bash
mysql -u root -p < database/init.sql
```

#### 3. Chạy Backend
```bash
cd backend
npm start
```
Server chạy tại `http://localhost:3000`

#### 4. Chạy Frontend
- Mở file `frontend/index.html` trực tiếp trong trình duyệt
- Hoặc sử dụng web server (Live Server trong VSCode)

### Chạy với Docker Compose (Khuyến Nghị)

```bash
# Build và chạy tất cả services
docker-compose up --build

# Chạy ở background
docker-compose up -d

# Xem logs
docker-compose logs -f

# Dừng services
docker-compose down

# Dừng và xóa volumes
docker-compose down -v
```

### Kiểm Tra Ứng Dụng

1. **Frontend**: http://localhost
2. **Health Check**: http://localhost:3000/health
3. **Student Info**: http://localhost:3000/about
4. **API**: http://localhost:3000/api/students

### Cấu Hình

Chỉnh sửa `.env` để thay đổi:
- Thông tin sinh viên
- Cấu hình database
- Cổng mạng
- Tên ứng dụng

## Các Lệnh Hữu Ích

### Git Commands
```bash
# Xem branches
git branch -a

# Chuyển branch
git checkout develop
git checkout -b feature/new-feature

# Commit
git add .
git commit -m "message"

# Push
git push origin <branch-name>

# Pull
git pull origin main
```

### Docker Commands
```bash
# Build image
docker build -t app-backend -f backend/Dockerfile .

# Push to Docker Hub
docker tag app-backend username/app-backend:latest
docker push username/app-backend:latest

# List images
docker images

# List containers
docker ps -a

# Clean up
docker system prune -a
```

## Troubleshooting

### Port Already in Use
```bash
# Windows (PowerShell)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
```

### Database Connection Error
- Kiểm tra MySQL đang chạy
- Kiểm tra DATABASE_URL đúng trong `.env`
- Kiểm tra username/password

### CORS Error
- Kiểm tra frontend URL trong CORS configuration
- Kiểm tra backend CORS middleware

### Docker Issues
```bash
# Rebuild without cache
docker-compose up --build --no-cache

# Remove all containers
docker-compose down -v

# Check logs
docker-compose logs <service-name>
```
