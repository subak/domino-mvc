define(["uuid", "domino-controller", "domino-class"], function (uuid, Controller, parent) {
  "use strict";

  var self = parent.subclass(function View(aModel, opts) {
    this.uuid = uuid.v4();
    this.id = opts && opts.id || this.uuid;

    Object.defineProperties(this, {
      model: {
        get: function () {
          return aModel.value;
        }
      }
    });

    this.controller = new this.controllerClass(aModel, this.id);
  });

  self.defineField("controllerClass", Controller);

  return self;
});