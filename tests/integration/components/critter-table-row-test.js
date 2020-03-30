import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | critter-table-row', function(hooks) {
  setupRenderingTest(hooks);

  test('Simple Rendering', async function(assert) {
    const mockCritter = EmberObject.create({
      name: 'Test Critter',
      location: 'River',
      months: {
        northern: []
      }
    })
    this.set('critter', mockCritter);

    const mockCurrentTime = EmberObject.create({})
    this.set('currentTime', mockCurrentTime);

    await render(hbs`{{critter-table-row critter=critter currentTime=currentTime hemisphere="northern"}}`);

    assert.equal(this.element.querySelector('tr:first-child>td:nth-child(1)').textContent.trim(), 'Test Critter');
    assert.equal(this.element.querySelector('tr:first-child>td:nth-child(2)').textContent.trim(), 'River');
    assert.equal(this.element.querySelector('tr:first-child>td:nth-child(3)').textContent.trim(), 'All Day');

    mockCritter.set('time', {
      start: '08',
      end: '14'
    });

    await render(hbs`{{critter-table-row critter=critter currentTime=currentTime hemisphere="northern"}}`);

    assert.equal(this.element.querySelector('tr:first-child>td:nth-child(3)').textContent.trim(), '8am - 2pm');
  });

  test('Expiring Soon Alert', async function(assert) {
    const mockCritter = EmberObject.create({
      name: 'Test Critter',
      location: 'River',
      months: {
        northern: [1, 2]
      }
    })
    this.set('critter', mockCritter);

    const mockCurrentTime = EmberObject.create({
      month: 1
    })
    this.set('currentTime', mockCurrentTime);

    await render(hbs`{{critter-table-row critter=critter currentTime=currentTime hemisphere="northern"}}`);
    assert.equal(this.element.querySelectorAll('tr').length, 1);

    mockCurrentTime.set('month', 2);

    await render(hbs`{{critter-table-row critter=critter currentTime=currentTime hemisphere="northern"}}`);
    assert.equal(this.element.querySelectorAll('tr').length, 2);
    assert.equal(this.element.querySelector('tr:last-child>td').textContent.trim(), 'This critter is not available next month!');
  });
});
