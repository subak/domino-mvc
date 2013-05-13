define(["uuid", "EventEmitter", "domino-class"], function (uuid, EventEmitter, Class) {
  "use strict";

  function Model(value) {
    this.uuid = uuid.v4();

    this.get = function () {
      return value;
    };

    this.set = function (newValue) {
      var oldValue = value;
      value = newValue;
      this.emit("update", newValue, oldValue);
    };
  }

  var fn = Class.create(EventEmitter).extends(Model);

  fn.getId = function () {
    return this.uuid;
  };


  Object.defineProperties(fn, {
    id: {
      get: function () {
        return this.getId();
      }
    }
  });

  return Model;
});