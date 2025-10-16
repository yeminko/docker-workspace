FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG DEFAULT_PORT=80

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

# Commented out - because Volume can't be named in Dockerfile
# VOLUME [ "/app/feedback" ]

# Anonymous Volume - will delete when container is removed (but useful for temp files)
# VOLUME [ "/data/temp" ]

CMD ["npm", "start"] 

# Example Command to build and run
# docker run -p 3000:8000 --env PORT=8000 -d --rm --name feedback-app -v feedback:/app/feedback -v "/Users/yeminko/InnoLab/docker/docker-workspace/05-managing-data-with-volumes:/app:ro" -v /app/temp -v /app/node_modules feedback-node:env