<pre>
 __    _           ___  _             ___   ___    _____
|  \  | |         / _/ | |           / _/  / _/   / ___/     by Max U
|   \ | |   ___  | |_  | |   _   _  | |_  | |_   | |       ___    ___  _____
| |\ \  |  /   \ | _|  | |  | | | | | _|  | _|   | |      / _ \  |  / |  __/
| | \   | | [] | | |   | |_ | |_| | | |   | |    | |____ | /_\ | | |  |__  |
|_|  \__|  \___/ |_|    \__| \____| |_|   |_|     \____/ |_| |_| |_|  \____|
</pre>
# Nofluffcars - frontend

![Screenshot](https://github.com/mtx210/Nofluffcars-frontend/blob/master/src/assets/screen.jpg)

## 1. Running configuration in IntelliJ IDE
Edit configuration to use ```startDevelopment``` script - it only changes the port of Angular app

## 2. Running with AngularCLI (change param values if needed)
```
ng -s --port 8082
```

## 3. Running with Docker
### 3.1 Docker deployment speedrun xD
```
docker-deploy-frontend.bat
```
### 3.2 Docker deployment in details (no speedrun xD)
```
docker image build -t nofluffcars_frontend_image .
docker container run -d -p 8082:80 --network nofluffcars-network --name nofluffcars_frontend nofluffcars_frontend_image
```
