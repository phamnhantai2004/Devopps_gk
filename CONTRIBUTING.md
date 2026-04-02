# Contributing Guide

## Development Setup

1. Clone the repository
2. Ensure Docker is installed
3. Run `docker-compose up -d`

## Project Structure

- **backend/** - Node.js Express API server
- **frontend/** - HTML/CSS/JS web interface
- **database/** - MySQL initialization script
- **docker-compose.yml** - Container orchestration

## Development Workflow

1. Create feature branch from `develop`
2. Make changes
3. Test locally
4. Commit with clear messages
5. Push to feature branch
6. Create Pull Request to `develop`
7. After review, merge to `develop`
8. When ready, merge `develop` to `main`

## Commit Message Convention

Format: `<type>: <subject>`

Types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Build/dependencies

Example:
```
feat: Add student management API endpoints
fix: Fix database connection timeout
docs: Update API documentation
```

## Branch Naming

- `main` - Production ready
- `develop` - Development branch
- `feature/<name>` - Feature branch
- `bugfix/<name>` - Bug fix branch
- `hotfix/<name>` - Hotfix for production

## Testing

- Test API endpoints with curl or Postman
- Check health endpoint: `curl http://localhost/health`
- Check about page: `curl http://localhost/about`
- Test CRUD operations on `/api/students`

## Code Style

- Use 4 spaces for indentation
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

## Deployment

1. Push all changes to `main` branch
2. Build Docker images: `docker-compose build`
3. Tag images with version: `docker tag <image> <username>/<repo>:<version>`
4. Push to Docker Hub: `docker push <username>/<repo>:<version>`
5. Deploy using `docker-compose up -d`
