FROM node:14.20.0

EXPOSE 3000

WORKDIR /app/

COPY package*.json ./

RUN npm i -P

COPY . ./
RUN ls -la

CMD ["npm", "start"]
