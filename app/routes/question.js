import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from "@ember/service";

export default Route.extend({
  currentSession: service(),
  model(params) {
    return RSVP.hash({
      question: this.store.findRecord("question", params.question_id, { include: "answers" }),
      currentUser: this.currentSession.user,
      userId: parseInt(this.currentSession.user.id)
    })
  }
});
