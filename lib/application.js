define(["domino-class"], function (Class) {
  "use strict";
  function Application() {
    this.views = {};
    this.models = {};
  }
  
  var fn = Class.extends(Application);

  fn.getView = function (id) {
    return this.views[id];
  };

  fn.getModel = function (id) {
    return this.models[id];
  };

  fn.addModel = function (model) {
    this.models[model.id] = model;
    return model;
  };

  fn.addView = function (view) {
    this.views[view.id] = view;
    return view;
  };

  return Application;
});