import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | warranties/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:warranties/show');
    assert.ok(route);
  });
});
