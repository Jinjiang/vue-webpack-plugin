function VueWebpackPlugin () {}

VueWebpackPlugin.prototype.apply = compiler => {
  compiler.plugin('done', compilation => {
    console.log('This is an plugin!')
  })
}

module.exports = VueWebpackPlugin
