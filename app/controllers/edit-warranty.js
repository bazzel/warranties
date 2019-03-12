import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    save() {
      let warranty = this.model;
      warranty
        .save()
        .then(() => {
          this.transitionToRoute("show-warranty", warranty);
        })
        .catch(e => {
          this.set("errors", warranty.get("errors"));
        });
    },
    cancel() {
      this.model.rollbackAttributes();
      this.transitionToRoute("show-warranty", this.model);
    }
  }
});
