function define(modules, callback) {
  module.exports = callback(require("uuid"), require("domino-emitter"));
}
var fs = require('fs'),
  callback = eval(fs.readFileSync(__dirname + "/lib/model.js", 'utf8'));
