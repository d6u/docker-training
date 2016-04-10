# Docker Training

1. [Brief recap of docker concepts](#brief-recap-of-docker-concepts)
2. [Docker local setup](#docker-local-setup)
3. [`create`, `start`, `run`, `ps`](#create-start-run-ps)
4. [`commit`, `images`](#commit-images)
5. [Use `build` and `Dockerfile` to automate `commit`](#use-build-and-dockerfile-to-automate-commit)
6. [Hello Node inside a docker (`--publish`)](#hello-node-inside-a-docker---publish)
7. [Link containers together (`--link`)](#link-containers-together---link)
8. [Share file between host and container (`--volume`)](#share-file-between-host-and-container---volume)
9. [Use `docker-compose` to speed up development](#use-docker-compose-to-speed-up-development)
10. [Deploy container to production](#deploy-container-to-production)
11. [Container orchestration](#container-orchestration)

## Brief recap of docker concepts

1. History and concept of Linux "container"
2. Who is Docker?
3. What is a Docker "image"
4. Docker client and docker server

## Docker local setup

1. How Docker on OS X works? (use VirtualBox)
2. Setup of local docker server (docker-machine)

## `create`, `start`, `run`, `ps`

1. Use official [ubuntu image](https://hub.docker.com/_/ubuntu/)
    - What are [official images](https://docs.docker.com/docker-hub/official_repos/) - reviewed and promoted by Docker
2. `docker create`
3. `docker start`
4. `docker rm`
5. `docker ps -a`
6. `docker create` + `docker start` ~= `docker run`

## `commit`, `images`

1. `docker commit`
2. Use "image"

## Use `build` and `Dockerfile` to automate `commit`

1. Demo `Dockerfile` with `docker build -t <tag> .`
2. What is a build context ([node docker client](https://github.com/apocas/dockerode))

## Hello Node inside a docker (`--publish`)

## Link containers together (`--link`)

## Share file between host and container (`--volume`)

## Use `docker-compose` to speed up development

## Deploy container to production

1. Provision AWS Docker server using docker-machine
2. DevOp challenges (port mapping, auto recovery, multi-host, resource management)

## Container orchestration

1. Concept
2. Docker Cloud
3. Deploy to Docker Cloud
4. Bonus: deploy to Kubernetes
