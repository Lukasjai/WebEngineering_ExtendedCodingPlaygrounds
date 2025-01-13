# Base stage
# Backend Dockerfile

# STAGE 1: Development
FROM node:20 AS development
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose port for development
EXPOSE 3000

# Default command in development
CMD ["npm", "run", "start"]

# STAGE 2: Production
FROM node:20 AS production
WORKDIR /usr/src/app

# Copy only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy source files
COPY . .

# Expose port for production
EXPOSE 3000

# Default command in production
CMD ["node", "app.js"]

