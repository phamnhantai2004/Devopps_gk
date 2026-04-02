# API Documentation

## Base URL
```
http://localhost:3000
```

## Endpoints

### 1. Health Check
**GET** `/health`

Response:
```json
{
  "status": "ok"
}
```

### 2. About Page
**GET** `/about`

Response:
```json
{
  "studentName": "Your Full Name",
  "studentId": "SV001",
  "class": "DevOps Class 2026",
  "appName": "Student Management System"
}
```

### 3. Get All Students
**GET** `/api/students`

Response:
```json
[
  {
    "id": 1,
    "name": "Student Name",
    "email": "student@example.com",
    "class_name": "DevOps Class 2026",
    "created_at": "2026-04-02T10:00:00.000Z",
    "updated_at": "2026-04-02T10:00:00.000Z"
  }
]
```

### 4. Get Student by ID
**GET** `/api/students/:id`

Response:
```json
{
  "id": 1,
  "name": "Student Name",
  "email": "student@example.com",
  "class_name": "DevOps Class 2026",
  "created_at": "2026-04-02T10:00:00.000Z",
  "updated_at": "2026-04-02T10:00:00.000Z"
}
```

### 5. Create Student
**POST** `/api/students`

Request Body:
```json
{
  "name": "New Student",
  "email": "newstudent@example.com",
  "class_name": "DevOps Class 2026"
}
```

Response:
```json
{
  "id": 6,
  "name": "New Student",
  "email": "newstudent@example.com",
  "class_name": "DevOps Class 2026"
}
```

### 6. Update Student
**PUT** `/api/students/:id`

Request Body:
```json
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "class_name": "Updated Class"
}
```

Response:
```json
{
  "id": 1,
  "name": "Updated Name",
  "email": "updated@example.com",
  "class_name": "Updated Class"
}
```

### 7. Delete Student
**DELETE** `/api/students/:id`

Response:
```json
{
  "message": "Student deleted successfully"
}
```

## Error Responses

### 400 Bad Request
```json
{
  "error": "Missing required fields"
}
```

### 404 Not Found
```json
{
  "error": "Student not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "error message here"
}
```
