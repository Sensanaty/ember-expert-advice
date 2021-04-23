import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    async editAnswer(content) {
      let answer_id = parseInt(this.paramsFor("edit-answer").answer_id);
      console.log(answer_id);
      this.store.findRecord("answer", answer_id).then(answer => {
        answer.set("content", content || answer.content);
        answer.save();
        this.transitionTo("question", answer.question_id);
      })
    }
  },
  model(params) {
    return this.store.findRecord("answer", params.answer_id)
  }
});
