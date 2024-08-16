# Use the official Node.js image as the base image
FROM node:20 as build

# Set the working directory
WORKDIR /app

# Install OpenSSL
RUN apt-get update -y && apt-get install -y openssl

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./


# Install dependencies
RUN npm install

# Install dependencies including Prisma
RUN npm install --save-dev prisma



# Copy the rest of the application code
COPY . .


RUN npx prisma generate

# Build the application
RUN npm run build




# Use a smaller Node.js image for the runtime
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Install OpenSSL
RUN apt-get update -y && apt-get install -y openssl

# Copy the build artifacts from the previous stage
COPY --from=build /app /app


# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]


