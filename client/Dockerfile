
FROM node:14.15.0

RUN npm install -g serve

ADD . /opt/client/

WORKDIR /opt/client/

RUN npm install

RUN [ -f .env ] && echo "ENV exist." || echo "ENV does not exist." && cp .env.example .env

RUN npm run build

ENV PORT 3000

EXPOSE 3000

CMD ["serve","-s", "--listen", "3000", "./build/"]