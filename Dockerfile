FROM node:16 as build
WORKDIR /app
COPY . .
RUN npm install -g npm@9.6.1
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/job-it-front-end /usr/share/nginx/html