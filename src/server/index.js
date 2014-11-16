var config = require('./app-config'),
    logger = require('./logger'),
    server = require('./hapi-server');

module.exports = function() {
  myHapi = server.start();
  // database.start();

  logger.debug('///////////////////////////////');
  logger.debug('///////    Config...    ///////');
  for (var key in config) {
    logger.debug('.' + key + ' => ', config[key]);
  }
  logger.debug('///////    ...Config    ///////');
  logger.debug('///////////////////////////////');

  return myHapi;
};
