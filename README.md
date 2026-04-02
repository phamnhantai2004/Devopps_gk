# DevOps Student Management System

Hệ thống quản lý thông tin sinh viên với Backend + Frontend + Database, triển khai bằng Docker và Docker Compose.

## 👨‍🎓 Thông Tin Sinh Viên

- **Họ Tên**: Phạm Nhân Tài
- **Mã Số Sinh Viên**: 2251220183
- **Lớp**: 22ct4
- **GitHub**: [phamnhantai2004](https://github.com/phamnhantai2004)
- **Docker Hub**: [phamtai123](https://hub.docker.com/u/phamtai123)

## 📋 Mô Tả Dự Án

Ứng dụng web quản lý dữ liệu sinh viên gồm:
- **Backend**: Node.js/Express API REST
- **Frontend**: HTML/CSS/JavaScript giao diện người dùng responsive
- **Database**: MySQL lưu trữ dữ liệu sinh viên
- **Docker & Docker Compose**: Triển khai tự động hóa

## 🎯 Tính Năng Chính

### Endpoints API
- `GET /health` - Kiểm tra trạng thái dịch vụ
- `GET /about` - Thông tin sinh viên (tên, mã số, lớp)
- `GET /api/students` - Lấy danh sách tất cả sinh viên
- `GET /api/students/:id` - Lấy thông tin sinh viên theo ID
- `POST /api/students` - Thêm sinh viên mới
- `PUT /api/students/:id` - Cập nhật thông tin sinh viên
- `DELETE /api/students/:id` - Xóa sinh viên

### Giao Diện Frontend
- Hiển thị thông tin sinh viên
- Form thêm sinh viên mới
- Danh sách sinh viên với chức năng sửa/xóa
- Kiểm tra trạng thái hệ thống
- Responsive Design tương thích mobile

## 🛠 Công Nghệ Sử Dụng

- **Backend**: Node.js 18, Express.js, MySQL2
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Database**: MySQL 8.0
- **Container**: Docker, Docker Compose
- **Version Control**: Git

## 📦 Cấu Trúc Dự Án

```
devops-project/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── index.html
├── database/
│   └── init.sql
├── docker-compose.yml
├── .env
├── .gitignore
└── README.md
```

## 🚀 Cách Chạy

### Yêu Cầu
- Docker & Docker Compose
- Git (để clone repository)

### Bước 1: Clone Repository
```bash
git clone https://github.com/phamnhantai2004/devops-project.git
cd devops-project
```

### Bước 2: Cấu Hình Environment
Kiểm tra file `.env` có chứa thông tin đúng:
```env
STUDENT_NAME=Phạm Nhân Tài
STUDENT_ID=2251220183
CLASS=22ct4
DB_HOST=mysql
DB_USER=devops_user
DB_PASSWORD=devops_password_123
```

### Bước 3: Chạy Docker Compose
```bash
# Build và khởi động tất cả services
docker-compose up --build

# Hoặc chạy background mode
docker-compose up -d --build
```

### Bước 4: Truy Cập Ứng Dụng
- **Frontend**: http://localhost
- **Backend Health**: http://localhost:3000/health
- **Backend About**: http://localhost:3000/about
- **API Documentation**: http://localhost:3000/api/students

## 📊 Git Commits

Dự án có ít nhất 5 commits với message rõ ràng:

```bash
git log --oneline
# Sẽ hiển thị:
# [commit 1] Backend API implementation
# [commit 2] Frontend UI development
# [commit 3] Database initialization
# [commit 4] Docker & Docker Compose setup
# [commit 5] Documentation & project finalization
```

## 🌿 Git Branches

Dự án sử dụng 3 branches:
- `main` / `master` - Production ready code
- `develop` - Development branch
- `feature/*` - Feature branches

```bash
# Xem danh sách branches
git branch -a
```

## 🐳 Docker Hub

Images được push lên Docker Hub:
```bash
# Backend Image
docker tag devops_backend:latest phamtai123/devops-backend:latest
docker push phamtai123/devops-backend:latest

# Frontend Image
docker tag devops_frontend:latest phamtai123/devops-frontend:latest
docker push phamtai123/devops-frontend:latest
```

Docker Hub: https://hub.docker.com/u/phamtai123

## 📝 File Environment Variables

File `.env` chứa cấu hình môi trường:
- `APP_NAME` - Tên ứng dụng
- `PORT` - Port backend (3000)
- `NODE_ENV` - Environment (production/development)
- `STUDENT_NAME`, `STUDENT_ID`, `CLASS` - Thông tin sinh viên
- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` - Cấu hình cơ sở dữ liệu
- `DOCKER_REGISTRY` - Docker Hub username

## 🔍 Monitoring & Logs

```bash
# Xem logs của tất cả services
docker-compose logs -f

# Xem logs của một service cụ thể
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mysql

# Kiểm tra trạng thái containers
docker-compose ps
```

## 🛑 Dừng Ứng Dụng

```bash
# Stop tất cả services
docker-compose down

# Stop và xóa volumes (dữ liệu)
docker-compose down -v
```

## 🐛 Troubleshooting

### Backend không kết nối database
- Kiểm tra MySQL container đang chạy: `docker-compose ps`
- Kiểm tra thông tin DB trong .env
- Xem logs: `docker-compose logs backend`

### Frontend không hiển thị
- Xóa cache browser (Ctrl+Shift+Delete)
- Kiểm tra backend đang chạy: http://localhost:3000/health
- Xem logs: `docker-compose logs frontend`

### Port đã bị chiếm dụng
- Thay đổi port trong docker-compose.yml
- Or kill process: `lsof -i :3000` và `kill -9 <PID>`

## 📚 Tài Liệu Tham Khảo

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Express.js Guide](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Nginx Documentation](https://nginx.org/en/docs/)

## 📄 Giấy Phép

MIT License - Tự do sử dụng cho mục đích học tập

## 👥 Hỗ Trợ

Liên hệ qua:
- GitHub: [@phamnhantai2004](https://github.com/phamnhantai2004)
- Email: pham.nhan.tai@university.edu

---

**Cập nhật lần cuối**: April 2, 2026
