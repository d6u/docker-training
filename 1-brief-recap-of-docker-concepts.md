# Brief recap of docker concepts

## History and concept of Linux "container"

> LXC (Linux Containers) is an operating-system-level virtualization method for running multiple isolated Linux systems (containers) on a control host using a single Linux kernel.
>
> The Linux kernel provides the cgroups functionality that allows limitation and prioritization of resources (CPU, memory, block I/O, network, etc.) without the need for starting any virtual machines, and namespace isolation functionality that allows complete isolation of an applications' view of the operating environment, including process trees, networking, user IDs and mounted file systems.
>
> -- Wikipedia [https://en.wikipedia.org/wiki/LXC](https://en.wikipedia.org/wiki/LXC)

Two most important concept here:

1. Resource allocation (limitation and prioritization)
2. Resource isolation (process tree, networking, file system, etc.)

## What and Who is Docker?

> Docker is an open-source project that automates the deployment of applications inside software containers, by providing an additional layer of abstraction and automation of operating-system-level virtualization on Linux.
>
> -- Wikipedia [https://en.wikipedia.org/wiki/Docker_(software)](https://en.wikipedia.org/wiki/Docker_(software))

Docker, Inc. is a company that sponsors Docker project. The idea of Docker was introduced on March 13, 2013 at PyCon Lightning talk - The future of Linux Containers.

## What is a Docker "image"

Read-only **templates** from which Docker containers are launched. Each image consists of a series of **layers** (each step in Dockerfile). Docker makes use of _union file systems_ to combine these layers into a single image.

```
FROM node

RUN mkdir /app
ADD index.js /app/index.js

CMD ["node", "/app/index.js"]
```

## Docker client and docker server

![](https://docs.docker.com/engine/article-img/architecture.svg)

### >>Demo<<

```sh
docker run --rm -i -t daiweilu/docker-training:1-recap
node /app/index.js

# In another shell
ps auxf
```
