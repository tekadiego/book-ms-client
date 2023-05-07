# Use node:14.14.0-alpine as the base image
FROM node:14.14.0-alpine AS build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the production version of the app
RUN npm run build

# Use nginx as the base image
FROM nginx:1.21.0-alpine

# Copy the build files from the previous stage to the container
COPY --from=build /app/build /usr/share/nginx/html

# Copy the nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx and set the port to 80
CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]