import Component from "@ember/component";

export default Component.extend({
  actions: {
    submitChanges() {
      this.onSubmit();
    },
    cancelChanges() {
      this.onCancel();
    }
  }
});
