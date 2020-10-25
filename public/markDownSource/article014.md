# vue.js の SPA サイトで表示速度の改善

## 前提

vue.js v2.6.12

vue cli v4.5.6

vue-router

node v12.18.4

## 問題

ブログの読み込み速度が遅い

Build 時のデータ量が約 2.0MB もある(Gzip 前)

## 結論

以下の画像のように改善された。(Lighthouse)

Build 時のデータ量も約 300KB まで減らすことができた。(Gzip 前)

もちろん体感速度も向上している。

<img src="./img/article014/Lighthouse.png" decoding="async">

## やったこと

**・Lighthouse を導入**

**・CSS フレームワークをやめた(Vuetify)**

**・Dynamic import に変えた**

**・ライブラリで必要なものだけ import した**

## Lighthouse を導入

Lighthouse とは、chrome のアドオンです。

パフォーマンスや SEO 等をどうやったら改善できるのかまで教えてくれる非常に便利なツールです。

以下で追加できます。

<a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ja" target="_blank">https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ja</a>

PageSpeedInsights という以下の WEB サイトでも代用可能です。

<a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">https://developers.google.com/speed/pagespeed/insights/</a>

### CSS フレームワークをやめた(Vuetify)

非常に簡単にデザインを整えられる Vuetify を使っていましたが、やめました。

web フォントや大量の CSS 読み込みは、Web ページ速度低下の原因です。

### Dynamic import に変えた

import を以下のように変えました。

```javascript
component: () => import("../views/Home.vue");
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

### ライブラリで必要なものだけ import した

ライブラリを npm や yarn でインストールし、README.md の通りに import していました。

しかし、それだと使用していない JS や CSS も読み込むことになります。

node_module の中身を確認し、必要な部分だけ import するようにしました。

例えば、highlight.js は以下のように全て import していました。

```javascript
import Hljs from "highlight.js";
```

これを以下のように、最低限必要な js のみ import しました。

コードは長くなりますが、パフォーマンスは向上します。

**Markdown.vue**

```javascript
import Hljs from "highlight.js/lib/core.js";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml.js";
import css from "highlight.js/lib/languages/css.js";

Hljs.registerLanguage("javascript", javascript);
Hljs.registerLanguage("html", html);
Hljs.registerLanguage("css", css);

const Highlight = {};
Highlight.install = function(Vue, options) {
  Vue.directive("highlight", function(el) {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      Hljs.highlightBlock(block);
    });
  });
};
```

以上
