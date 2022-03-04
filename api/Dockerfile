FROM node:12.21.0

WORKDIR /api

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -g

COPY . .

CMD [ "npm","run", "dev" ]