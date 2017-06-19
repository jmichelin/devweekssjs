const http = require('http');
const url = require('url');
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')
const routes = require('../server/utils/routes');

const serve = serveStatic('../server/static', {'index': false})


const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  routes.handleFavicon(req.url);
  routes.handleRequest(req, res);

  console.log(url.parse(req.url).pathname);
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  serve(req, res, finalhandler(req, res));

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});