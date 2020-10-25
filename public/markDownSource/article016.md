# vue.jsで作成したSPAサイトにgoogleAdsenseとgoogleAnalyticsを導入

## 前提
vue.js v2.6.12

vue cli v4.5.6

node  v12.18.4

## 目的
ブログに広告を設置してみたかった(googleAdsense)

ブログに訪れる人数を知りたかった(googleAnalytics)

## やったこと
**・vue-google-adsenseを導入**

**・google-analyticsを導入**

### vue-google-adsenseを導入
導入したいプロジェクトディレクトリ(例:vue/blog)に移動し、下記コマンドでインストールします。

```
$ npm install vue-script2 vue-google-adsense
```

main.jsに以下を追記します。

``` javascript
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)
```

public/index.htmlの`</body>`の上に以下を貼り付けます。

googleAdsenseに合格したら、「このコードを貼り付けてください。」とgoogleよりメールが届いているはずです。

```javascript
<script data-ad-client="ca-pub-xxxxxxxxxxxx" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
```

貼り付けたいvueファイルの`<template>`内に以下を貼り付けましょう。

googleAsenseのページで広告を作成すると以下のようなコードが発行されます。

```javascript
<Adsense data-ad-client="ca-pub-xxxxxxxxxxxx" data-ad-slot="xxxxxxxxxxx"></Adsense>
```

ローカルサーバ(npm run serve等)では広告が確認できません。

build&デプロイし、Internet経由で確認することができます。

### google-analyticsを導入
導入したいプロジェクトディレクトリ(例:vue/blog)に移動し、下記コマンドでインストールします。

```
$ npm install vue-analytics
```

main.jsに以下を追記

```javascript
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-xxxxxxx-x'
})
```

idはgoogleAnalyticsのサイトで確認してください。

これでgoogleAnalyticsのサイトにURLを登録したりすれば、完了です。

以上。
