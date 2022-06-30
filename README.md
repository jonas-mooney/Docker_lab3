

docker build -t docker_lab2:latest .
docker run -d --rm --name jonasContainer -p 8080:8080 docker_lab2:latest
http://localhost:8080/homepage/