/*
 * hapi-template
 * https://github.com/ingshtrom/hapi-template
 *
 * Copyright (c) 2014 "Ingshtrom" Alex Hokanson
 * Licensed under the MIT license.
 */
(function() {
  'use strict';

  module.exports.description = 'Create a Node.js module with Hapi server, Winston logging, and Grunt building.';

  module.exports.notes = '_Project name_ shouldn\'t contain "node" or "js" and should ' +
    'be a unique ID not already in use at npmjs.org.';

  module.exports.after = 'You should now install project dependencies with _npm ' +
    'install_. After that, you may execute project tasks with _grunt_. For ' +
    'more information about installing and configuring Grunt, please see ' +
    'the Getting Started guide:' +
    '\n\n' +
    'http://gruntjs.com/getting-started';

  module.exports.warnOn = '*';

  module.exports.template = function(grunt, init, done) {
    init.process({type: 'node'}, [
      // Prompt for these values.
      init.prompt('name'),
      init.prompt('description'),
      init.prompt('version', '0.0.1'),
      init.prompt('repository'),
      init.prompt('homepage'),
      init.prompt('bugs'),
      init.prompt('licenses'),
      init.prompt('author_name'),
      init.prompt('author_email'),
      init.prompt('author_url'),
      init.prompt('node_version', '>= 0.11.0'),
      init.prompt('main'),
      init.prompt('npm_test', 'mocha -c --reporter spec --recursive --bail --check-leaks --timeout 10000 test-out/server/specs/'),
      {
        name: 'travis',
        message: 'Will this project be tested with Travis CI?',
        default: 'Y/n',
        warning: 'If selected, you must enable Travis support for this project in https://travis-ci.org/profile'
      },
    ], function(err, props) {
      props.keywords = [];
      props.dependencies = {
        "async": "^0.9.0",
        "bluebird": "^2.3.11",
        "good": "^4.0.0",
        "good-console": "^2.0.1",
        "good-file": "^3.1.0",
        "hapi": "^7.5.2",
        "string": "^2.2.0",
        "winston": "^0.8.3"
      };
      props.devDependencies = {
        "chai": "^1.10.0",
        "chai-counter": "^1.0.0",
        "coffeelint": "^1.6.1",
        "glob": "^4.0.6",
        "grunt": "^0.4.5",
        "grunt-coffeelint": "0.0.13",
        "grunt-contrib-clean": "^0.6.0",
        "grunt-contrib-coffee": "^0.12.0",
        "grunt-contrib-copy": "^0.7.0",
        "grunt-contrib-jshint": "^0.10.0",
        "grunt-contrib-watch": "^0.6.1",
        "grunt-hapi": "^0.8.1",
        "load-grunt-tasks": "^1.0.0",
        "mocha": "^2.0.1",
        "request": "^2.48.0"
      };
      props.travis = /y/i.test(props.travis);

      // Files to copy (and process).
      var files = init.filesToCopy(props);
      if (!props.travis) { delete files['.travis.yml']; }

      // Add properly-named license files.
      init.addLicenseFiles(files, props.licenses);

      // Actually copy (and process) files.
      init.copyAndProcess(files, props);

      // Generate package.json file.
      init.writePackageJSON('package.json', props);

      // All done!
      done();
    });

  };
})();
