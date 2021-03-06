var test = require('tape')
var utils = require('../lib/utils')

test('usage', function (t) {
  var got = utils.usage()
  t.true(got.match(/usage/), 'returns some instructions')
  t.true(got.length > 50, 'lots of instructions')
  t.end()
})

test('version', function (t) {
  var got = utils.version()
  t.true(got.match(/^\d+\.\d+\.\d+$/), 'finds basic semver in package.json')
  t.end()
})
