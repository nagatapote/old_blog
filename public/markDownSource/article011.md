# vue-markdown-highlight でシンタックスハイライトを実装した

## 前提

vue.js v2.6.12

vue cli v4.5.6

node v12.18.4

## 目的

コードに色を付けて見やすくする。
(基本　 → 　背景：黒、文字色：白)

## やったこと

**・vue-markdown-highlight をインストール**

**・Markdown ファイル内に記述したコードを「```言語(javascript/html/etc...)」で囲む**

**・Vuetify の CSS を上書き**

### vue-markdown-highlight をインストール

まず、以下のコマンドで highlight.js をインストール

```
$ npm i highlight.js
```

その後、以下のコマンドで vue-markdown-highlight をインストール

```
$ npm i vue-markdown-highlight -D
```

main.js に以下を追記

css は、node_modules/highlight/styles に入っているので、好みの色を読み込みましょう。

このブログは、rainbow.css を使っています。

```javascript
import "highlight.js/styles/default.css";
import Highlight from "vue-markdown-highlight";
Vue.use(Highlight);
```

vue ファイルに、以下のように v-highlight を記述することで使用可能となる

```html
<template>
  <div id="md" v-highlight></div>
</template>

<script>
  export default {
    el: '#md',

  〜略〜
</script>
```

最初「el: '#md'」を入れなかったため、ハイライトが読み込まず、ハマりました。初歩的なミスでした。

### Markdown ファイル内に記述したコードを「\```言語(javascript/html/etc...)」で囲む　

以下のように囲むとシンタックスハイライトが適用され、色が変わります。(\は消してね。)

````
```javascript
<script>
import 'highlight.js/styles/default.css'
import Highlight from 'vue-markdown-highlight'
Vue.use(Highlight)
</script>
\```
````

````
```html
<style>
.v-application code {
    background: #25292f;
    color: #fff;
}

pre {
    margin: 1em 0;
    padding: 1em;
    border-radius: 5px;
    background: #25292f;
    color: #fff;
}
</style>
\```
````

### Vuetify の CSS を上書き

ここでかなりハマりました。

Vuetify を導入している場合、Vuetify の css が優先されるようです。

Markdown で「\```」は`<pre><code>`なのですが、vuetify の css で`<code>`が赤文字、赤マーカーになってしまいます。

以下のように、背景と文字色を上書きしました。

「.v-application」で Vuetify の css を指定できます。

```html
<style>
  .v-application code {
    background: #25292f;
    color: #fff;
  }

  pre {
    margin: 1em 0;
    padding: 1em;
    border-radius: 5px;
    background: #25292f;
    color: #fff;
  }
</style>
```

以上
