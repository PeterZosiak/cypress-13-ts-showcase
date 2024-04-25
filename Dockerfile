FROM cypress/browsers:latest

WORKDIR /e2e
RUN apt update && apt install -y \
gconf-service libasound2 libatk1.0-0 \
libc6 libcairo2 libcups2 \
libdbus-1-3 libexpat1 libfontconfig1 \
libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 \
libglib2.0-0 libgtk-3-0 libnspr4 \
libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 \
libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
libxcursor1 libxdamage1 libxext6 libxfixes3 \
libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
ca-certificates fonts-liberation libappindicator1 \
libnss3 lsb-release xdg-utils wget

RUN export NODE_EXTRA_CA_CERTS=./certs/cacerts.pem
RUN export NODE_TLS_REJECT_UNAUTHORIZED=0
RUN apt-get install curl ca-certificates iputils-ping --yes
RUN curl -L --insecure SOME_URL -o ./certs.tar.gz
RUN tar -xvzf ./certs.tar.gz
RUN cp ./*.crt /usr/local/share/ca-certificates
RUN update-ca-certificates       
RUN export NODE_EXTRA_CA_CERTS="/e2e/certs/cacerts.pem"

COPY package.json /e2e/package.json
COPY yarn.lock /e2e/yarn.lock
RUN yarn install

COPY . /e2e

ENV ELECTRON_EXTRA_LAUNCH_ARGS="--disable-gpu --disable-dev-shm-usage --disable-software-rasterizer"
ENV LIBVA_DRIVER_NAME=--disable-software-rasterizer
ENTRYPOINT [ "yarn", "open:t2" ]