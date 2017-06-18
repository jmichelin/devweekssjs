/**
 * Created by jmichelin on 6/18/17.
 */

const mathHandler = require('./math');

exports.register = function (server, options, next) {
  server.route([
    {
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        //reply('Hello, world!');
        reply.view('alienLandingPage', {
          title: 'examples/views/ejs/index.js | Hapi ' + request.server.version,
          message: 'Index - Hello World!'
        });
      }
    },
    {
      method: 'GET',
      path: '/showResult',
      handler: function (request, reply) {
        //reply('Hello, world!');
        let alienStatus = 'alive';
        if(mathHandler.randomInt(0,1) === 0) { alienStatus = 'dead'}
        reply.view('alienResults', {
          title: 'examples/views/ejs/index.js | Hapi ' + request.server.version,
          alienStatus: alienStatus
        });
      }
    }
  ]);
  return next();
};

exports.register.attributes = {
  name: 'alienRoutes'
};