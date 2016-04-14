# `create`, `start`, `run`, `ps`

1. Use official [ubuntu image](https://hub.docker.com/_/ubuntu/)

    _What are [official images](https://docs.docker.com/docker-hub/official_repos/) - reviewed and promoted by Docker, Inc._

2. `docker create`

    ```
    docker create ubuntu
    docker ps -a
    ```

    A stopped container is created

3. `docker start`

    ```
    docker start <container-id>
    ```

    It exit immediately with code 0, because there is nothing to do.

4. `docker rm`

    ```
    docker rm <container-id>
    ```

5. `docker create` + `docker start` ~= `docker run`

    ```
    docker run [OPTIONS] IMAGE  [COMMAND] [ARG...]
    docker run           ubuntu bash
    docker run           ubuntu ls        -al
    docker run --rm      ubuntu node      /app/index.js
    ```

    ```
    docker run ubuntu
    ```

    Exit immediately with code 0 because it has nothing to do.

6. Interact with docker container

    ```
    docker run -i -t ubuntu bash
    ```

    Let's save a file some where

    ```
    echo Hello, docker! > /hellofile
    ```

7. If we remove the container, and create a new one, the file is gone. Image is immutable.
