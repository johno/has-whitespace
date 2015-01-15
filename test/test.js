var assert = require('assert');
var hasWhitespace = require('..');

var whitespaceStrings = [
  ' ',
  'foo ',
  '\t',
  '\n',
  '\r',
  'foo\rbar',
  ' foo'
];

var nonWhitespaceStrings = [
  'foo',
  'bar)(*)()',
  'abcdefghijklmnopqrstuvwxyz',
  '0123456789',
  '{}',
  '-',
  ''
]

describe('has-whitespace', function() {

  it('should return true when there is whitespace', function() {
    whitespaceStrings.forEach(function(str) {
      assert.ok(hasWhitespace(str));
    });
  });

  it('should return false when there is no whitespace', function() {
    nonWhitespaceStrings.forEach(function(str) {
      assert.ok(!hasWhitespace(str));
    });
  });
});
