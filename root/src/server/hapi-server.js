var Hapi = require('hapi'),
    logger = require('./logger'),
    config = require('./config'),
    routeConfig = require('./api/').config,
    packConfig = require('./hapi-pack-config').config;

module.exports.start = function() {
  var server;

  server = new Hapi.Server(config.server.port);
  server = packConfig(server);
  server = routeConfig(server);
  server.start(function() {
    logger.debug('Server running at:', server.info.uri);
  });
  return server;
};
