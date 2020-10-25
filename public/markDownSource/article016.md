# vue.js で作成した SPA サイトに googleAdsense と googleAnalytics を導入

## 前提

vue.js v2.6.12

vue cli v4.5.6

node v12.18.4

## 目的

ブログに広告を設置してみたかった(googleAdsense)

ブログに訪れる人数を知りたかった(googleAnalytics)

## やったこと

**・vue-google-adsense を導入**

**・google-analytics を導入**

### vue-google-adsense を導入

導入したいプロジェクトディレクトリ(例:vue/blog)に移動し、下記コマンドでインストールします。

```
$ npm install vue-script2 vue-google-adsense
```

main.js に以下を追記します。

```javascript
import Ads from "vue-google-adsense";

Vue.use(require("vue-script2"));
Vue.use(Ads.Adsense);
Vue.use(Ads.InArticleAdsense);
Vue.use(Ads.InFeedAdsense);
```

public/index.html の`</body>`の上に以下を貼り付けます。

googleAdsense に合格したら、「このコードを貼り付けてください。」と google よりメールが届いているはずです。

```javascript
<script
  data-ad-client="ca-pub-xxxxxxxxxxxx"
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
></script>
```

貼り付けたい vue ファイルの`<template>`内に以下を貼り付けましょう。

googleAsense のページで広告を作成すると以下のようなコードが発行されます。

```javascript
<Adsense
  data-ad-client="ca-pub-xxxxxxxxxxxx"
  data-ad-slot="xxxxxxxxxxx"
></Adsense>
```

ローカルサーバ(npm run serve 等)では広告が確認できません。

build&デプロイし、Internet 経由で確認することができます。

### google-analytics を導入

導入したいプロジェクトディレクトリ(例:vue/blog)に移動し、下記コマンドでインストールします。

```
$ npm install vue-analytics
```

main.js に以下を追記

```javascript
import VueAnalytics from "vue-analytics";

Vue.use(VueAnalytics, {
  id: "UA-xxxxxxx-x",
});
```

id は googleAnalytics のサイトで確認してください。

これで googleAnalytics のサイトに URL を登録したりすれば、完了です。

以上。
