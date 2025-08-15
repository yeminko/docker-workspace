# Pull image from local or Docker Hub
FROM node

# Define the working directory inside the container
WORKDIR /app 

# Can also write COPY . . (because the WORKDIR is set)
COPY . /app

# This will run under the defined WORKDIR folder
RUN npm install 

# To expose port into local machine
EXPOSE 80

# CMD make run the command when the container starts (not during the image build)
CMD ["node", "server.js"]