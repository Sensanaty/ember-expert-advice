import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | edit_answer', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:edit-answer');
    assert.ok(route);
  });
});
