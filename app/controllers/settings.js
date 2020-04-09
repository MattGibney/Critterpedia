import Controller from '@ember/controller';
// import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default Controller.extend({
  settings: storageFor('settings'),
  firebaseApp: service('firebase-app'),

  actions: {
    async selectHemisphere(hemisphere) {
      const analytics = await this.get('firebaseApp').analytics();
      analytics.logEvent("settings_hemisphere", { changeTo: hemisphere });
      this.set('settings.hemisphere', hemisphere);
    }
  }
});
