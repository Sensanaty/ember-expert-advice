import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  user_id: DS.attr(),
  tags: DS.attr(),
  answers: DS.hasMany("answer")
});
