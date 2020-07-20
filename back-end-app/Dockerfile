FROM node:14.5.0

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g typescript

RUN npm install

COPY . ./

CMD [ "npm", "start" ]

EXPOSE 1337