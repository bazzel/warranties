import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  moment: Ember.inject.service(),
  dateFormat: "MMM Do, YYYY",
  tagName: "p",
  classNames: ["expires-on"],
  classNameBindings: ["hasExpired"],
  hasExpired: computed(function() {
    return new Date(this.get("expiresOn")) < new Date();
  }),
  tooltipText: computed(function() {
    if (this.get("hasExpired")) {
      return `This warranty has expired ${moment(this.expiresOn).fromNow()}`;
    } else {
      return `This warranty will expire ${moment(this.expiresOn).fromNow()}`;
    }
  }),
  icon: computed(function() {
    if (this.get("hasExpired")) {
      return "event_busy";
    } else {
      return "event_available";
    }
  })
});
