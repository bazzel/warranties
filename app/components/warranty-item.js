import Component from "@ember/component";

export default Component.extend({
  actions: {
    clickItem() {
      this.onClick();
    },
    clickEdit() {
      this.onClickEdit();
    }
  }
});
