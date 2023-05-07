FROM node:20-alpine
RUN apk add g++ make py3-pip
WORKDIR /usr/code
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start:prod"]