FROM node:16.3.0

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npm install

CMD ["npm", "start"]

LABEL maintainer="jonas"

LABEL description=""