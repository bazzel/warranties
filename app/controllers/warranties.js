import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    newWarranty() {
      this.transitionToRoute("new-warranty");
    },
    showWarranty(warranty) {
      this.transitionToRoute("show-warranty", warranty);
    },
    editWarranty(warranty) {
      this.transitionToRoute("edit-warranty", warranty);
    }
  }
});
