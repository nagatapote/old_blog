const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'pote\'s blog',
    }
  },
  pwa: {
    name: 'pote\'s blog',
    themeColor: '#5e21f3',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'dev/sw.js'
      // ...other Workbox options...
    }
  },
  configureWebpack: config => {
    config.plugins.push(
      new GenerateSW({
        cacheId: 'calc-tax-insurance-v3',
        skipWaiting: false,
        clientsClaim: false
      })
    )
  }
}
