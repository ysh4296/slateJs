FROM node:18-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn

COPY src/ /usr/app/src
RUN yarn build

COPY /public /app/public

EXPOSE 3000

CMD ["yarn","start"]
