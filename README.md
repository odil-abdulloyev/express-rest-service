# Express REST Service

## Instructions

1. Clone this repo to your computer: `git clone git@github.com:odil-abdulloyev/express-rest-service.git`;
2. Go to project folder: `cd express-rest-service`;
3. Switch to development branch: `git checkout develop`;
4. Install dependencies: `npm i`;
5. Run program: `npm start`;
6. Run tests in new tab of terminal: `npm test`;
7. Run linter: `npm run lint`;
8. Run ts-compiler: `npm run build`.

## System requirements
NodeJs v14 or newer

## Docker instructions

* Run containers: `docker-compose up`
* Show images: `docker images`
* Show running containers: `docker ps`
* Show all containers: `docker ps -a`
* Show networks: `docker network ls`
* Scan image: `docker scan <image_name>`
* Remove image: `docker rmi <image_id>`
* Remove unused images, container and networks: `docker system prune`
* Stop and remove containers: `docker-compose down`

## Migration instructions

* Generate migration: `npm run migration:generate`
* Run migration: `npm run migration:run`
* Revert migration: `npm run migration:revert`
