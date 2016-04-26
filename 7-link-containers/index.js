'use strict';

const Redis = require('ioredis');

const redis = new Redis({
  host: '192.168.99.100',
  port: 32773
});

redis.on('error', console.error);

redis.set('visitor_count', 0);

// Increment counter for every visitor
redis.incr('visitor_count', function () {
  redis.get('visitor_count', function (err, result) {
    console.log(`Hello, you are the #${result} visitor!`);
  });
});
