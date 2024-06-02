# IF ANY CHANGES ARE MADE TO THIS FILE THE DOCKER CONTAINER ON DOCKERHUB MUST ALSO BE UPDATED WITH THE NEW BUILD!

# USE ALPINE LINUX O/S AS BASE IMAGE

FROM alpine:latest

# INSTALL NODE

RUN apk add --update nodejs npm

# INSTALL markdownlint-cli2 GLOBALLY

RUN npm install -g markdownlint-cli2

# SET THE WORKING DIRECTORY FOR THE CONTAINER

WORKDIR /app

# INCLUDE .markdownlint.yml IN DOCKER BUILD

COPY .markdownlint.yml ./.markdownlint.yml