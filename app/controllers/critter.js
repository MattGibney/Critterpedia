import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default Controller.extend({
  settings: storageFor('settings'),

  critterPrice: computed('model.price', 'settings.flickPrices', function() {
    // TODO: Create a model class for critters and use to de-duplicate this code.
    if(this.get('settings.flickPrices')) {
      return this.get('model.price') * 1.5;
    }
    return this.get('model.price');
  }),

  activeMonths: computed('model.months.[]', 'settings.hemisphere', function() {
    // TODO: Make months translatable.
    const critterMonths = this.get('model.months')[this.get('settings.hemisphere')];
    return [
      [
        { id: 0, active: critterMonths.includes(0) },
        { id: 1, active: critterMonths.includes(1) },
        { id: 2, active: critterMonths.includes(2) },
        { id: 3, active: critterMonths.includes(3) },
      ],
      [
        { id: 4, active: critterMonths.includes(5) },
        { id: 5, active: critterMonths.includes(4) },
        { id: 6, active: critterMonths.includes(6) },
        { id: 7, active: critterMonths.includes(7) },
      ],
      [
        { id: 8, active: critterMonths.includes(8) },
        { id: 9, active: critterMonths.includes(9) },
        { id: 10, active: critterMonths.includes(10) },
        { id: 11, active: critterMonths.includes(11) },
      ],
    ]
  }),

  activeHours: computed('model.time', function() {
    const times = this.get('model.time');
    
    return [...Array(24).keys()].map((hour) => {
      if(!times) {
        return true;
      }

      const startTime = parseInt(times.start);
      const endTime = parseInt(times.end);

      if(startTime < endTime) {
        if(hour >= startTime && hour < endTime) {
          return true;
        }
      }else{
        if(hour < endTime || hour >= startTime) {
          return true;
        }
      }
      return false;
    });
  })
});
