"use strict";
define(["EventEmitter", "class"], function (EventEmitter, Class) {
  function Model() {
    
  }
  
  var fn = Class.create(EventEmitter).extends(Model);
  
  return Model;
});