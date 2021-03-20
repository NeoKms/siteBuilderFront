#build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#production-stage
FROM nginx:stable-alpine as production-stage
#FROM nginx:latest as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/getenv.sh /usr/share/nginx/html/getenv.sh
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
