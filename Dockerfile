FROM node:21.7-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# /app/build contains what we care about from

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
