# Pull image from local or Docker Hub
FROM node:24-alpine

# Define the working directory inside the container
WORKDIR /app

# For optimizing the build process
COPY package.json .

# This will run under the defined WORKDIR folder
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# To expose port into local machine (Just for documentation purposes)
EXPOSE 3000

# CMD make run the command when the container starts (not during the image build)
CMD ["node", "index.js"]
