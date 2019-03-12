import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    save() {
      let warranty = this.model;
      warranty
        .save()
        .then(() => {
          this.transitionBack();
        })
        .catch(e => {
          this.set("errors", warranty.get("errors"));
        });
    },
    cancel() {
      this.model.rollbackAttributes();
      this.transitionBack();
    }
  },
  transitionBack() {
    let redirectToURL = this.get("redirectToURL");

    if (redirectToURL === this.get("target").currentURL) {
      redirectToURL = "warranties";
    }
    this.transitionToRoute(redirectToURL);
  }
});
