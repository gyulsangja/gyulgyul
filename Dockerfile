FROM node:20.13.1
WORKDIR /my-app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 4500
CMD ["npm","run", "start"]
