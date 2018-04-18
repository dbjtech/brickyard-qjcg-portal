FROM dbjtech/brickyard-cli as build-stage

COPY ./brickyard_modules /brickyard-dbjtech-website/brickyard_modules

WORKDIR /brickyard-dbjtech-website/

RUN brickyard ls qjcg-portal && brickyard build qjcg-portal -vv

FROM nginx:alpine

RUN apk add tzdata --update --no-cache && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" /etc/localtime && apk del tzdata

COPY --from=build-stage ./brickyard-dbjtech-website/output/www /usr/share/nginx/html

VOLUME /usr/share/nginx/html

EXPOSE 80
