# vue.js を PWA 化してオフラインでアクセスできるようにする方法

## 前提

vue.js v2.6.12

vue cli v4.5.6

node v12.18.4

## 目的

ブログをスマホのホーム画面に追加して、アプリのようにする

オフラインでもアクセスできるようにする

## やったこと

**・PWA プラグインのインストール**

**・必要なファイルの作成**

### PWA プラグインのインストール

以下のコマンドでインストール可能です。

```
$ yarn add @vue/cli-plugin-pwa
```

Workbox というライブラリもインストールされます。

これのおかげで、簡単に PWA 化が実装できるようです。

PreCache は最初からされるようです。

### 必要なファイルの作成

以下のコマンドでも作成可能ですが、手動で作成しました。

```
$ vue add pwa
```

必要なファイルは以下の 4 つです。

**・public/\*.png**

**・public/manifest.json**

**・public/robots.txt**

**・src/registerServiceWorker.js**

追記が必要なファイルは以下の２つです。

**・src/main.js**

**・vue.config.js**

#### public/\*.png

端末に合わせたアイコンです。

私の場合、favicon の画像を png 拡張子に変えました。

#### public/manifest.json

PWA としてホーム画面に追加するために必要なファイルです。

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

ServiceWorker 登録ファイル。

**registerServiceWorker.js**

```javascript
import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
```

#### src/main.js

以下を追記。

**main.js**

```javascript
import "./registerServiceWorker.js";
```

#### vue.config.js

以下を追記。

これだけで Runtime Cache も実装されるようです。

**vue.config.js**

```javascript
pwa: {
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /https:\/\/nagatapote.work\/*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "pote-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 300,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ];
  }
}
```

上記を実施すれば、PWA 化＆オフライン対応が完了です。

※google adsense の広告を配置したら、なぜかオフラインでのアクセスができなくなりました。

以上
