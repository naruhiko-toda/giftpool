FROM node:20

RUN curl -fsSL bun.sh/install | bash

WORKDIR /app

COPY package.json ./
COPY bunfig.toml ./

ENV PATH="/root/.bun/bin:${PATH}"

RUN bun install --no-save

COPY . .
