define(["XRegExp", "domino-class", "domino-error"], function (XRegExp, parent, UserError) {
  "use strict";

  function Router(target, params, routes) {
    var route = this.detectRoute(target, routes);

    if ( route ) {
      Object.keys(route.match).forEach(function(key) {
        params[key] = route.match[key];
      });

      this.action = route.action;
      this.params = params;
    } else {
      throw new this.constructor.RouteError("route not match.");
    }
  }

  function RouteError() {
    this.super().constructor.apply(this, arguments);
  }
  UserError.extends(RouteError);
  Router.RouteError = RouteError;

  var fn = parent.extends(Router);

  fn.detectRoute = function (target, routes) {
    var action, match, res;

    res = routes.some(function (route) {
      action = route.action;
      match = XRegExp.exec(target, XRegExp(route.pattern));
      return match !== null;
    });

    return res ? {action: action, match: match} : null;
  };

  return Router;
});