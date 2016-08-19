# elm-css-brunch
[Brunch](http://brunch.io) plugin to compile ElmCss code

# not stable yet

[based on elm-css](https://github.com/rtfeldman/elm-css/)

it is working nicely in a phoenix/elm setup i am playing around with,
eagerly converting multiple Style.elm files into css files
that then get picked up by the CssBrunch plugin


# Install elm-brunch
```
npm install --save-dev jaeh/elm-css-brunch
```

# Brunch defaultConfig:
```js
const cwd = process.cwd()

// note that this object's keys are the same as the
// arguments the elm-css cli expects ;)
plugins: {
  elmCssBrunch: {
    root: `${cwd}/web/elm`
  , output: `${cwd}/web/static/css`
  , sourcePath: 'src/Stylesheets.elm'
  , port: 'files'
  , module: 'Stylesheets'
  }
}
```

# Tips
Configure elm-css-brunch in brunch-config.js

``` js

  // relevant portions of the config that make this plugin work
  module.exports = {
    files: {
      stylesheets: {
        joinTo: 'css/app.css',
      },
    },

    paths: {
      watched: [
        // needed for elm-css
        'web/elm/src/Stylesheets.elm',
        'web/elm/src/Stylesheets',
      ],
    },

    plugins: {
      elmCssBrunch: {
        root: process.cwd() + '/web/elm',
        output: process.cwd() + '/web/static/css',
      },
    },
  }
```
TODO:
meaningful tests,
check if we can remove the watched paths,
