FROM node:14.6-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine as deploy

COPY --from=build /app/build /usr/share/nginx/html