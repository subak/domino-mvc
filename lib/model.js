define(["EventEmitter", "domino-class"], function (EventEmitter, Class) {
  "use strict";

  function Model() {
    
  }
  
  var fn = Class.create(EventEmitter).extends(Model);
  
  return Model;
});