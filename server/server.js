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

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
})