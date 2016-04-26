docker run --rm -it -P redis
docker run --rm -it --publish-all redis

docker ps
docker run --rm -it redis
docker run --rm -it --link romantic_engelbart:redis ubuntu env
docker run --rm -it --link romantic_engelbart:redis --publish 5000:3000 hello-node:carson3



