# vue.jsのSPAサイトで表示速度の改善

## 前提
vue.js 2.9.6

vue cli 2.6.12

vue-router

node  v12.18.4

## 問題
ブログの読み込み速度が遅い

Build時のデータ量が約2.0MBもある(Gzip前)

## 結論
以下の画像のように改善された。(Lighthouse)

Build時のデータ量も約300KBまで減らすことができた。(Gzip前)

もちろん体感速度も向上している。

<img src="./img/article014/Lighthouse.png" decoding="async">

## やったこと
**・Lighthouseを導入**

**・CSSフレームワークをやめた(Vuetify)**

**・Dynamic importに変えた**

**・ライブラリで必要なものだけimportした**

## Lighthouseを導入
Lighthouseとは、chromeのアドオンです。

パフォーマンスやSEO等をどうやったら改善できるのかまで教えてくれる非常に便利なツールです。

以下で追加できます。

<a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ja" target="_blank">https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ja</a>

PageSpeedInsightsという以下のWEBサイトでも代用可能です。

<a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">https://developers.google.com/speed/pagespeed/insights/</a>

### CSSフレームワークをやめた(Vuetify)
非常に簡単にデザインを整えられるVuetifyを使っていましたが、やめました。

webフォントや大量のCSS読み込みは、Webページ速度低下の原因です。

### Dynamic importに変えた
importを以下のように変えました。

```javascript
component: () => import('../views/Home.vue')
```

**router/index.js(参考)**

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: 'pote\'s blog' }
  },
  {
    path: '/Article_1',
    name: 'Article1',
    component: () => import('../views/Article_1.vue'),
    meta: { title: 'pote\'s blog | Article' }
  },

  〜略〜
  ```

### ライブラリで必要なものだけimportした
ライブラリをnpmやyarnでインストールし、README.mdの通りにimportしていました。

しかし、それだと使用していないJSやCSSも読み込むことになります。

node_moduleの中身を確認し、必要な部分だけimportするようにしました。

例えば、highlight.jsは以下のように全てimportしていました。

```javascript
import Hljs from 'highlight.js'
```

これを以下のように、最低限必要なjsのみimportしました。

コードは長くなりますが、パフォーマンスは向上します。

**Markdown.vue**

```javascript
import Hljs from 'highlight.js/lib/core.js'
import javascript from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml.js'
import css from 'highlight.js/lib/languages/css.js'

Hljs.registerLanguage('javascript', javascript)
Hljs.registerLanguage('html', html)
Hljs.registerLanguage('css', css)

const Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}
```

以上
