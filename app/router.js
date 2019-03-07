import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("warranties");
  this.route("warranty", { path: "warranties/:warranty_id" });
});

export default Router;
