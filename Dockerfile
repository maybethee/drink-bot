# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /drink-bot

# Copy the application files into the working directory
COPY . /drink-bot

# Install the application dependencies
RUN npm install

EXPOSE 8080

# Define the entry point for the container
CMD ["node", "."]