define(["uuid", "domino-emitter"], function (uuid, parent) {
  "use strict";

  /**
   * @class Model
   * @param {Object} value
   * @param {Object} opts
   * @constructor
   */
  var self = parent.subclass(function Model(value, opts) {
    if ( !value ) { value = {}; }
    var aUuid = uuid.v4();
    var id = opts && opts.id || aUuid;

    Object.defineProperties(this, {
      uuid: {
        value: aUuid
      },
      id: {
        value: id
      },
      value: {
        get: function () {
          return value;
        },
        /**
         * TODO: validationの処理
         * @param newValue
         * @returns {*}
         */
        set: function (newValue) {
          var oldValue = {};
          Object.keys(value).forEach(function (key) {
            oldValue[key] = value[key];
            delete value[key];
          });
          Object.keys(newValue).forEach(function (key) {
            value[key] = newValue[key];
          });
          this.emit("update", newValue, oldValue, this);
          return value;
        }
      }
    });
  });

  /**
   * @method getInstance
   * @static
   * @returns {Model}
   */
  self.defineClassMethod(function getInstance() {
    if ( !this.singleton ) {
      Object.defineProperties(this, {
        value: {
          value: {}
        }
      });

      Object.defineProperties(this, {
        singleton: {
          value: new this(this.value)
        }
      });
    }

    return this.singleton;
  });

  /**
   * @method destroy
   */
  self.defineMethod(function destroy() {
    this.destroyed = true;
    this.emit("destroy", this);
    this.removeAllListeners();
  });

  /**
   * TODO: 名前がかっこ悪い
   * @method prototypeWith
   * @param {Object} value
   * @returns {Model} model
   */
  self.defineMethod(function prototypeWith(value) {
    if ( !value ) { value = {}; }
    var aValue = Object.create(this.value);

    Object.keys(value).forEach(function (key) {
      aValue[key] = value[key];
    });

    var model = new this.class(aValue);

    this.on("update", function (newValue, oldValue, aModel) { model.emit("update", newValue, oldValue, aModel); });
    this.on("destroy", function (aModel) { model.emit("destroy", aModel); });

    return model;
  });

  self.defineMethod(function setA() {
    this.class.getInstance().value = {a: "a"}
  });

  return self;
});