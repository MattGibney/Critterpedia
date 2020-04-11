import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';

module('Unit | Component | critter-table-row', function(hooks) {
  setupTest(hooks);

  test('Computed: critterPrice', function(assert) {
    let component = this.owner.factoryFor('component:critter-table-row').create({
      flickPrices: false,
      critter: EmberObject.create({
        price: 100
      })
    });
    assert.equal(component.get('critterPrice'), 100);

    component.set('flickPrices', true);
    assert.equal(component.get('critterPrice'), 150);
  });

  test('Computed: expiresSoon', function(assert) {
    const currentTimeMock = EmberObject.create({
      month: 1
    });
    let component = this.owner.factoryFor('component:critter-table-row').create({
      critter: EmberObject.create({
        months: {
          northern: [1, 2],
          southern: [11, 0]
        }
      }),
      currentTime: currentTimeMock,
      hemisphere: 'northern'
    });

    // Northern hemisphere, critter available next month
    assert.equal(component.get('expiresSoon'), false);

    // Southern hemisphere, critter not available next month, end of year
    currentTimeMock.set('month', 11);
    component.set('hemisphere', 'southern');
    assert.equal(component.get('expiresSoon'), false);

    // Southern hemisphere, critter not available next month, end of year
    currentTimeMock.set('month', 0);
    assert.equal(component.get('expiresSoon'), true);
  });

  test('Computed: newCritter', function(assert) {
    const currentTimeMock = EmberObject.create({
      month: 1
    });
    let component = this.owner.factoryFor('component:critter-table-row').create({
      critter: EmberObject.create({
        months: {
          northern: [1, 2],
          southern: [11, 0]
        }
      }),
      currentTime: currentTimeMock,
      hemisphere: 'northern'
    });

    // Northern hemisphere, critter not available last month
    assert.equal(component.get('newCritter'), true);

    // Northern hemisphere, critter was available last month
    currentTimeMock.set('month', 2);
    assert.equal(component.get('newCritter'), false);

    // Southern hemisphere, critter was available last month, beginning of year
    currentTimeMock.set('day', 15);
    currentTimeMock.set('month', 0);
    component.set('hemisphere', 'southern');
    assert.equal(component.get('newCritter'), false);
  });
});
