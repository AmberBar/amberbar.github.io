---
title: docker命令学习
category:
  - Guide
index: 2
---
# 镜像和容器
镜像是构建时结构，容器时运行时结构。可以通过镜像创建运行时容器，也可以通过容器反向构建镜像。

创建容器:
1. docker container run
2. docker service create

拉取镜像：
1. `docker image pull <仓库>:<version> `
ps: 拉取的镜像linux 位于 /var/lib/docker 

搜索镜像:
`docker search 镜像名`

## 镜像
### 1. 拉取镜像

`docker image pull <repository>:<tag>`
如果没有指定tag，那么默认会拉取latest标签。不过latest标签不是一个强制标签，并且其不一定就是最新的镜像。比如apline的最新标签一般是edge。

`docker image pull -a <repository>` 拉取一个仓库中的全部镜像


### 2. 为镜像打多个标签
 
 一个镜像可以根据用户需求打上多个标签。标签时镜像元数据中的任意数字或者字符串

比如把redis镜像打上自己的标签

`docker tag redis redis:amber`
如下所示一个redis镜像现在有latest和amber两个标签

```
root@amberlei:~# docker images
root@amberlei:~# docker images
REPOSITORY           TAG       IMAGE ID       CREATED        SIZE
redis                latest    31f08b90668e   3 days ago     117MB
useepay/nacos        latest    d6c5fe7abf04   5 weeks ago    1.39GB
mysql/mysql-server   latest    1d9c2219ff69   2 months ago   496MB
root@amberlei:~# docker tag redis redis:amber
root@amberlei:~# docker images
REPOSITORY           TAG       IMAGE ID       CREATED        SIZE
redis                amber     31f08b90668e   3 days ago     117MB
redis                latest    31f08b90668e   3 days ago     117MB
useepay/nacos        latest    d6c5fe7abf04   5 weeks ago    1.39GB
mysql/mysql-server   latest    1d9c2219ff69   2 months ago   496MB
root@amberlei:~#
```

### 3. 过滤 docker image ls 的输出内容

`docker image ls --filter dangling=true`

这个命令表示过滤掉没有打标签的镜像（悬虚镜像），在列表中被展示为`<none>:<none>`。

为什么会有悬虚镜像呢？通常时因为给镜像打了一个已经存在的标签，如果出现这种情况，docker会移除旧镜像上面得标签，将该标签标在新得镜像之上。

可以通过
`docker image prune`命令移除全部得悬虚镜像。如果加上-a参数`docker image prune -a `会额外移除没有被使用得镜像

其他得过滤方式可以通过reference。
`docker image ls --filter=reference="*:latest"`

### 4. 搜索官方镜像
`docker search redis --filter "is-official=true"`
需要注意是docker search默认返回25行结果，可以通过`--limit`参数增加返回内容行数，最多为100行


```
root@amberlei:~# docker search redis
NAME                                DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
redis                               Redis is an open source key-value store that…   11946     [OK]
redislabs/redisearch                Redis With the RedisSearch module pre-loaded…   56
redislabs/redisinsight              RedisInsight - The GUI for Redis                82
redislabs/rebloom                   A probablistic datatypes module for Redis       22                   [OK]
redislabs/redis                     Clustered in-memory database engine compatib…   36
redislabs/rejson                    RedisJSON - Enhanced JSON data type processi…   53
redislabs/redisgraph                A graph database module for Redis               26                   [OK]
redislabs/redismod                  An automated build of redismod - latest Redi…   33                   [OK]
redis/redis-stack                   redis-stack installs a Redis server with add…   45
redis/redis-stack-server            redis-stack-server installs a Redis server w…   21
redislabs/redistimeseries           A time series database module for Redis         12
redislabs/operator-internal         This repository contains pre-released versio…   1
redislabs/operator                                                                  7
redislabs/redis-py                                                                  5
redislabs/redis-webcli              A tiny Flask app to provide access to Redis …   3                    [OK]
redislabs/redisgears                An automated build of RedisGears                4
redislabs/memtier_benchmark         Docker image to run memtier_benchmark           0
redislabs/k8s-controller-internal                                                   0
redislabs/ng-redis-raft             Redis with redis raft module                    0
redislabs/k8s-controller                                                            2
redislabs/redisai                                                                   4
redislabs/olmtest                   Test artefact for OLM CSV                       0
bitnami/redis                       Bitnami Redis Docker Image                      244                  [OK]
redislabs/olm-bundle                                                                0
redislabs/redisml                   A Redis module that implements several machi…   3                    [OK]
root@amberlei:~# docker search redis --filter "is-official=true"
NAME      DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
redis     Redis is an open source key-value store that…   11946     [OK]
```

### 5. 镜像和分层
Docker镜像由一些松耦合得只读镜像层组成。
`docker image inspect <image>` 可以查看镜像得组成

```
root@amberlei:~# docker image inspect redis
[
    {
        "Id": "sha256:31f08b90668e9730067b53acbd28e536dadb25c746f4379a8a83c84fb1c48d1a",
        "RepoTags": [
            "redis:amber",
            "redis:latest"
        ],
        "RepoDigests": [
            "redis@sha256:7b83a0167532d4320a87246a815a134e19e31504d85e8e55f0bb5bb9edf70448"
        ],
        "Parent": "",
        "Comment": "",
        "Created": "2023-03-23T05:51:44.24685771Z",
        "Container": "f0852d717b5055dd9db1feb669e738ca1287e73ed58e02b22b6b67fcfd6c2e78",
        "ContainerConfig": {
            "Hostname": "f0852d717b50",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "6379/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "GOSU_VERSION=1.16",
                "REDIS_VERSION=7.0.10",
                "REDIS_DOWNLOAD_URL=http://download.redis.io/releases/redis-7.0.10.tar.gz",
                "REDIS_DOWNLOAD_SHA=1dee4c6487341cae7bd6432ff7590906522215a061fdef87c7d040a0cb600131"
            ],
            "Cmd": [
                "/bin/sh",
                "-c",
                "#(nop) ",
                "CMD [\"redis-server\"]"
            ],
            "Image": "sha256:cf738ebd5a1a77a6e898d57a7e7496152b76404effc46dfe8da3614c9564845f",
            "Volumes": {
                "/data": {}
            },
            "WorkingDir": "/data",
            "Entrypoint": [
                "docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {}
        },
        "DockerVersion": "20.10.23",
        "Author": "",
        "Config": {
            "Hostname": "",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "6379/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "GOSU_VERSION=1.16",
                "REDIS_VERSION=7.0.10",
                "REDIS_DOWNLOAD_URL=http://download.redis.io/releases/redis-7.0.10.tar.gz",
                "REDIS_DOWNLOAD_SHA=1dee4c6487341cae7bd6432ff7590906522215a061fdef87c7d040a0cb600131"
            ],
            "Cmd": [
                "redis-server"
            ],
            "Image": "sha256:cf738ebd5a1a77a6e898d57a7e7496152b76404effc46dfe8da3614c9564845f",
            "Volumes": {
                "/data": {}
            },
            "WorkingDir": "/data",
            "Entrypoint": [
                "docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": null
        },
        "Architecture": "amd64",
        "Os": "linux",
        "Size": 117064195,
        "VirtualSize": 117064195,
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/547047441ae9d4277d8ca7af3f150070343be43e33e559167ebbc63f425191d1/diff:/var/lib/docker/overlay2/f277ef929a09f74194df33a8f5ea695cefe87a6d630b43905d6baa2b7d15c7ac/diff:/var/lib/docker/overlay2/ba492593f4f39a7c5adda826e2a8cf8ab29fb60833d1cccd664645db44696483/diff:/var/lib/docker/overlay2/154b5055b98ad28adb6da328074aee4bfd70522acb275d5008ac980cc90a3299/diff:/var/lib/docker/overlay2/eced2f25f597877adc941196d334f1154f0d86a1e6cc9e945afcb88903d381e5/diff",
                "MergedDir": "/var/lib/docker/overlay2/d6b003e95172155978359a0dbcc915ff02c3fcafbb4673a4ee134b95f21273c6/merged",
                "UpperDir": "/var/lib/docker/overlay2/d6b003e95172155978359a0dbcc915ff02c3fcafbb4673a4ee134b95f21273c6/diff",
                "WorkDir": "/var/lib/docker/overlay2/d6b003e95172155978359a0dbcc915ff02c3fcafbb4673a4ee134b95f21273c6/work"
            },
            "Name": "overlay2"
        },
        "RootFS": {
            "Type": "layers",
            "Layers": [
                "sha256:3af14c9a24c941c626553628cf1942dcd94d40729777f2fcfbcd3b8a3dfccdd6",
                "sha256:79f41069ccc18bcd9600999108724c0f2e6454fdcdee09fc594166c7184f0244",
                "sha256:2cf793f55eadaecdcc5c2fdf7d56c1cd3477c29b4a987f5c0005e5e19c234cc8",
                "sha256:d4e8b2ef264eedaa9f75ab229b7da2b311961e1fabd19d6ade682f9779f15d7e",
                "sha256:eb86ff5c5e2997063250da313143e7693468b8e35f7f239064eda104e6afbaa7",
                "sha256:4324b0b9966a5ac99b470ace4ff3b7a595cb8ed3e3969b7492933a06d85bbb55"
            ]
        },
        "Metadata": {
            "LastTagTime": "2023-03-26T15:15:44.3517586+08:00"
        }
    }
]
root@amberlei:~#
```

如上所述，Layers里面有6层，redis镜像由6层镜像分层组成。

6. 删除镜像
`docker rm image <image ID>`
如果存在关联得容器，那么镜像不能被删除

## 容器