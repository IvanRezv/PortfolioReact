FROM node:18.6.0 as build

WORKDIR /app/

COPY portfolio-react-app/package*.json ./
RUN npm i -P

COPY portfolio-react-app/. ./
RUN npm run build

RUN ls -la


FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build .