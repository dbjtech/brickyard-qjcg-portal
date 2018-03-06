# brickyard-qjcg-portal

# What
This repo is the source code of the [qjcg-portal website](https://www.qijigps.com/)

# How

1. Install brickyard-cli
  ```bash
  npm i -g brickyard-cli / npm i -g brickyard-cli@version-num --registry="https://registry.npmjs.org"(下载指定版本cli)
  ```

1. In the repo dir, run

  ```bash
  brickyard build qjcg-portal (此项目需加--dir dest参数，将build出来的dest目录一并提交到github管理)
  ```

1. The target build files will located at

  ```bash
  output/www
  ```

1. Move these files to any static web container and then access

# Debug
1. In the brickyard dir, run

  ```bash
  brickyard build qjcg-portal --debug --watch
  ```

1. open http://localhost:8080/

# Run with Docker

  ```
  docker run -p 8080:80 dbjtech/brickyard-qjcg-portal
  ```
