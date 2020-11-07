FROM node:12.16.1-alpine3.9 as react-build
RUN mkdir -p /srv/app/prioritise-client

WORKDIR /srv/app/prioritise-client/

COPY package*.json /srv/app/prioritise-client/

RUN npm install

RUN npm install react-scripts@3.4.1 -g

COPY . /srv/app/prioritise-client/

EXPOSE 3000

CMD ["npm", "run", "start:react"]