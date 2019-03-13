import Component from "@ember/component";
import { typeOf } from "@ember/utils";
import { isPresent } from "@ember/utils";

export default Component.extend({
  dateFormat: "ddd, MMM Do, YYYY",
  actions: {
    submitChanges() {
      this.onSubmit();
    },
    cancelChanges() {
      this.onCancel();
    }
  },
  didInsertElement() {
    this.fixExpiresOnInPikaday();
  },
  fixExpiresOnInPikaday() {
    //Wouldn't expect this to be necessary.
    //See also: https://github.com/devotox/ember-paper-pikaday/issues/10
    if (typeOf(this.warranty) === "instance") {
      const expiresOn = this.warranty.get("expiresOn");

      if (isPresent(expiresOn)) {
        this.warranty.set(
          "expiresOn",
          moment(expiresOn).format(this.dateFormat)
        );
      }
    }
  }
});
