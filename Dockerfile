FROM node:16 AS build
WORKDIR /app
COPY . .
RUN npm install -g npm@9.6.1
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build /app/dist/job-it-front-end /usr/share/nginx/html


# cd repo/jobIt...
# docker build -t web_angular .
# cd repo/letsenctypt
# docker compose up -d 