import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  settings: service('settings'),
  firebaseApp: service('firebase-app'),

  monthOverride: null,

  critterType: 'fish',
  critterTime: 'now',

  sortBy: 'name',
  sortDir: 'asc',

  init() {
    this._super(...arguments);
    this.set('date', new Date());

    // setInterval(() => {
    //   this.set('date', new Date());
    // }, 500);
  },

  currentTime: computed('date', 'monthOverride', function() {
    const today = this.get('date');
    const timeObj = {
      day: today.getDate(),
      month: today.getMonth(),
      hour: today.getHours()
    }

    if(this.get('monthOverride')) {
      timeObj.month = parseInt(this.get('monthOverride'));
    }

    return timeObj;
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

  sortedCritters: computed('availableCritters.[]', 'sortBy', 'sortDir', function () {
    const critters = this.get('availableCritters').sortBy(this.get('sortBy'));
    if(this.get('sortDir') === 'desc') {
      critters.reverse();
    }
    return critters;
  }),

  actions: {
    async changeCritterType(type) {
      const analytics = await this.get('firebaseApp').analytics();

      if(type === 'fish') {
        analytics.logEvent("view_fish");
      } else {
        analytics.logEvent("view_insects");
      }
      return this.set('critterType', type);
    },
    changeCritterTime(time) {
      if(time === "now") {
        this.set('monthOverride', null);
      }
      return this.set('critterTime', time);
    },
    sortBy(sortColumn) {
      if(this.get('sortDir') === 'desc') {
        this.set('sortDir', 'asc');
      }else{
        this.set('sortDir', 'desc');
      }
      return this.set('sortBy', sortColumn);
    },
    changeMonth(month) {
      this.set('critterTime', 'month');
      return this.set('monthOverride', month);
    }
  }
});
