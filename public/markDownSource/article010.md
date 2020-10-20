# Markdownファイルを１つのvueファイルからURLに応じて動的に読み込む

## 前提
vue.js 2.9.6

vue cli 2.6.12

node  v12.18.4

vue-router

## 目的
Markdownファイルを配置するだけで、１つのvueファイルからURLごとに動的に読み込むようにする。

Markdownファイルを配置するごとに、vueファイルを作成することをやめたかった。
　
## やったこと
**・vue-markdownのインストール**

**・axiosのインストール**

**・$route.params.idでURLにごとに読み込む**

### vue-markdownのインストール
以下のコマンドでvue-markdownをインストール

```
$ npm install --save vue-markdown
```

以下のように記述することで使えるようになります。

```html
<template>
    <div>
    <vue-markdown></vue-markdown>
    </div>
</tamplate>

<script>
import VueMarkdown from 'vue-markdown'
</script>
```

### axiosのインストール

以下のコマンドでインストールします。

```
$ npm install axios
```

main.jsに以下を記述することで使えるようになります。

```javascript
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
```

### $route.params.idでURLにごとに読み込む

router/index.jsを以下のように記述します。


```javascript
{
path: '/:id',
component: () => import('../views/Markdown.vue')
}
```

vueファイルに$route.params.idを記述します。

以下は完成形となります。

**Markdown.vue**

```html
<template>
  <div id="md">
    <vue-markdown :source="source"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  el: '#md',
  components: {
    VueMarkdown
  },
  data () {
    return { source: '' }
  },
  mounted: function () {
    /* publicフォルダに置いたmdファイルを取得する */
    this.$axios
      .get(`./markDownSource/${this.$route.params.id}.md`)
      .then(response => (this.source = response.data))
  }

}
</script>
```

public/markDownSource配下にMarkdownファイルを配置しています。

以下のように、アクセスしたURLと同じ名前のmarkdownファイルを表示します。

/article1にアクセスした場合に、public/markDownSource/article1.mdを表示。

以上。
