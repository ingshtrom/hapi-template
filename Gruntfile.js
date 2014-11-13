var loadConfig = function(path) {
  var glob = require('glob'),
    object = {},
    key;

  glob.sync('*', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.coffee$/,'');
    object[key] = require(path + option);
  });
  return object;
};

module.exports = function(grunt) {
  var appConfig = require('./src/server/app-config'),
    config = {
      pkg: grunt.file.readJSON('package.json'),
      serverConfig: require('./src/server/app-config'),
      env: process.env
    };

  grunt.util._.extend(config, loadConfig('./tasks/options/'));
  grunt.initConfig(config);
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks("grunt-tasks");
};
