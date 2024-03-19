# 1. specify base image
FROM node:14-alpine

# 2. specify a working directory
WORKDIR /usr/app

# copy package.json to the working directory
# and install dependencies
# This speeds up build time if nothing above is changed
COPY ./package.json ./
RUN npm install

COPY ./ ./

# default command
CMD ["npm", "start"]