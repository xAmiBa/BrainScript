To run backend:
create .env file
```
export DEBUG=1
export SECRET_KEY='my_key'
export DJANGO_ALLOWED_HOSTS=* localhost 127.0.0.1 [::1]
```

To run frontend:
```
npm start
```

Or run images in Docker
```
docker-compose up -d --build
```