FROM node:alpine

# Create app directory
RUN mkdir -p usr/src/phattv-ecommerce-frontend
WORKDIR usr/src/phattv-ecommerce-frontend

# Install app dependencies
COPY . /usr/src/phattv-ecommerce-frontend
RUN yarn install

# Bundle app source
RUN yarn build:prod:web

CMD [ "yarn", "start:prod:web" ]
