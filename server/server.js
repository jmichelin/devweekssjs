const http = require('http');
const fs = require('fs');

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


const readTemplate = (cb) => {
  fs.readFile("./templates/alienLandingPage.html", 'utf8', (err, data) => {
    if (err) return cb(err);
    cb(null, data);
  });
};

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Dev', 'week');
  res.writeHead(200);
  readTemplate((err, data) => {
    res.write(data)
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});