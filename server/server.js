const http = require('http');
const url = require('url');

const routes = require('../server/utils/routes');




const hostname = '127.0.0.1';
const port = 3000;



// function readContent(callback) {
//   fs.readFile("./Index.html", function (err, content) {
//     if (err) return callback(err)
//     callback(null, content)
//   })
// }
//
// readContent(function (err, content) {
//   console.log(content)
// })

const server = http.createServer((req, res) => {

  routes.handleFavicon(req.url);
  routes.handleRequest(req, res);

  console.log(url.parse(req.url).pathname);
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);





});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});