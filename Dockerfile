FROM node:lts-slim AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM nginx as production

RUN  rm -rf /usr/share/nginx/html/50x.html 

RUN  rm -rf /usr/share/nginx/html/index.html 

COPY --from=development /usr/src/app/dist/ /usr/share/nginx/html