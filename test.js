import test from 'ava'
import hasWhitespace from './'

const whitespaceStrings = [
  ' ',
  'foo ',
  '\t',
  '\n',
  '\r',
  'foo\rbar',
  ' foo'
]

const nonWhitespaceStrings = [
  'foo',
  'bar)(*)()',
  'abcdefghijklmnopqrstuvwxyz',
  '0123456789',
  '{}',
  '-',
  ''
]

test('returns true when there is whitespace', t => {
  t.plan(whitespaceStrings.length)

  whitespaceStrings.forEach(function(str) {
    t.true(hasWhitespace(str))
  })
})

test('returns false when there is no whitespace', t => {
  t.plan(nonWhitespaceStrings.length)

  nonWhitespaceStrings.forEach(function(str) {
    t.false(hasWhitespace(str))
  })
})
