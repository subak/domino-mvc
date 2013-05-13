function define(modules, callback) {
  var events = require("events");
  module.exports = callback(require("uuid"), events.EventEmitter, require("domino-class"));
}
var fs = require('fs'),
  callback = eval(fs.readFileSync(__dirname + "/lib/model.js", 'utf8'));
