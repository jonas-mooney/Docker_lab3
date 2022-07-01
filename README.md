

docker stack deploy -c docker-compose.yaml myapp-stack
docker service scale myapp-stack_mywebsite=7
docker stack rm myapp-stack
