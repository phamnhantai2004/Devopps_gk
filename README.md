# Student Management System

## 📋 Giới Thiệu

Đây là một ứng dụng quản lý sinh viên hoàn chỉnh được phát triển với:
- **Backend**: Node.js + Express + MySQL
- **Frontend**: HTML5 + CSS3 + JavaScript Vanilla
- **Database**: MySQL 8.0
- **DevOps**: Docker + Docker Compose

## 👨‍🎓 Thông Tin Sinh Viên

- **Họ Tên**: Phạm Nhân Tài
- **Mã Số Sinh Viên**: 2251220183
- **Lớp**: 22CT4

## ✨ Tính Năng Chính

### 1. **Health Check** (`/health`)
- Kiểm tra trạng thái server
- Response: `{ "status": "ok" }`

### 2. **About Page** (`/about`)
- Hiển thị thông tin sinh viên
- Tên ứng dụng từ biến môi trường

### 3. **Student Management API**
#### GET `/api/students`
- Lấy danh sách tất cả sinh viên

#### GET `/api/students/:id`
- Lấy thông tin chi tiết sinh viên theo ID

#### POST `/api/students`
- Tạo sinh viên mới
- Request body: `{ "name": "...", "email": "...", "class_name": "..." }`

#### PUT `/api/students/:id`
- Cập nhật thông tin sinh viên
- Request body: `{ "name": "...", "email": "...", "class_name": "..." }`

#### DELETE `/api/students/:id`
- Xóa sinh viên

### 4. **Frontend Features**
- ✅ Hiển thị danh sách sinh viên từ API
- ✅ Thêm, sửa, xóa sinh viên
- ✅ Kiểm tra health status của server
- ✅ Responsive design (mobile-friendly)

## 🏗️ Cấu Trúc Project

```
devopps_gk/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── .env
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── nginx.conf
├── database/
│   └── init.sql
├── docker-compose.yml
└── README.md
```

## 🚀 Hướng Dẫn Chạy

### 1. Yêu Cầu
- Docker & Docker Compose cài đặt
- Git

### 2. Clone/Setup Project
```bash
git clone <repository_url>
cd Devopps_gk
```

### 3. Chạy Docker Compose
```bash
docker-compose up -d
```

### 4. Kiểm Tra Services
- **Frontend**: http://localhost
- **Backend Health**: http://localhost/health
- **Backend About**: http://localhost/about
- **API Base**: http://localhost/api

## 📊 Database Schema

### Bảng: `students`
| Cột | Kiểu | Mô Tả |
|-----|------|-------|
| id | INT | Primary Key, Auto Increment |
| name | VARCHAR(100) | Tên sinh viên |
| email | VARCHAR(100) | Email (Unique) |
| class_name | VARCHAR(50) | Lớp |
| created_at | TIMESTAMP | Ngày tạo |
| updated_at | TIMESTAMP | Ngày cập nhật |

## 🔧 Environment Variables

### Backend (.env)
```
PORT=3000
DB_HOST=db
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password123
DB_NAME=student_db
APP_NAME="Student Management System"
NODE_ENV=production
```

## 📝 Git Commits

Project có ít nhất 5 commits chính:
1. Initial project setup
2. Create backend with Express
3. Create frontend with UI
4. Setup Docker & Docker Compose
5. Final configurations

## 🌳 Git Branches

- `main` - Production branch
- `develop` - Development branch
- `feature/*` - Feature branches

## 🐳 Docker Images

### Build Images
```bash
# Build all
docker-compose build

# Build specific
docker build -t student-backend ./backend
docker build -t student-frontend ./frontend
```

### Push to Docker Hub
```bash
# Login
docker login

# Tag images
docker tag student-backend username/student-backend:1.0
docker tag student-frontend username/student-frontend:1.0

# Push
docker push username/student-backend:1.0
docker push username/student-frontend:1.0
```

## 🧪 Testing

### Test Health Endpoint
```bash
curl http://localhost/health
```

### Test About Endpoint
```bash
curl http://localhost/about
```

### Test Create Student
```bash
curl -X POST http://localhost/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","class_name":"Test Class"}'
```

### Test Get All Students
```bash
curl http://localhost/api/students
```

## 📋 Checklist

- ✅ Có commit history (5+ commits)
- ✅ Có Backend + Frontend + Database
- ✅ Có endpoint `/about` với thông tin sinh viên
- ✅ Có endpoint `/health` trả về { "status": "ok" }
- ✅ Có file `.env` với environment variables
- ✅ Có Dockerfile cho Backend
- ✅ Có Dockerfile cho Frontend
- ✅ Có docker-compose.yml
- ✅ Có 3 branches: main, develop, feature
- ✅ Database không hard-code dữ liệu

## 🔗 Liên Kết Hữu Ích

- GitHub Repository: [Link to your repo]
- Docker Hub: [Link to your Docker Hub profile]

## 📞 Hỗ Trợ

Nếu có lỗi, kiểm tra:
1. Docker containers đang chạy: `docker-compose ps`
2. Logs: `docker-compose logs -f backend`
3. Database connection: Kiểm tra `.env` file

## 📄 License

ISC

---

**Created**: 2026  
**Version**: 1.0.0