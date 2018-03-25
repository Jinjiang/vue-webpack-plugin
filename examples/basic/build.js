const webpack = require('webpack')
const VueWebpackPlugin = require('../../')

webpack({
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'dist.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [new VueWebpackPlugin()]
}, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err)
  } else {
    console.log('done')
  }
})
