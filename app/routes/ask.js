import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),
  currentSession: service(),
  model() {
    return {
      errors: {
        title: "",
        tags: ""
      }
    }
  },
  actions: {
    async askQuestion(title, content, tags) {
      if (!title || !content || !tags) {
        alert("You have to fill in the form first!");
        return;
      }
      const question = this.store.createRecord("question", {
        title: title,
        content: content,
        tags: tags.split(/[\s,]+/),
        user_id: this.currentSession.user.id
      })
      await question.save();
      this.transitionTo("dashboard");
    }
  }
});
