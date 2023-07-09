# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=19.1.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV TZ=Asia/Tokyo
ENV USER_NAME=root

WORKDIR /app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.yarn to speed up subsequent builds.
# Leverage a bind mounts to package.json and yarn.lock to avoid having to copy them into
# into this layer.
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Run the application as a non-root user.
USER ${USER_NAME}

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 8080

