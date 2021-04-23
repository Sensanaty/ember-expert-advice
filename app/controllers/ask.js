import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    validateTitle(title) {
      if (!title) {
        this.set('model.errors.title', "Invalid title");
      } else this.set('model.errors.title', "");
    },
    validateTags(tags) {
      if (!tags) {
        this.set('model.errors.tags', "Invalid tags");
      } else this.set('model.errors.tags', "");
    }
  }
});
