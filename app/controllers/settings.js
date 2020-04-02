import Controller from '@ember/controller';
// import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  settings: service('settings'),
  firebaseApp: service('firebase-app'),

  actions: {
    async selectHemisphere(hemisphere) {
      const analytics = await this.get('firebaseApp').analytics();
      analytics.logEvent("settings_hemisphere", { changeTo: hemisphere });
      this.set('settings.hemisphere', hemisphere);
    }
  }
});
