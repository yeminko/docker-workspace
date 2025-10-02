FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

# Commented out - because Volume can't be named in Dockerfile
# VOLUME [ "/app/feedback" ]

# Anonymous Volume - will delete when container is removed (but useful for temp files)
# VOLUME [ "/data/temp" ]

CMD ["npm", "start"] 