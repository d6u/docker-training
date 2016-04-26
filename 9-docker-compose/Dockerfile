FROM nodesource/trusty:4.4.2

RUN mkdir /app
WORKDIR /app

ADD index.js /app/index.js

ADD package.json /app/package.json
RUN npm install

CMD node index.js
