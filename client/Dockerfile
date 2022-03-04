FROM node

WORKDIR /client

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -g

COPY . .

CMD ["npm", "start"]