import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';

module('Unit | Controller | index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('Computed: availableCritters in Month', function(assert) {
    const mockModel = [
      {
        type: 'fish',
        name:' Bitterling',
        price:' 900',
        location:' River',
        months: {
          northern: [1],
          southern: [2]
        }
      }
    ];

    const mockTime = EmberObject.create({
      month: 1,
      hour: 12,
    });

    const mockSettings = EmberObject.create({
      hemisphere: 'northern'
    });

    let controller = this.owner.lookup('controller:index');
    controller.set('settings', mockSettings);
    controller.set('model', mockModel);
    controller.set('currentTime', mockTime);
    
    assert.equal(controller.get('availableCritters.length'), 1);

    mockSettings.set('hemisphere', 'southern');
    assert.equal(controller.get('availableCritters.length'), 0);

    mockTime.set('month', 2);
    assert.equal(controller.get('availableCritters.length'), 1);

    mockSettings.set('hemisphere', 'northern');
    assert.equal(controller.get('availableCritters.length'), 0);
  });

  test('Computed: availableCritters in Month in Time in Day', function(assert) {
    const mockModel = [
        {
          type: 'fish',
          name:' Bitterling',
          price:' 900',
          location:' River',
          time: {
            start: '09',
            end: '16'
          },
          months: {
            northern: [1],
            southern: [2]
          }
        }
      ];

    const mockTime = EmberObject.create({
      month: 1,
      hour: 8,
    });

    const mockSettings = EmberObject.create({
      hemisphere: 'northern'
    });

    let controller = this.owner.lookup('controller:index');
    controller.set('settings', mockSettings);
    controller.set('model', mockModel);
    controller.set('currentTime', mockTime);

    // Truth Table
    [
      { hour: 0, shouldBe: 0 },
      { hour: 1, shouldBe: 0 },
      { hour: 2, shouldBe: 0 },
      { hour: 3, shouldBe: 0 },
      { hour: 4, shouldBe: 0 },
      { hour: 5, shouldBe: 0 },
      { hour: 6, shouldBe: 0 },
      { hour: 7, shouldBe: 0 },
      { hour: 8, shouldBe: 0 },
      { hour: 9, shouldBe: 1 },
      { hour: 10, shouldBe: 1 },
      { hour: 11, shouldBe: 1 },
      { hour: 12, shouldBe: 1 },
      { hour: 13, shouldBe: 1 },
      { hour: 14, shouldBe: 1 },
      { hour: 15, shouldBe: 1 },
      { hour: 16, shouldBe: 0 },
      { hour: 17, shouldBe: 0 },
      { hour: 18, shouldBe: 0 },
      { hour: 19, shouldBe: 0 },
      { hour: 20, shouldBe: 0 },
      { hour: 21, shouldBe: 0 },
      { hour: 22, shouldBe: 0 },
      { hour: 23, shouldBe: 0 }
    ].forEach(test => {
      mockTime.set('hour', test.hour);
      assert.equal(controller.get('availableCritters.length'), test.shouldBe, `${test.hour} should be ${test.shouldBe}`);
    });
  });

  test('Computed: availableCritters in Month in Time over Day', function(assert) {
    const mockModel = [
        {
          type: 'fish',
          name:' Bitterling',
          price:' 900',
          location:' River',
          time: {
            start: '16',
            end: '09'
          },
          months: {
            northern: [1],
            southern: [2]
          }
        }
      ];

    const mockTime = EmberObject.create({
      month: 1,
      hour: 8,
      hemisphere: 'northern'
    });

    const mockSettings = EmberObject.create({
      hemisphere: 'northern'
    });

    let controller = this.owner.lookup('controller:index');
    controller.set('settings', mockSettings);
    controller.set('model', mockModel);
    controller.set('currentTime', mockTime);
    
    // assert.equal(controller.get('availableFish.length'), 0);

    // Truth Table
    [
      { hour: 0, shouldBe: 1 },
      { hour: 1, shouldBe: 1 },
      { hour: 2, shouldBe: 1 },
      { hour: 3, shouldBe: 1 },
      { hour: 4, shouldBe: 1 },
      { hour: 5, shouldBe: 1 },
      { hour: 6, shouldBe: 1 },
      { hour: 7, shouldBe: 1 },
      { hour: 8, shouldBe: 1 },
      { hour: 9, shouldBe: 0 },
      { hour: 10, shouldBe: 0 },
      { hour: 11, shouldBe: 0 },
      { hour: 12, shouldBe: 0 },
      { hour: 13, shouldBe: 0 },
      { hour: 14, shouldBe: 0 },
      { hour: 15, shouldBe: 0 },
      { hour: 16, shouldBe: 1 },
      { hour: 17, shouldBe: 1 },
      { hour: 18, shouldBe: 1 },
      { hour: 19, shouldBe: 1 },
      { hour: 20, shouldBe: 1 },
      { hour: 21, shouldBe: 1 },
      { hour: 22, shouldBe: 1 },
      { hour: 23, shouldBe: 1 }
    ].forEach(test => {
      mockTime.set('hour', test.hour);
      assert.equal(controller.get('availableCritters.length'), test.shouldBe, `${test.hour} should be ${test.shouldBe}`);
    });
  });
});
