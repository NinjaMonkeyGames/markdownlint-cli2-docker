# IF ANY CHANGES ARE MADE TO THIS FILE THE DOCKER CONTAINER ON DOCKERHUB MUST ALSO BE UPDATED WITH THE NEW BUILD!

# USE ALPINE LINUX 3.20.0 AS THE BASE IMAGE

FROM alpine:3.20.0

# INSTALL NODE AND MARKDOWNLINT

RUN apk add --no-cache nodejs=20.13.1-r0 npm=10.8.0-r0 && \
    npm install -g markdownlint-cli2@0.13.0

# SET THE WORKING DIRECTORY FOR THE CONTAINER

WORKDIR /app

# INCLUDE .markdownlint.yml IN DOCKER BUILD

COPY .markdownlint.yaml ./.markdownlint.yaml