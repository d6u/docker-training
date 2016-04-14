# Link containers together (`--link`)

The image needs a database. Use [redis:3.0](https://hub.docker.com/_/redis/).

Check out the environment variable and hosts docker setup when using `--link`

```
docker run -d -P redis
docker run --rm -it --link redis:redis ubuntu env
docker run --rm -it --link redis:redis ubuntu cat /etc/hosts
```
