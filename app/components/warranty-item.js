import Component from "@ember/component";

export default Component.extend({
  classNames: ["warranty-item"],
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
