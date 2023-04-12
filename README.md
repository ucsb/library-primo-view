Credit to [thatbudakguy](https://github.com/thatbudakguy/primo-explore-devenv-docker) for the Dockerfile.

Requirements:
- docker
- docker compose

To use this repo:
1. update `.env` file with account-specific info
2. run `docker compose build`
3. run `docker compose up`
4. open a web browser and navigate to `localhost:8003/discovery/search?vid=<YOUR VIEW ID>`
