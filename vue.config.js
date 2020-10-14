module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'pote\'s blog',
    }
  },
  chainWebpack: (config) => {

    config.plugins.delete('prefetch')
  
    config.plugin('preload').tap((options) => {
      options[0].include = 'allChunks'
      return options
    })
  }
}
