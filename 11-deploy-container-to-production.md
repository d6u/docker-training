## Deploy container to production

1. Provision AWS Docker server using docker-machine

    ```
    docker-machine create --driver amazonec2 --amazonec2-zone=b --amazonec2-access-key x --amazonec2-secret-key <key> <machine-name>
    ```

2. Let's run new container and take down the old one.

    DevOp challenges (port mapping, auto recovery, multi-host, resource management).
