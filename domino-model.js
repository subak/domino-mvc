function define(modules, callback) {
  var events = require("events"),
    Class = require("domino-class");
  module.exports = callback(events.EventEmitter, Class);
}
var fs = require('fs'),
  callback = eval(fs.readFileSync(__dirname + "/lib/model.js", 'utf8'));
