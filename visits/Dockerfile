# 1. specify base image
FROM node:14-alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

# default command
CMD ["npm", "start"]