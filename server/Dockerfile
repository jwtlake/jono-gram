FROM node:6.11.4

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# Bundle app source
COPY . .

# Open port
EXPOSE 8080

# Launch app
CMD [ "npm", "start" ]