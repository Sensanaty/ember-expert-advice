import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from "@ember/service";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  currentSession: service(),
  actions: {
    async editQuestion(title, content, tags) {
      let question_id = parseInt(this.paramsFor("edit-question").question_id);
      this.store.findRecord("question", question_id).then((question) => {
        question.set("title", title || question.title);
        question.set("content", content || question.content);
        question.set("tags", tags);
        question.save();
      });
    }
  },
  async beforeModel(transition) {
    const questionOwner = this.store.peekRecord("question", parseInt(this.paramsFor("edit-question").question_id));
    if (!questionOwner) { this.transitionTo("dashboard") }
    if (parseInt(this.currentSession.user.id) !== questionOwner.user_id) {
      alert("You can't edit this question, it doesn't belong to you");
      transition.abort();
    }
  },
  model(params) {
    return RSVP.hash ({
      question: this.store.peekRecord("question", params.question_id),
      errors: {
        title: "",
        tags: ""
      },
    });
  }
});
