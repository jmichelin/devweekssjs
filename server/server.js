'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
const alienRoutes = require('./utils/alienRoutes');


server.connection({ port: 3000, host: 'localhost' });

server.register([alienRoutes, require('vision')], (err) => {

  if (err) {
    console.log("Failed to load vision.");
  }

  server.views({
    engines: { ejs: require('ejs') },
    relativeTo: __dirname,
    path: 'views'
  });
});

// server.route({
//   method: 'GET',
//   path: '/',
//   handler: function (request, reply) {
//     //reply('Hello, world!');
//     reply.view('alienLandingPage', {
//       title: 'examples/views/ejs/index.js | Hapi ' + request.server.version,
//       message: 'Index - Hello World!'
//     });
//   }
// });
//
// server.route({
//   method: 'GET',
//   path: '/showResult',
//   handler: function (request, reply) {
//     //reply('Hello, world!');
//     let alienStatus = 'alive';
//     if(mathHandler.randomInt(0,1) === 0) { alienStatus = 'dead'}
//     reply.view('alienResults', {
//       title: 'examples/views/ejs/index.js | Hapi ' + request.server.version,
//       alienStatus: alienStatus
//     });
//   }
// });

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
})