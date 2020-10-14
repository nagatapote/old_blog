# vue-markdown-highlightでシンタックスハイライトを実装した

## 前提

vue.js

## 目的

コードに色を付けて見やすくする。
基本　→　背景：黒、文字色：白

## やったこと

**・vue-markdown-highlightをインストール**

**・Markdownファイル内に記述したコードを「```言語(javascript/html/etc...)」で囲む**

**・VuetifyのCSSを上書き**

### vue-markdown-highlightをインストール
　
まず、以下のコマンドでhighlight.jsをインストール

```
$ npm i highlight.js
```

その後、以下のコマンドでvue-markdown-highlightをインストール

```
$ npm i vue-markdown-highlight -D
```

main.jsに以下を追記

cssは、node_modules/highlight/stylesに入っているので、好みの色を読み込みましょう。

このブログは、rainbow.cssを使っています。

```javascript
import 'highlight.js/styles/default.css'
import Highlight from 'vue-markdown-highlight'
Vue.use(Highlight)
```

vueファイルに、以下のようにv-highlightを記述することで使用可能となる

```javascript
<template>
  <div id="md" v-highlight>
  </div>
</template>

<script>
export default {
  el: '#md',

〜略〜

</script>
```

最初「el: '#md'」を入れなかったため、ハイライトが読み込まず、ハマりました。初歩的なミスでした。

### Markdownファイル内に記述したコードを「\```言語(javascript/html/etc...)」で囲む　

以下のように囲むとシンタックスハイライトが適用され、色が変わります。(\は消してね。)

```
```javascript
<script>
import 'highlight.js/styles/default.css'
import Highlight from 'vue-markdown-highlight'
Vue.use(Highlight)
</script>
\```
```

```
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
```

### VuetifyのCSSを上書き

ここでかなりハマりました。

Vuetifyを導入している場合、Vuetifyのcssが優先されるようです。

Markdownで「\```」は`<pre><code>`なのですが、vuetifyのcssで`<code>`が赤文字、赤マーカーになってしまいます。

以下のように、背景と文字色を上書きしました。

「.v-application」でVuetifyのcssを指定できます。

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
