const http = require('http');
const url = require('url');
const handleMath = require('./utils/math');
const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.set('view engine', 'ejs');

app.get('/showResult', function(req, res) {
  let randomValue = handleMath.randomInt(0, 1);
  let alienStatus = 'https://javascriptjohn.files.wordpress.com/2017/06/alivealien.png';
  if(randomValue === 0) { alienStatus = 'https://javascriptjohn.files.wordpress.com/2017/06/sleepingalien.png' };
  res.render('alienResults.ejs', {alienStatus: alienStatus});
});

app.get('/', function(req, res){
  res.render('alienLandingPage.ejs');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
