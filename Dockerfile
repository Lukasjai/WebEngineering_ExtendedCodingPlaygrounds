# Frontend Dockerfile

# STAGE 1: Development
FROM node:20 AS development
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose port for development
EXPOSE 3001

# Default command in development
CMD ["npm", "run", "dev"]

# STAGE 2: Build
FROM node:20 AS build
WORKDIR /usr/src/app

# Install dependencies and build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 3: Production
FROM nginx:stable AS production
WORKDIR /usr/share/nginx/html

# Copy build artifacts
COPY --from=build /usr/src/app/dist .

# Copy media folder into production container
COPY ./media ./media

# Expose port for production
EXPOSE 80

# Default Nginx command
CMD ["nginx", "-g", "daemon off;"]
