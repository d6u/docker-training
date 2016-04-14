# `commit`, `images`

1. `docker commit` to create image from container we created in previous chapter

    ```
    docker commit <container-id> daiweilu/awesome:v1
    ```

2. Use the "image", our file is preserved

    ```
    docker run -i -t daiweilu/awesome:v1 bash
    cat /hellofile
    ```
