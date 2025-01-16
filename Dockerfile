# Frontend Dockerfile

FROM node:20 AS development
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]

FROM node:20 AS build
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable AS production
WORKDIR /usr/share/nginx/html

COPY --from=build /usr/src/app/dist .

COPY ./media ./media

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
