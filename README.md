Credit to [thatbudakguy](https://github.com/thatbudakguy/primo-explore-devenv-docker) for the Dockerfile.

Use [ExLibrisGroup/primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv) to test changes to the library catalog website.

Requirements:
- docker
- docker compose

To use this repo:
1. run `docker compose build`
2. run `docker compose up`
3. open a web browser and navigate to `localhost:8003/discovery/search?vid=01UCSB_INST:UCSB`
