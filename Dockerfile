FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY bunfig.toml ./

RUN bun install

COPY . .