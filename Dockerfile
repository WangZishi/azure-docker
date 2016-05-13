FROM node:6.1.0
MAINTAINER Wang Zishi <ynh.2@outlook.com>
EXPOSE 8080
COPY . /usr/src/app
WORKDIR /usr/src/app
ENTRYPOINT npm
