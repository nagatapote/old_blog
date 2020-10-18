module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'pote\'s blog',
    }
  },
  outputDir: 'docs',
  publicPath: '/',
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /https:\/\/nagatapote.work/,
          handler: 'networkFirst',
          options: {
            cacheName: 'pote-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 300
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
}
