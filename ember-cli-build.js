'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('node_modules/popper.js/dist/umd/popper.js');
  app.import('node_modules/popper.js/dist/umd/popper.js.map');
  
  app.import('node_modules/bootstrap/dist/js/bootstrap.js');
  app.import('node_modules/bootstrap/dist/js/bootstrap.js.map');

  return app.toTree();
};
