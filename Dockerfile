FROM node:16.20 AS primo-env
  
WORKDIR /home/node
RUN git clone https://github.com/ExLibrisGroup/primo-explore-devenv.git

ENV DEV_ENV_PATH="/home/node/primo-explore-devenv"
WORKDIR $DEV_ENV_PATH
RUN npm install -g gulp
RUN npm install
RUN npm rebuild node-sass

ARG VIEW
WORKDIR $DEV_ENV_PATH/primo-explore/custom
RUN mkdir ${VIEW}
COPY . ${VIEW}

EXPOSE 8003
EXPOSE 3001

ARG PROXY
CMD [ "/bin/sh", "-c", "gulp run --view ${VIEW} --proxy ${PROXY} --ve" ]