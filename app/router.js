import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("warranties");
  this.route("show-warranty", { path: "warranties/:warranty_id" });
  this.route("new-warranty", { path: "warranties/new" });
  this.route("edit-warranty", { path: "warranties/:warranty_id/edit" });
});

export default Router;
