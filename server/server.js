const http = require('http');
const url = require('url');
const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.set('view engine', 'ejs');

const aliens = require('../server/utils/alienRoutes')

app.use('/showResult', aliens);


app.get('/', function(req, res){
  res.render('alienLandingPage.ejs');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
