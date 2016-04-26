## Deploy container to AWS

### >>Hands on<<

1. Provision docker host to AWS using docker-machine:

```sh
docker-machine create
    --driver amazonec2 \
    --amazonec2-zone=b \
    --amazonec2-access-key <access-key> \
    --amazonec2-secret-key <secret-key> \
    <machine-name>
```

2. To run a container:

```sh
docker-compose up

# Or
docker run
```

## This setup is not designed for production services.

- What happens if the container fails?
- What if the docker host goes down?
- How to scale from one instance to multiple?
- How to manage IP addresses and ports?
- How to view logs?
