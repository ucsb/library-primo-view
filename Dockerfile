FROM node:16.20 AS primo-env

WORKDIR /home/node
RUN git clone https://github.com/ExLibrisGroup/primo-explore-devenv.git

WORKDIR /home/node/primo-explore-devenv
RUN npm install -g gulp
RUN npm install
RUN npm rebuild node-sass

EXPOSE 80

WORKDIR /home/node/primo-explore-devenv/primo-explore/custom
RUN mkdir $VIEW
COPY . $VIEW