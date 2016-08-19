const test = require('ava')
const ElmCssCompiler = require('../index.js')

const elmCssCompiler = new ElmCssCompiler()
const defaultConfig = ElmCssCompiler.defaultConfig

test
  ( 'ElmCssCompiler defaultConfig should equal constructor call without options'
  , t => {

    const defaultConfig = ElmCssCompiler.defaultConfig

    Object.keys(defaultConfig).forEach(
      (key) =>
        t.is(defaultConfig[key], elmCssCompiler.config[key])
    )
  }
)


test
  ( 'ElmCssCompiler all config values get set if passed'
  , t => {
    const defaultConfig = Object.keys(ElmCssCompiler.defaultConfig).map(
      key =>
        ElmCssCompiler.defaultConfig[key] + 'lazyvalue'
    )

    const pluginConfig = {
      plugins: {
        ElmCssBrunch: defaultConfig
      }
    }

    const customElmCssCompiler = new ElmCssCompiler(pluginConfig)

    Object.keys(defaultConfig).forEach(
      (key) => {
        t.is(pluginConfig[key], customElmCssCompiler.config[key])
        t.not(defaultConfig[key], customElmCssCompiler.config[key])
      }
    )
  }
)

