import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    save() {
      let warranty = this.store.createRecord("warranty", this.model);

      warranty
        .save()
        .then(() => {
          this.transitionToRoute("show-warranty", warranty);
        })
        .catch(e => {
          warranty.deleteRecord();
          this.set("errors", warranty.get("errors"));
        });
    },
    cancel() {
      this.transitionToRoute("warranties");
    }
  }
});
