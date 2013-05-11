define(
  ["domino-model", "domino-view", "domino-controller", "domino-application", "domino-router", "domino-routes"],
  function (Model, View, Controller, Application, Router, routes) {
  return {
    Model: Model,
    View: View,
    Controller: Controller,
    Application: Application,
    Router: Router,
    routes: routes
  }
});