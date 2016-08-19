const test = require('ava')
const ElmCssCompiler = require('../index.js')

const elmCssCompiler = new ElmCssCompiler()

test
  ( 'ElmCssCompiler should be an object'
  , t =>
      t.true(typeof elmCssCompiler === 'object')
  )

test
  ( 'ElmCssCompiler should have function'
  , t =>
    t.true(typeof elmCssCompiler.compile === 'function')
  )
