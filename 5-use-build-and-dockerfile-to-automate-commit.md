# Use `build` and `Dockerfile` to automate `commit`

1. Demo `Dockerfile` with `docker build -t <tag> .`

    ```
    FROM ubuntu

    RUN echo Hello, docker! > /hellofile
    ```

    ```sh
    docker build -t daiweilu/awesome:v2 .
    docker run --rm daiweilu/awesome:v2 cat /hellofile
    # See "Hello, docker!"
    ```

2. What is a build context?

    ```
    docker build [OPTIONS] PATH | URL | -
    ```

    The `PATH | URL | -` specifies a build context.

    Let's take a look at [docker remote API](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#build-image-from-a-dockerfile). Building image is just uploading a zip file.

    All builds happens on remote end. Docker client is just zipping files together.

    `.dockerignore` file can exclude things from the zip file. It's using Go's glob syntax, not compatible with git ([docker-show-context](https://github.com/pwaller/docker-show-context)). An example ignore file:

    ```
    _tmp
    config/local*
    coverage
    doc
    local*
    node_modules/*
    !node_modules/@spanishdict
    script
    secret
    test
    .DS_Store
    .git
    .dockerignore
    .eslintrc
    .gitignore
    .travis.yml
    docker-compose*
    pn-minions-controller*.yml
    README.md
    **/*.log
    ```
