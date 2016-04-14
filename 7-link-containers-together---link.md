# Link containers together (`--link`)

The image needs a database. Use [redis:3.0](https://hub.docker.com/_/redis/).

Check out the environment variable and hosts docker setup when using `--link`

```
docker run --link mysql:database -P custom-image env
```
