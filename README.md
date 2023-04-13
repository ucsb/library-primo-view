# Credit
[thatbudakguy](https://github.com/thatbudakguy/primo-explore-devenv-docker) for the Dockerfile.

# Purpose
Test changes to UCSB Library's catalog website using [ExLibrisGroup/primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).

Requirements:
- docker
- docker compose

To use this repo:
1. run `docker compose build`
2. run `docker compose up`
3. open a web browser and navigate to `localhost:8003/discovery/search?vid=01UCSB_INST:UCSB`

# Notes
- See [normalization rules](https://github.com/ucsb/library-primo-ve-normalization) for mapping MARC metadata to records displayed in catalog.
