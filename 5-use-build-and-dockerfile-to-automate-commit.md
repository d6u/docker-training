# Use `build` and `Dockerfile` to automate `commit`

1. Demo `Dockerfile` with `docker build -t <tag> .`

    ```
    FROM ubuntu

    RUN echo Hello again! > /hellofile2
    ```

    ```
    docker build -t daiwei/awesome:v2 .
    ```

2. What is a build context

    Let's take a look at [docker remote API](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#build-image-from-a-dockerfile). Building image is just uploading a zip file. All builds happens on remote end.

    `.dockerignore` file can exclude things from the zip file. It's using Go's glob syntax, not compatible with git (don't be confused, can use [docker-show-context](https://github.com/pwaller/docker-show-context)).
