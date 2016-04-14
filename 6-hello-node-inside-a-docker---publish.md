# Hello Node inside a docker (`--publish`)

## Build a Hello World Node server

1. Use `./6-hello-node`

2. Write a simple http server, write a [hello node example](https://nodejs.org/en/about/)

3. Build a Dockerfile based from [`nodesource/trusty:4.4.2`](https://hub.docker.com/r/nodesource/trusty/)

    _Why NodeSource image? Because NodeSource is a primary stakeholder of Node.js and it's based on Ubuntu._

    Explain `FROM`, `ADD` and `CMD`?

4. Use `docker run` to start the server

## Build a Express server

1. Need package.json

2. Build a more complex Dockerfile

    Explain `RUN`
