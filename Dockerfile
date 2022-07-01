FROM node:16.3.0

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npm install

CMD ["npm", "start"]

LABEL maintainer="jonas"

LABEL description="This project is a simple user manager. It allows the admin to view users data."

LABEL cohort="14"

LABEL animal="Polar Bear"