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
    },
    deleteQuestion(questionId) {
      if (confirm("Are you sure you want to delete your question?")) {
        const question = this.store.peekRecord("question", questionId);
        question.deleteRecord();
        if (question.isDeleted) {
          question.save();
          this.transitionTo("dashboard");
          this.refresh();
        }
      }
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
