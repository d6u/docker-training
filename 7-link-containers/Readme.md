docker run --rm -it -P redis
docker run --rm -it --publish-all redis

docker ps
docker run --rm -it --link amazing_wilson:redis ubuntu env



