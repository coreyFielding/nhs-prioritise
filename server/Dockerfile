FROM node:12

RUN mkdir -p /srv/app/prioritise-node
WORKDIR /srv/app/prioritise-node

COPY package*.json /srv/app/prioritise-node/

RUN npm install

COPY . /srv/app/prioritise-node

EXPOSE ${APP_SERVER_PORT}

CMD ["npm", "start"]