FROM node:16 as node
WORKDIR /app
COPY . .
RUN npm install -g npm@9.6.1
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/job-it-front-end /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf