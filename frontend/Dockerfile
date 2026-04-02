# Frontend Dockerfile - Nginx static server
FROM nginx:alpine

# Copy frontend files
COPY index.html /usr/share/nginx/html/

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
