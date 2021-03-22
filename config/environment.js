'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'critterpedia',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    firebase: {
      apiKey: "AIzaSyAA-a8fxSQXOVf2G1D_VXQxGUp5xtbsSJM",
      authDomain: "critterpedia-moppler.firebaseapp.com",
      databaseURL: "https://critterpedia-moppler.firebaseio.com",
      projectId: "critterpedia-moppler",
      storageBucket: "critterpedia-moppler.appspot.com",
      messagingSenderId: "690320825597",
      appId: "1:690320825597:web:c81c693fabcf6df390b294",
      measurementId: "G-VWS6KN8NGX"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
