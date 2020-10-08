module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}

chainWebpack: (config) => {
  config.plugins.delete("prefetch")
}

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'pote\'s blog',
    }
  }
}
