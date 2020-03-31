import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  settings: service('settings'),

  critterType: 'fish',
  critterTime: 'now',

  init() {
    this._super(...arguments);
    this.set('date', new Date());

    // setInterval(() => {
    //   this.set('date', new Date());
    // }, 500);
  },

  currentTime: computed('date', function() {
    const today = this.get('date');
    return {
      day: today.getDate(),
      month: today.getMonth(),
      hour: today.getHours()
    }
  }),

  availableCritters: computed('critterType', 'critterTime', 'currentTime.{month,hour}', 'settings.hemisphere', function() {
    return this.get('model').filterBy('type', this.get('critterType')).filter(f => {

      if(f.months[this.get('settings.hemisphere')].includes(this.get('currentTime.month'))) {
        if(!f.time || this.get('critterTime') === 'month') {
          // No time restriction means all day
          return true;
        }

        const startTime = parseInt(f.time.start);
        const endTime = parseInt(f.time.end);

        // Same Day
        if(startTime < endTime) {
          if(this.get('currentTime.hour') >= startTime && this.get('currentTime.hour') < endTime) {
            return true;
          }
          return false;
        }else{
          if(this.get('currentTime.hour') < endTime || this.get('currentTime.hour') >= startTime) {
            return true;
          }
          return false;
        }
      }
      return false;
    });
  }),

  actions: {
    changeCritterType(type) {
      return this.set('critterType', type);
    },
    changeCritterTime(time) {
      return this.set('critterTime', time);
    }
  }
});
