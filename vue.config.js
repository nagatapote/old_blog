const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'pote\'s blog',
    }
  },
  configureWebpack: config => {
    config.plugins.push(
      new GenerateSW({
        cacheId: 'calc-tax-insurance-v3',
        runtimeCaching: [{
          urlPattern: /^https:\/\/nagatapote\.work/,
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'api',
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 60 * 60 * 24 * 30
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      })
    )
  }
}
