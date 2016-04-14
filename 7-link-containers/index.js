'use strict';

const express = require('express');
const Redis = require('ioredis');

const redis = new Redis();
const app = express();

redis.on('error', console.error);

redis.set('visitor_count', 0);

app.get('/', function (req, res) {
  redis.incr('visitor_count', function () {
    redis.get('visitor_count', function (err, result) {
      res.send(`Hello, you are the #${result} visitor!`);
    });
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
