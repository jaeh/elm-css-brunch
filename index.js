const path = require('path');
const childProcess = require('child_process')

const cwd = process.cwd();

class ElmCssCompiler {
  constructor(brunchConfig = {plugins: {}}) {
    const pluginConfig = brunchConfig.plugins.elmCssBrunch || {}

    this.config = {}

    Object.keys(ElmCssCompiler.defaultConfig).forEach(
      (key) =>
        this.config[key] = pluginConfig[key] || ElmCssCompiler.defaultConfig[key]
    )

    this.config.command =
      [ path.join(process.cwd(), 'node_modules', '.bin', 'elm-css')
      , `--root ${this.config.root}`
      , `--output ${this.config.output}`
      , `${this.config.sourcePath}`
      ].join(' ')

    console.log(`ElmCss compile: ${this.config.sourcePath} in ${this.config.root} to ${this.config.output}`)
  }

  compile(file) {
    // const { root, sourcePath, output, module, port } = this.config;
    const { root, command } = this.config;

    let compiled

    // TODO: promisify and use require('elm-css')?
    try {
      compiled = childProcess.execSync(
        command
      , { cwd: root }
      )
    }
    catch (e) {
      return Promise.reject(e)
    }

    return Promise.resolve(compiled)
  }
}

ElmCssCompiler.prototype.brunchPlugin = true
ElmCssCompiler.prototype.type = 'stylesheet'
ElmCssCompiler.prototype.extension = 'elm'

ElmCssCompiler.defaultConfig =
  { root: `${cwd}/web/elm`
  , output: `${cwd}/web/static/css`
  , sourcePath: 'src/Stylesheets.elm'
  , port: 'files'
  , module: 'Stylesheets'
  }


module.exports = ElmCssCompiler
