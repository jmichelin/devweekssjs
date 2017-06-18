/**
 * Created by jmichelin on 6/18/17.
 */
const express = require('express');
const router = express.Router();
const handleMath = require('../utils/math');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  let randomValue = handleMath.randomInt(0, 1);
  let alienStatus = 'alive';
  if(randomValue === 0) { alienStatus = 'dead'}
  next(alienStatus);
});

// define the home page route
router.get('/', function (req, res) {
  res.render('alienResults.ejs');
});

// define the about route
router.get('/about', function (req, res) {
  res.send('About birds');
});

module.exports = router;