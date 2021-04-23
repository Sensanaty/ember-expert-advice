import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("login");
  this.route("signup");
  this.route("dashboard", { path: "" }, function() {});
  this.route("question", { path: "question/:question_id" });
  this.route("edit_question", { path: "edit_question/:question_id" });
  this.route("edit_answer", { path: "edit_answer/:answer_id" });
  this.route('ask');
});

export default Router;
