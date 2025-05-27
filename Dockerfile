FROM node:20.0.0-alpine
WORKDIR /app

COPY . .

RUN apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev

RUN npm ci

RUN npm run build

ENV NODE_ENV production
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

EXPOSE 8080

CMD [ "npm", "start" ]