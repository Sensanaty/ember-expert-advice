import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from "@ember/service";

export default Route.extend({
  currentSession: service(),
  actions: {
    answerQuestion(content, questionId) {
      const newAnswer = this.store.createRecord("answer", {
        content: content,
        user_id: parseInt(this.currentSession.user.id),
        question_id: parseInt(questionId)
      });
      newAnswer.save();
    }
  },
  model(params) {
    if (this.currentSession.user) {
      return RSVP.hash({
        question: this.store.findRecord("question", params.question_id, { include: "answers" }),
        currentUser: this.currentSession.user,
        userId: parseInt(this.currentSession.user.id)
      })
    } else {
      return RSVP.hash({
        question: this.store.findRecord("question", params.question_id, { include: "answers" })
      });
    }
  }
});
