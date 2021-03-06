# TrueNorth Challenge Fullstack Developer -

**Guillermo Agustín Chiarotto**
Email: Agusgc_99@hotmail.com
Phone: +542994575660
Linkedin: https://www.linkedin.com/in/agustinchiarotto/

[![Generic badge](https://img.shields.io/badge/node->=v14.15.0-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/npm-v5.6.0-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/mongodb-v4.4.3-green.svg)](https://shields.io/)

**Objective**
The objective of this code is to respond to the functionality presented in the True North Fullstack challenge. For this purpose it has two parts: Client and Server. Server has different endpoints detailed in the api.html file, that you can access on http://localhost:4000 by default.

---

**Technologies**
This challenge is solved principally with ReactJs, NodeJs, Express and Mongoose. Besides that, it uses Jest for testing. It also has different config files for globally set the prettier configuration for all the project and the node version needed to run this server.

---

**Instalation**

- Before you clone this project make sure you have installed the following requirements in your environment:
  - [**NodeJS & NPM**](https://nodejs.org/en/download/package-manager/) -[**MongoDb**](https://docs.mongodb.com/manual/administration/install-community/)
- Run command `npm i` on the same route as package.json file. Remember that you need to do it on both folders: Client and server.
- If you are ussing nvm (node version manager), run `nvm use`. You need at least version v14.15.0 to run this app.
- Be sure that MongoDB service is runing. If is not, run this comand:`sudo systemctl start mongod`

---

**Docker**

The applications are ready to run in dockers containers.

- Web App:

  - Navigate to client's folder `cd client`
  - Build the image: `docker build -t task-client:latest .`
  - Run the image: `docker run --name task-client -p 3000 -d task-client:latest`

- Server App:
  - Navigate to server's folder `cd server`
  - Build the image: `docker build -t task-server:latest .`
  - Run the image: `docker run --name task-sever -p 4000 -d task-server:latest`

---

**Execution**

- To start running the sever-app use the command: `npm start` on server folder. From this point the server is ready to be used on http://localhost:4000 or http://192.168.0.175:4000 on your Network.

There are some environment variables you can change:

- **NODE_ENV:** sets the environment you are working on (default: development).
- **API_HOSTNAME:** sets the API's hostname (default: 127.0.0.1)
- **API_PORT:** sets the API's port (default: 4000).
- **DB_HOSTNAME:** sets the database hostname (default: 127.0.0.1).
- **DB_PORT:** sets the database port (default: 27017).

---

- To start running the web-app use the comand: `npm start` on client folder. From this point the web-app is ready to be used on http://localhost:3000 or http://192.168.0.175:3000 on your Network.

- **ENVIROMENT:** sets the environment you are working on (default: development).
- **API_URL:** sets the API's hostname (default: 'http://localhost:4000')

---

**Testing**

- Run command: `npm test` in server root to test this API.

---

**Next improvements**

- It is necessary to add Redux or another global state handler to improve efficiency on API calls.
