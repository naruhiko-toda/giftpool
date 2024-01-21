FROM node:20 AS base

RUN curl -fsSL bun.sh/install | bash

WORKDIR /app

COPY package.json ./
COPY bunfig.toml ./

ENV PATH="/root/.bun/bin:${PATH}"

RUN bun install --no-save

COPY . .

FROM base AS test
RUN bun playwright install && bun playwright install-deps

ENTRYPOINT ["bun", "run", "e2e:cov:ci"]
