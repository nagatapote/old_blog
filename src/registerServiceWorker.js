import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
// キャッシュするリソース(css、jsがあれば個別で追加)
var resourcesToCache = [
  '/'
]

// キャッシュバージョン
var CACHE_VERSION = 'ca-v1'
// キャッシュに追加
self.addEventListener('install', function (event) {
  console.log('Service Worker Install ')
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(function (cache) {
        console.log('cache.addAll')
        cache.addAll(resourcesToCache)
      })
  )
})

// キャッシュ表示
var CACHE_DISP_VERSION = 'ca-d-v1'
self.addEventListener('fetch', function (event) {
  console.log('Service Worker fetch')
  event.respondWith(
    // キャッシュが存在するかチェック
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response
        } else {
          // キャッシュがない場合キャッシュに入れる
          return fetch(event.request)
            .then(function (res) {
              return caches.open(CACHE_DISP_VERSION)
                .then(function (cache) {
                  console.log('cache put')
                  cache.put(event.request.url, res.clone())
                  return res
                })
            })
            .catch(function () {
              // エラーが発生しても何もしない
            })
        }
      })
  )
})
