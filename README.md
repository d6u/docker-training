# Docker Training

1. [Brief recap of docker concepts](./1-brief-recap-of-docker-concepts.md)
2. [Docker local setup](./2-docker-local-setup.md)
3. [`create`, `start`, `run`, `ps`](./3-create-start-run-ps.md)
4. [`commit`, `images`](./4-commit-images.md)
5. [Use `build` and `Dockerfile` to automate `commit`](./5-use-build-and-dockerfile-to-automate-commit.md)
6. [Hello Node inside a docker (`--publish`)](./6-hello-node-inside-a-docker---publish.md)
7. [Link containers together (`--link`)](./7-link-containers-together---link.md)
8. [Share file between host and container (`--volume`)](./8-share-file-between-host-and-container---volume.md)
9. [Use `docker-compose` to speed up development](./9-use-docker-compose-to-speed-up-development.md)
10. [Deploy container to AWS](./10-deploy-container-to-aws.md)
11. [Docker Cloud](./11-docker-cloud.md)


## Questions for Next Training

- local virtual machine management -- is one enough? Resource consumption if running mysql, elasticsearch, node apps, more than one of each? Significance of name "default"
- managing images and containers -- how to prevent them from accumulating over time
- value in coming up with some standard practices for new node apps using Docker? (base image to use, Dockerfile template and best practices, what else)?

## Use Ngrok to share your server

```sh
ngrok http 192.168.1.1:8080
```
