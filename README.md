This project has [migrated to Gitlab](https://gitlab.com/ucsb-library/alma-primo).

# Purpose
Test changes to UCSB Library's catalog website using [ExLibrisGroup/primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).

Using `docker`, consistently setup the Primo Dev Environment with minimal effort. Commits to `main` branch will trigger `GitHub Actions` to automatically `zip` a Primo View package.

Requirements:
- `git`
- `docker`
- `docker-compose` (included with `docker` in `docker desktop`)

Using this workflow:
1. edit the `.env` file to use your respective `view id` and `proxy` values
2. run `docker compose up --build`
3. open a web browser and navigate to `localhost:8003/discovery/search?vid=<YOUR VIEW ID>`
4. use git to commit changes to `main` branch
5. download view packages from `Actions` tab in GitHub

![image](https://github.com/ucsb/library-primo-view/assets/82611274/4ee65e87-f685-48d3-bd3e-1cd27255b04e)

# Notes
- See [normalization rules](https://github.com/ucsb/library-primo-ve-normalization) for mapping MARC metadata to records displayed in catalog.

# Credits
- [thatbudakguy](https://github.com/thatbudakguy/primo-explore-devenv-docker) for the Dockerfile
- [Alliance-PCSG](https://github.com/alliance-pcsg/primo-explore-external-search) for the external search module
- [University of Minnesota](https://github.com/UMNLibraries/primo-explore-hathitrust-availability) for the hathitrust module
- [HVD2](https://github.com/cbaksik/HVD2/tree/master) for various snippets
- [University of California](https://uc-sils.atlassian.net/wiki/spaces/DIS/pages/1868169223/Primo+Package+Code+Repositories) for various snippets
