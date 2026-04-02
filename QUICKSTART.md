# Quick Start Guide

## 🚀 Chạy Dự Án trong 5 Phút

### Yêu Cầu Tiên Quyết
- Docker & Docker Compose cài đặt
- Git cài đặt

### Bước 1: Clone Repository
```bash
cd path/to/your/workspace
git clone <repository_url>
cd Devopps_gk
```

### Bước 2: Cập Nhật Thông Tin Sinh Viên (Tùy Chọn)
Xem file `STUDENT_INFO.md` để cập nhật thông tin của bạn.

### Bước 3: Chạy Docker Compose
```bash
docker-compose up -d
```

**Đợi khoảng 30 giây để database khởi động...**

### Bước 4: Kiểm Tra Services
Mở browser và truy cập:

1. **Frontend**: http://localhost
2. **Health Check**: http://localhost/health
3. **About Page**: http://localhost/about
4. **API Docs**: Xem file `API_DOCUMENTATION.md`

### Bước 5: Test CRUD Operations

#### Tạo Sinh Viên Mới
```bash
curl -X POST http://localhost/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Student",
    "email": "test@example.com",
    "class_name": "Test Class"
  }'
```

#### Lấy Danh Sách Sinh Viên
```bash
curl http://localhost/api/students
```

#### Cập Nhật Sinh Viên
```bash
curl -X PUT http://localhost/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Name",
    "email": "updated@example.com",
    "class_name": "Updated Class"
  }'
```

#### Xóa Sinh Viên
```bash
curl -X DELETE http://localhost/api/students/1
```

---

## 📋 Checklist

✅ Clone project
✅ Chạy `docker-compose up -d`
✅ Truy cập frontend tại http://localhost
✅ Test API endpoints
✅ Xem thông tin sinh viên tại http://localhost/about

## ❌ Troubleshooting

### Port đã được sử dụng
```bash
# Tìm process
netstat -ano | findstr :80   # hoặc :3000, :3306

# Kill process
taskkill /PID <PID> /F
```

### Database không kết nối
```bash
# Xem logs
docker-compose logs db

# Restart services
docker-compose restart db
```

### Frontend không hiển thị
```bash
# Xem nginx logs
docker-compose logs frontend

# Kiểm tra backend
docker-compose logs backend
```

### Clear và restart
```bash
docker-compose down -v
docker-compose up -d
```

---

## 📚 Xem Thêm

- 📖 [Full README](README.md)
- 🛠️ [Docker Setup Guide](DOCKER_SETUP.md)
- 📡 [API Documentation](API_DOCUMENTATION.md)
- 🤝 [Contributing Guide](CONTRIBUTING.md)

---

**Enjoy! Happy DevOps! 🚀**
