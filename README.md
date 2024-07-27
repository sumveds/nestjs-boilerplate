# NestJS Boilerplate

This is a production-grade NestJS template application with JSON request validation, error handling, logging, Docker support, and unit test structure.

## Prerequisites

- Node.js
- Docker (optional)

## Installation

```bash
$ git clone https://github.com/yourusername/project-template.git
$ cd project-template
$ npm install
```

## Environment Setup

```bash
cp .env.example env/.env.local
cp .env.example env/.env.staging
cp .env.example env/.env.production
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# staging mode
$ npm run start:staging

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Running app using Docker

```bash
# Build the Docker Image
$ docker build -t nestjs-boilerplate .

# Run the Docker Container
$ docker run -p 3000:3000 nestjs-boilerplate

# Run the Docker Container in Detached Mode
$ docker run -d -p 3000:3000 nestjs-boilerplate

# To see a list of running containers
$ docker ps

# To stop a running container
$ docker stop <container_id_or_name>

# To view container logs
$ docker logs <container_id_or_name>

# To remove a stopped container
$ docker rm <container_id_or_name>

```

## Running app using Docker compose

```bash
# Local env
docker-compose -f docker-compose.local.yml up --build

# Staging env
docker-compose -f docker-compose.staging.yml up --build

# Production env
docker-compose -f docker-compose.production.yml up --build

```

## Pending items

- [ ] Security
- [ ] Database integration
- [ ] CI/CD integration
- [ ] API Documentation
