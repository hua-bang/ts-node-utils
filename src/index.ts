import http from 'http';
import { HTTP_PORT } from './config';

const server = http.createServer();

server.on("request", (request, response) => {
  response.end('res page');
});

server.listen(HTTP_PORT, () => {
  console.log('http server is starting up');
});

