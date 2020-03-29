import Controller from '@ember/controller';
// import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  settings: service('settings'),

  actions: {
    selectHemisphere(hemisphere) {
      this.set('settings.hemisphere', hemisphere);
    }
  }
});
