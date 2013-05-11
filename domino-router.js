function define(modules, callback) {
  var xregexp = require("xregexp"),
    Class = require("domino-class"),
    UserError = require("domino-class/domino-error");
  module.exports = callback(xregexp.XRegExp, Class, UserError);
}
var fs = require('fs'),
  callback = eval(fs.readFileSync(__dirname + "/lib/router.js", 'utf8'));
