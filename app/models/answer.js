import DS from "ember-data";

export default DS.Model.extend({
  content: DS.attr(),
  user_id: DS.attr(),
  user_email: DS.attr(),
  question_id: DS.attr(),
  question: DS.belongsTo("question"),
});
