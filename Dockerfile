FROM node:16.13.0-alpine3.14 AS development

# Timezone
RUN apk add --update-cache --no-cache tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata

WORKDIR /usr/src/app

COPY ./src .

RUN ls -lh

RUN npm install
RUN npm run build

CMD ["node", "dist/main"]

