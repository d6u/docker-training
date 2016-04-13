# Docker local setup

## How Docker on OS X works? (use VirtualBox)

Docker is a linux only technology (mostly). OS X doesn't support containers.

![](./docker-on-osx.png)

## Setup local docker server (docker-machine)

### >>Hands on<<

1. Install docker-machine

    ```
    brew update
    brew install docker-machine
    ```

2. Create a machine called `docker-training`

    ```
    docker-machine create --driver virtualbox docker-training
    ```
