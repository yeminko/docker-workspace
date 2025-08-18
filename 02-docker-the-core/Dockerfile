# Pull image from local or Docker Hub
FROM node

# Define the working directory inside the container
WORKDIR /app 

# For optimizing the build process
COPY package.json /app

# This will run under the defined WORKDIR folder
RUN npm install 

# Can also write COPY . . (because the WORKDIR is set)
COPY . /app

# To expose port into local machine
EXPOSE 80

# CMD make run the command when the container starts (not during the image build)
CMD ["node", "server.js"]