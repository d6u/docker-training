'use strict';

const Redis = require('ioredis');

const redis = new Redis();

redis.on('error', console.error);

redis.set('visitor_count', 0);

// Increment counter for every visitor
redis.incr('visitor_count', function () {
  redis.get('visitor_count', function (err, result) {
    console.log(`Hello, you are the #${result} visitor!`);
  });
});
