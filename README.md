Credit to thatbudakguy for the Dockerfile: https://github.com/thatbudakguy/primo-explore-devenv-docker

Requirements:
- docker
- docker compose

To use this repo:
1. update the `.env` file with your account information
2. run `docker compose build`
3. run `docker compose up`
4. find your external ip address in the docker logs, then open a web browser and navigate to `<external ip>:8003/discovery/search?vid=<your view id>`