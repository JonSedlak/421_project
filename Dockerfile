
# Node.js base image (version)
FROM node:22.14.0

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose app port
EXPOSE 5000

# Start the app
CMD [ "node", "app.js" ]
