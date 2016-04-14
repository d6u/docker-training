FROM nodesource/trusty:4.4.2

RUN mkdir /app
ADD package.json /app/package.json
WORKDIR /app
RUN npm install
# ADD index.js /app/index.js

EXPOSE 3000
CMD node index.js
