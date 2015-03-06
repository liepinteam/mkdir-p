"use strict";
var fs = require('fs');
var path = require('path');

module.exports = function (dist) {
  dist.split(/[\\\/]/)
    .reduce(function (first, second) {
      var _path = path.join(first, second);
      if (!fs.existsSync(_path)) {
        fs.mkdirSync(_path);
      }
      return _path;
    });
};