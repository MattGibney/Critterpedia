import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import setupIntl from 'ember-intl/test-support/setup-intl';

module('Integration | Component | critter-table-row', function(hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us', {
    test_critter: "Test Critter"
  });

  test('Simple Rendering', async function(assert) {
    const mockCritter = EmberObject.create({
      name: 'test_critter',
      location: 'River',
      price: 1000,
      months: {
        northern: []
      }
    })
    this.set('critter', mockCritter);

    const mockCurrentTime = EmberObject.create({})
    this.set('currentTime', mockCurrentTime);

    await render(hbs`{{critter-table-row critter=critter currentTime=currentTime hemisphere="northern"}}`);

    assert.equal(this.element.querySelector('tr:first-child>td:nth-child(1)').textContent.trim(), 't:critterData.test_critter:()');
    assert.equal(this.element.querySelector('tr:first-child>td:nth-child(2)').textContent.trim(), 't:location.River:()');
    assert.equal(this.element.querySelector('tr:first-child>td:nth-child(3)').textContent.trim(), '1,000');
    assert.equal(this.element.querySelector('tr:first-child>td:nth-child(4)').textContent.trim(), 'All Day');

    mockCritter.set('time', {
      start: '08',
      end: '14'
    });

    await render(hbs`{{critter-table-row critter=critter currentTime=currentTime hemisphere="northern"}}`);

    assert.equal(this.element.querySelector('tr:first-child>td:nth-child(4)').textContent.trim(), '8am - 2pm');
  });

  test('Expiring Soon Alert', async function(assert) {
    const mockCritter = EmberObject.create({
      name: 'Test Critter',
      location: 'River',
      price: 1000,
      months: {
        northern: [1, 2]
      }
    })
    this.set('critter', mockCritter);

    const mockCurrentTime = EmberObject.create({
      month: 2
    })
    this.set('currentTime', mockCurrentTime);

    await render(hbs`{{critter-table-row critter=critter currentTime=currentTime hemisphere="northern"}}`);
    assert.equal(this.element.querySelectorAll('tr').length, 2);
    assert.equal(this.element.querySelector('tr:last-child>td').textContent.trim(), 'This critter is not available next month!');
  });

  test('New Critter Alert', async function(assert) {
    const mockCritter = EmberObject.create({
      name: 'Test Critter',
      location: 'River',
      price: 1000,
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
    assert.equal(this.element.querySelectorAll('tr').length, 2);
    assert.equal(this.element.querySelector('tr:last-child>td').textContent.trim(), 'This critter is newly available this month!');
  });
});
