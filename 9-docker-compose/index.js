'use strict';

const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_PORT_6379_TCP_ADDR,
  port: process.env.REDIS_PORT_6379_TCP_PORT
});

redis.on('error', console.error);

redis.set('visitor_count', 0);

var express = require('express');
var app = express();

app.get('/', function (req, res) {

  // Increment counter for every visitor
  redis.incr('visitor_count', function () {
    redis.get('visitor_count', function (err, result) {
      res.send(`Hello, you are the #${result} visitor!`);
    });
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
