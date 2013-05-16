define(["domino-class"], function (parent) {
  "use strict";

  var self = parent.subclass(function Controller(model, viewId) {
    Object.defineProperties(this, {
      model: {
        value: model
      },
      viewId: {
        value: viewId
      }
    });
  });

  return self;
});