FROM node:14.15.0

RUN npm install -g forever

ADD . /opt/api/

WORKDIR /opt/api/

RUN npm install

RUN [ -f .env ] && echo "ENV exist." || echo "ENV does not exist." && cp .env.example .env

RUN chmod +x wait-for.sh

ENV PORT 4000

EXPOSE 4000

RUN mkdir logs

CMD ["forever",  "-o", "logs/out.log", "-e", "logs/err.log", "--minUptime", "1000", "--spinSleepTime", "1000", "./index.js"]