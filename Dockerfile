FROM node:10-alpine

WORKDIR /api1


# install node packages
# RUN yarn install
COPY ./package*.json ./

RUN npm install yarn 
RUN yarn install --ignore-engines
RUN npm install -g @nestjs/cli

COPY . .

CMD [ "yarn", "start" ]

