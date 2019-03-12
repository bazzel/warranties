import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    goToNewWarranty() {
      this.transitionToRoute("new-warranty");
    },
    goToWarranty(warranty) {
      this.transitionToRoute("show-warranty", warranty);
    }
  }
});
