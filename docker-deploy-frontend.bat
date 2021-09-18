@echo off
echo "__    _           ___  _             ___   ___    _____"
echo "|  \  | |         / _/ | |           / _/  / _/   / ___/     by Max U"
echo "|   \ | |   ___  | |_  | |   _   _  | |_  | |_   | |       ___    ___  _____"
echo "| |\ \  |  /   \ | _|  | |  | | | | | _|  | _|   | |      / _ \  |  / |  __/"
echo "| | \   | | [] | | |   | |_ | |_| | | |   | |    | |____ | /_\ | | |  |__  |"
echo "|_|  \__|  \___/ |_|    \__| \____| |_|   |_|     \____/ |_| |_| |_|  \____|"
echo
echo === =================================
echo === Building frontend
echo === (1/3) clearing image and container
echo === =================================
call docker stop nofluffcars_frontend
call docker rm nofluffcars_frontend
call docker image rm nofluffcars_frontend_image


echo === =================================
echo === Building frontend
echo === (2/3) building image
echo === =================================
call docker image build -t nofluffcars_frontend_image .


echo === =================================
echo === Building frontend
echo === (3/3) starting container
echo === =================================
call docker container run -d -p 8082:80 --network nofluffcars-network --name nofluffcars_frontend nofluffcars_frontend_image
