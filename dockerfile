# Stage 1: Build Stage
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Production Stage
FROM node:18

# Install the `serve` package globally
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built app from the build stage
COPY --from=builder /app/dist ./dist

# Expose the port Vite uses
EXPOSE 8080

# Use `serve` to serve the built app, binding to 0.0.0.0
CMD ["npx", "serve", "-s", "dist", "-l", "8080"]
