# Nofluffcars - frontend

< description obviously >

## Running with Docker

### Attach to network, create container
```
docker image build -t nofluffcars_frontend_image .
docker container run -d -p 8082:80 --network nofluffcars-network --name nofluffcars_frontend nofluffcars_frontend_image
```
