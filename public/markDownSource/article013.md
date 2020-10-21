# vue routerの動的ルートマッチングで遷移しない問題

## 前提
vue.js v2.6.12

vue cli v4.5.6

node  v12.18.4

## 問題
同コンポーネント内でURLが変わっても遷移しない。

Markdown.vueでMarkdownファイルをURLごとに動的に取得しているが、同コンポーネント内での遷移(例：article1→article2)でURLが変わっているのに遷移できない。

## 解決方法
$routeをwatchで監視する。

```javascript
watch:{ 
    $route()
    /* ページ遷移時に検知したい処理を記述 */
    }
}
```

**Markdown.vue**

```javascript
export default {
  el: '#md',
  components: {
    VueMarkdown
  },
  data () {
    return {
      source: ''
    }
  },
  created () {
    this.$axios
      .get(`./markDownSource/${this.$route.params.id}.md`)
      .then(response => (this.source = response.data))
  },
  /* 以下を追記した　*/
  watch: {
    $route () {
      this.$axios
        .get(`./markDownSource/${this.$route.params.id}.md`)
        .then(response => (this.source = response.data))
    }
  }
}
```

以上
