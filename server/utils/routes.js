/**
 * Created by jmichelin on 6/17/17.
 */
const url = require('url');
const handleFiles = require('../utils/files');
const handleMath = require('../utils/math');

const showResult = () => {
  let randomValue = handleMath.randomInt(0, 1);
  console.log(randomValue);
  let fileName = '';
  if (randomValue === 1) {
    fileName = "./templates/alienAlive.html";
  } else {
    fileName = "./templates/alienDead.html";
  }
  console.log(fileName);
  return fileName
};

const paths = {
  '/': {
    fileName: './templates/alienLandingPage.html'
  },
  '/showDead': {
    fileName: "./templates/alienDead.html"
  },
  '/showAlive': {
    fileName: "./templates/alienAlive.html"
  }
};


const handleGetPath = (path, res) => {
  let fileName = paths[path].fileName;
  if (path === '/showResult') {
    let randomValue = handleMath.randomInt(0, 1);
    if (randomValue === 1) {
      fileName = "./templates/alienAlive.html";
    } else {
      fileName = "./templates/alienDead.html";
    }
  }
    handleFiles.readTemplate(fileName, (err, data) => {
      res.write(data);
      res.end();
    });
};

exports.handleFavicon = handleFavicon = (url) => {
  console.log('favicon requested');
  if (url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'});
    res.end();
  }
};

exports.handleRequest = handleRequest = (req, res) => {
  let currentMethod = req.method;
  let currentPath = url.parse(req.url).pathname;
  switch (currentMethod) {
    case 'GET':
      console.log('GET');
      handleGetPath(currentPath, res);
      break;
    case 'POST':
      console.log('POST');
      break;
    default:
      console.log('DEFAULT');
  }
};
