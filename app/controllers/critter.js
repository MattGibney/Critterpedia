import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  settings: service('settings'),

  activeMonths: computed('model.months.[]', 'settings.hemisphere', function() {
    const critterMonths = this.get('model.months')[this.get('settings.hemisphere')];
    return [
      [
        { name: 'Jan', active: critterMonths.includes(0) },
        { name: 'Feb', active: critterMonths.includes(1) },
        { name: 'Mar', active: critterMonths.includes(2) },
        { name: 'Apr', active: critterMonths.includes(3) },
      ],
      [
        { name: 'May', active: critterMonths.includes(4) },
        { name: 'Jun', active: critterMonths.includes(5) },
        { name: 'Jul', active: critterMonths.includes(6) },
        { name: 'Aug', active: critterMonths.includes(7) },
      ],
      [
        { name: 'Sep', active: critterMonths.includes(8) },
        { name: 'Oct', active: critterMonths.includes(9) },
        { name: 'Nov', active: critterMonths.includes(10) },
        { name: 'Dec', active: critterMonths.includes(11) },
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
