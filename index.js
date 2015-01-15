'use strict';

var isPresent = require('is-present');

module.exports = function hasWhitespace(str) {
  return isPresent(/\s/.exec(str));
}
