import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';

module('Unit | Controller | critter', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('Computed: critterPrice', function(assert) {
    let controller = this.owner.lookup('controller:critter');

    const modelMock = EmberObject.create({
      price: 100
    });
    const settingsMock = EmberObject.create({
      flickPrices: false
    });
    controller.set('model', modelMock);
    controller.set('settings', settingsMock);

    assert.equal(controller.get('critterPrice'), 100);

    settingsMock.set('flickPrices', true);
    assert.equal(controller.get('critterPrice'), 150);
  });
});
