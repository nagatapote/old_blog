# vue.jsをPWA化してオフラインでアクセスできるようにする方法

## 前提
vue.js 2.9.6

vue cli 2.6.12

node  v12.18.4

## 目的
ブログをスマホのホーム画面に追加して、アプリのようにする

オフラインでもアクセスできるようにする

## やったこと
**・PWAプラグインのインストール**

**・必要なファイルの作成**

### PWAプラグインのインストール
以下のコマンドでインストール可能です。

```
$ yarn add @vue/cli-plugin-pwa
```

Workboxというライブラリもインストールされます。

これのおかげで、簡単にPWA化が実装できるようです。

PreCacheは最初からされるようです。

### 必要なファイルの作成
なぜか以下のコマンドが使えなかったため、手動で作成しました。

```
$ vue add pwa
```

必要なファイルは以下の4つです。

**・public/*.png**

**・public/manifest.json**

**・public/robots.txt**

**・src/registerServiceWorker.js**

追記が必要なファイルは以下の２つです。

**・src/main.js**

**・vue.config.js**

#### public/*.png
端末に合わせたアイコンです。

私の場合、faviconの画像をpng拡張子に変えました。

#### public/manifest.json
PWAとしてホーム画面に追加するために必要なファイルです。

**manifest.json(参考)**

```
{
  "name": "pote's blog",
  "short_name": "pote's blog",
  "theme_color": "#5e21f3",
  "background_color": "#f3a521",
  "display": "standalone",
  "scope": "/",
  "start_url": "/",
  "icons": [
    {
    "src": "favicon.png",
    "sizes": "72x72",
    "type": "image/png"
    }
  ],
  "splash_pages": null
}
```

#### public/robots.txt

**robots.txt**

```
User-agent: *
Disallow:
```

#### src/registerServiceWorker.js
ServiceWorker登録ファイル。

**registerServiceWorker.js**

```javascript
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
```

#### src/main.js
以下を追記。

**main.js**

```javascript
import './registerServiceWorker.js'
```

#### vue.config.js
以下を追記。

これだけでRuntime Cacheも実装されるようです。

**vue.config.js**

```javascript
pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /https:\/\/nagatapote.work\/*/,
          handler: 'NetworkFirst',
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
```

上記を実施すれば、PWA化＆オフライン対応が完了です。

※google adsenseの広告を配置したら、なぜかオフラインでのアクセスができなくなりました。

以上
