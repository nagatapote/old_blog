# Markdown ファイルを１つの vue ファイルから URL に応じて動的に読み込む

## 前提

vue.js v2.6.12

vue cli v4.5.6

node v12.18.4

vue-router

## 目的

Markdown ファイルを配置するだけで、１つの vue ファイルから URL ごとに動的に読み込むようにする。

Markdown ファイルを配置するごとに、vue ファイルを作成することをやめたかった。

## やったこと

**・vue-markdown のインストール**

**・axios のインストール**

**・\$route.params.id で URL にごとに読み込む**

### vue-markdown のインストール

以下のコマンドで vue-markdown をインストール

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

### axios のインストール

以下のコマンドでインストールします。

```
$ npm install axios
```

main.js に以下を記述することで使えるようになります。

```javascript
import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;
```

### \$route.params.id で URL にごとに読み込む

router/index.js を以下のように記述します。

```javascript
{
path: '/:id',
component: () => import('../views/Markdown.vue')
}
```

vue ファイルに\$route.params.id を記述します。

以下は完成形となります。

**Markdown.vue**

```html
<template>
  <div id="md">
    <vue-markdown :source="source"></vue-markdown>
  </div>
</template>

<script>
  import VueMarkdown from "vue-markdown";

  export default {
    el: "#md",
    components: {
      VueMarkdown,
    },
    data() {
      return { source: "" };
    },
    mounted: function() {
      /* publicフォルダに置いたmdファイルを取得する */
      this.$axios
        .get(`./markDownSource/${this.$route.params.id}.md`)
        .then((response) => (this.source = response.data));
    },
  };
</script>
```

public/markDownSource 配下に Markdown ファイルを配置しています。

以下のように、アクセスした URL と同じ名前の markdown ファイルを表示します。

/article1 にアクセスした場合に、public/markDownSource/article1.md を表示。

以上。
