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
          title: 'Check on the Alien ' + request.server.version,
          message: 'Index - Hello World!'
        });
      }
    },
    {
      method: 'GET',
      path: '/showResult',
      handler: function (request, reply) {
        let alienStatus = 'https://javascriptjohn.files.wordpress.com/2017/06/alivealien.png';
        if(mathHandler.randomInt(0,1) === 0) { alienStatus = 'https://javascriptjohn.files.wordpress.com/2017/06/sleepingalien.png'}
        reply.view('alienResults', {
          title: 'Alien Results ' + request.server.version,
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