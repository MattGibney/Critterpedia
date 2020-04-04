import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'tbody',

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
      if(this.get('currentTime.day') > 15) {
        return true;
      }
    }
    return false;
  }),

  newCritter: computed('critter.months', 'currentTime.{month,day}', 'hemisphere', function() {
    let nextMonth = this.get('currentTime.month') - 1;
    if(nextMonth < 0) {
      nextMonth = 11;
    }

    if(!this.get('critter.months')[this.get('hemisphere')].includes(nextMonth)) {
      if(this.get('currentTime.day') <= 15) {
        return true;
      }
    }
    return false;
  })
});
