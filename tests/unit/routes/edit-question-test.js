import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | edit_question", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    let route = this.owner.lookup("route:edit-question");
    assert.ok(route);
  });
});
