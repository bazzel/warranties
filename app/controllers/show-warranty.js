import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    editWarranty(warranty) {
      this.transitionToRoute("edit-warranty", warranty);
    }
  }
});
