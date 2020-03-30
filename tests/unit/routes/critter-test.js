import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | critter', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:critter');
    assert.ok(route);
  });
});
