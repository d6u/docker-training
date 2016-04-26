# Docker hosting solutions

- Google Kubernetes
- AWS ECS / ECS CLI
- AWS ElasticBeanstalk
- Docker Cloud
- Many others...

# Today, let's focus on Docker Cloud

A hosted and managed Containers as a Service (CaaS) platform for small application teams.

Works with multiple cloud providers, including AWS.

| Docker Cloud Name | Description |
| --- | --- |
| node | docker host. AWS EC2 instance |
| node cluster | multiple nodes. easily scaled with slider bar |
| service | single container or collection of containers from the same image and same configuration |
| stack | multiple services linked together. similar to docker-compose |

Other cloud solutions have similar concepts, but often use different names.

# Docker Cloud Workshop

Goal: Host node web service that prints out its hostname and an environment variable.

1. Login to a pre-configured Docker cloud account provided by the instructor.

2. Create a node cluster.

  ```
  https://cloud.docker.com/node/launch/

  Name: node1
  Deploy tags: production node1
  Type/size: t2.nano

  Leave the rest as defaults.

  Click Launch node cluster.
  ```

1. Create a docker image for the service you want to deploy.

  ```
  git clone https://github.com/nanek/hello-docker-cloud
  cd hello-docker-cloud
  ```

2. Build and push image to docker hub.

    ```
    # use provided account
    docker login

    # Follow instructions in hello-docker-cloud to build and push image.
    ```

3. Create a service.

    ```
    https://cloud.docker.com/container/launch/

    Image: <your-username>/hello-docker-cloud
    Service name: adele-service
    Image tag: latest
    Deploy tags: production node1
    Ports:
      Click and check Published for port 80.
      Set the node port to 80.
    Enable autorestart.
    Enable autoredeploy.

    Click next to Environment variables.
      Add MESSAGE = <anything here>
    Click save to create the service.
    Click Start to start the service.

    Find the service endpoint to view the service on the web.
    NOTE: There is a container endpoint and a service endpoint.
    ```

1. Make a change, and push a new image to test auto-deploy.

NOTE: Running multiple nodes requires a credit card and is not setup for this exercise.

# Practical usage notes

1. All of this can be done through the docker-cloud CLI.

    brew install docker-cloud
    docker login

1. Tagging for releases.

1. Basic logging.

  `docker-cloud service logs -f adele-service`

1. DEMO: Automated builds through Docker hub.

# Other

* blue/green build
* DNS round robin
* continuous integration
* configuration (use env for secrets)
* Monitoring CPU/ RAM / Error rate
* Logs for errors/info
* Load balancing

https://docs.docker.com/docker-cloud/tutorials/ssh-into-a-node/
