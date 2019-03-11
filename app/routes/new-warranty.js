import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return {};
  },
  resetController(controller, model) {
    this._super(controller, model);
    controller.set("errors", null);
  }
});
