import Component from "@ember/component";

export default Component.extend({
  classNames: ["warranty-item"],
  click() {
    this.onClick();
  },
  actions: {
    clickItem() {
      this.onClick();
    },
    clickEdit() {
      this.onClickEdit();
    },
    clickDelete() {
      this.onClickDelete();
    },
    clickUndo() {
      this.onClickUndo();
    },
    closeToast() {
      this.onCloseToast();
    }
  }
});
