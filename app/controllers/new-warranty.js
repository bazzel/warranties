import Controller from "@ember/controller";

export default Controller.extend({
  newModel: {},
  actions: {
    saveWarranty() {
      let warranty = this.store.createRecord("warranty", this.newModel);

      warranty.save().then(() => {
        this.transitionToRoute("show-warranty", warranty);
      });
    }
  }
});
