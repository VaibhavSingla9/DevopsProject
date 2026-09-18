FROM node:22   
# get node.js

WORKDIR /app
# go to the /app directory 
COPY package*.json ./
# get the dependency information 
RUN npm install
# intsall the dependency
COPY . .
# copy the application code to the image 
CMD ["node", "server.js"]
# run this command to start the application