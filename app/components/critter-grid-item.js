import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['col-4', 'col-sm-3', 'd-flex', 'flex-column', 'align-items-center', 'text-center', 'mb-3'],

  // TODO: Move this to a critter model class
  critterPrice: computed('critter.price', 'flickPrices', function() {
    if(this.get('flickPrices')) {
      return this.get('critter.price') * 1.5;
    }
    return this.get('critter.price');
  }),

  expiresSoon: computed('critter.months', 'currentTime.{month,day}', 'hemisphere', function() {
    let nextMonth = this.get('currentTime.month') + 1;
    if(nextMonth > 11) {
      nextMonth = 0;
    }

    if(!this.get('critter.months')[this.get('hemisphere')].includes(nextMonth)) {
      return true;
    }
    return false;
  }),

  newCritter: computed('critter.months', 'currentTime.{month,day}', 'hemisphere', function() {
    let nextMonth = this.get('currentTime.month') - 1;
    if(nextMonth < 0) {
      nextMonth = 11;
    }

    if(!this.get('critter.months')[this.get('hemisphere')].includes(nextMonth)) {
      return true;
    }
    return false;
  })
});
