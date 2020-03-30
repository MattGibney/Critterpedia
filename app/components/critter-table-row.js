import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'tbody',
  
  expiresSoon: computed('critter.months', 'currentTime.month', 'hemisphere', function() {
    let nextMonth = this.get('currentTime.month') + 1;
    if(nextMonth > 11) {
      nextMonth = 0;
    }

    if(!this.get('critter.months')[this.get('hemisphere')].includes(nextMonth)) {
      return true;
    }
    return false;
  })
});
