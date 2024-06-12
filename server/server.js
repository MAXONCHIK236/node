const fs = require('fs');
const https = require('https');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

server.use(middlewares);
server.use(router);

https.createServer(options, server).listen(3000, () => {
  console.log('JSON Server is running on https://localhost:3000');
});
