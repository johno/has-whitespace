'use strict'

var isPresent = require('is-present')

module.exports = function hasWhitespace (str) {
  if (typeof str !== 'string') {
    throw new TypeError('has-whitespace expected a string')
  }

  return isPresent(/\s/.exec(str))
}
