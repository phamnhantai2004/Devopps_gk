# DevOps Student Management System

## Mô Tả Dự Án
Ứng dụng quản lý sinh viên sử dụng DevOps - Demo kết hợp Backend (Node.js), Frontend (HTML/CSS/JS), và Database (MySQL) chạy trên Docker Compose.

## Tính Năng
- **Danh sách sinh viên**: Xem tất cả sinh viên trong hệ thống
- **Thêm sinh viên**: Thêm sinh viên mới với thông tin cơ bản
- **Xóa sinh viên**: Xóa sinh viên khỏi hệ thống
- **Thông tin ứng dụng** (/about): Hiển thị thông tin sinh viên, mã số, lớp
- **Health Check** (/health): Kiểm tra trạng thái server
- **Environment Variables**: Quản lý cấu hình qua biến môi trường

## Cấu Trúc Dự Án
```
devops_gk/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   └── Dockerfile
├── database/
│   ├── Dockerfile
│   └── init.sql
├── docker-compose.yml
├── .env
├── .gitignore
└── README.md
```

## Công Nghệ Sử Dụng
- **Backend**: Node.js + Express.js
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
- **Database**: MySQL 8.0
- **Container**: Docker + Docker Compose
- **Web Server**: Nginx (Frontend)

## Cách Chạy

### 1. Yêu Cầu
- Docker v20.0+
- Docker Compose v2.0+

### 2. Clone Repository
```bash
git clone <repository-url>
cd devops_gk
```

### 3. Cấu Hình Environment
File `.env` đã có sẵn, bạn có thể chỉnh sửa thông tin sinh viên:
```env
STUDENT_NAME=Nguyễn Văn Thương
STUDENT_ID=MS20001
CLASS=D20CNTT1
```

### 4. Chạy với Docker Compose
```bash
docker-compose up --build
```

### 5. Truy Cập Ứng Dụng
- **Frontend**: http://localhost
- **Backend Health**: http://localhost:3000/health
- **Backend About**: http://localhost:3000/about
- **Backend API**: http://localhost:3000/api/students

## API Endpoints

### Health Check
```
GET /health
Response: { "status": "ok", "app_name": "DevOps Student Management" }
```

### About
```
GET /about
Response: {
  "student_name": "Nguyễn Văn Thương",
  "student_id": "MS20001",
  "class": "D20CNTT1",
  "app_name": "DevOps Student Management",
  "description": "Ứng dụng quản lý sinh viên sử dụng DevOps"
}
```

### Get All Students
```
GET /api/students
```

### Get Student by ID
```
GET /api/students/:id
```

### Create Student
```
POST /api/students
Content-Type: application/json
Body: {
  "name": "Tên sinh viên",
  "email": "email@example.com",
  "phone": "0123456789",
  "major": "Ngành học"
}
```

### Update Student
```
PUT /api/students/:id
Content-Type: application/json
Body: { ...student data }
```

### Delete Student
```
DELETE /api/students/:id
```

## Git Workflow
- **main/master**: Production code
- **develop**: Development code
- **feature**: Feature development branches

## Sinh Viên
- **Tên**: Nguyễn Văn Thương
- **Mã số**: MS20001
- **Lớp**: D20CNTT1

## License
MIT License
