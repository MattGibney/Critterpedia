'use strict';
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const ENV = require('./config/environment')(EmberApp.env());

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-favicon': {
      enabled: ENV.environment != 'test', // By default favicons are NOT generated in TEST env to speedup builds
  
      onSuccess() {}, // You can call your callback when favicons are generated successfully
  
      iconPath: 'assets/app-icon.png', // icon path related to `public` folder
  
      // See the [favicons](https://github.com/itgalaxy/favicons) module for details on the available configuration options.
      faviconsConfig: {
        icons: {
          favicons: true,
          android: true,
          appleIcon: true,
          appleStartup: true
        }
      }
    }
  });

  app.import('node_modules/popper.js/dist/umd/popper.js');
  app.import('node_modules/popper.js/dist/umd/popper.js.map');
  
  app.import('node_modules/bootstrap/dist/js/bootstrap.js');
  app.import('node_modules/bootstrap/dist/js/bootstrap.js.map');

  return app.toTree();
};
