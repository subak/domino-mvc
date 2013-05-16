function define(modules, callback) {
  module.exports = callback(require("uuid"), require("domino-controller"), require("domino-class"));
}
var fs = require('fs'),
  callback = eval(fs.readFileSync(__dirname + "/lib/view.js", 'utf8'));
