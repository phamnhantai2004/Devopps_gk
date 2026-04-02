# Docker Setup Guide

## Building Docker Images

### Build Backend Image
```bash
docker build -t student-backend:1.0 ./backend
```

### Build Frontend Image
```bash
docker build -t student-frontend:1.0 ./frontend
```

### Build All with Docker Compose
```bash
docker-compose build
```

## Running Containers

### Run with Docker Compose
```bash
docker-compose up -d
```

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f db
```

### Stop Services
```bash
docker-compose down
```

### Stop and Remove Volumes
```bash
docker-compose down -v
```

## Container Details

### Database Container
- **Image**: mysql:8.0
- **Port**: 3306
- **Root Password**: password123
- **Database**: student_db

### Backend Container
- **Image**: Custom (built from ./backend)
- **Port**: 3000
- **Environment**: Loaded from .env

### Frontend Container
- **Image**: Custom (built from ./frontend)
- **Port**: 80
- **Proxy**: Routes to backend on port 3000

## Pushing to Docker Hub

### Login
```bash
docker login
```

### Tag Images
```bash
docker tag student-backend:1.0 <username>/student-backend:1.0
docker tag student-frontend:1.0 <username>/student-frontend:1.0
```

### Push to Docker Hub
```bash
docker push <username>/student-backend:1.0
docker push <username>/student-frontend:1.0
```

### Verify on Docker Hub
Visit https://hub.docker.com/u/<username> to see your images

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Find process using port 80
netstat -ano | findstr :80

# Kill process
taskkill /PID <PID> /F
```

### Database Connection Issues
1. Check if db container is running: `docker-compose ps`
2. Check db logs: `docker-compose logs db`
3. Verify connection string in backend/.env

### Container Won't Start
1. Check logs: `docker-compose logs <service_name>`
2. Ensure .env file exists in backend/
3. Verify port availability
