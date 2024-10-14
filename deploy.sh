#!/usr/bin/env bash
set -e

while getopts e:c: flag
do
    case "${flag}" in
        e) ENVIROMENT=${OPTARG};;
        c) CMD_DOCKER=${OPTARG};;
    esac
done


if [ "$ENVIROMENT" = "" ]
then
  echo "You must to send a enviroment with the flag -e [production - local - qa - ci]"
  exit
fi

APP_COMMIT=$(git log -1 --pretty=format:%h)

DOCKER_PLATFORM=linux/amd64

if [ "$ENVIROMENT" = "local" ]
then
    APP_COMMIT='latest'
    DOCKER_PLATFORM=linux/amd64
fi

export APP_COMMIT_VERSION=$APP_COMMIT

# name of the stack
export COMPOSE_PROJECT_NAME=ab_porfolio
# Platform for oracle server
export DOCKER_DEFAULT_PLATFORM=$DOCKER_PLATFORM

export APP_ENVIROMENT=$ENVIROMENT
export APP_DOCKER_REGISTRY='adriannborella1988/'

export APP_WEB_IMAGE=$APP_DOCKER_REGISTRY'ab_portfolio_web:'$APP_COMMIT_VERSION
export APP_FRONT_IMAGE=$APP_DOCKER_REGISTRY'ab_portfolio_front:'$APP_COMMIT_VERSION
export APP_LB_IMAGE=$APP_DOCKER_REGISTRY'ab_portfolio_lb:'$APP_COMMIT_VERSION

printenv | grep APP

if [ "$CMD_DOCKER" = "push-images" ]
then
    echo "Pushin images"
    docker push $APP_LB_IMAGE
    docker push $APP_WEB_IMAGE
    docker push $APP_FRONT_IMAGE
else
    docker compose -f devops/docker-compose.yml -f devops/docker-compose.$ENVIROMENT.yml $CMD_DOCKER
fi
 

