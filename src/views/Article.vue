<template>
  <div id="md">
    <vue-markdown :source="source"></vue-markdown>
  </div>
</template>

<script>
import hljs from 'highlightjs'
import VueMarkdown from 'vue-markdown'
import 'highlightjs/styles/github-gist.css'
import '../assets/article.css'

export default {
  components: {
    VueMarkdown
  },
  data () {
    return { source: '' }
  },
  created: function () {
    VueMarkdown.setOptions({
      // code要素にdefaultで付くlangage-を削除
      langPrefix: '',
      // highlightjsを使用したハイライト処理を追加
      highlight: function (code, lang) {
        return hljs.highlightAuto(code, [lang]).value
      }
    })
  },
  mounted: function () {
    /* publicのフォルダに置いたmdファイルを取得する
      public配下はbuildするとroot直下として扱われる
      assetsフォルダの下に置くと読み込まれないので注意 */
    this.$axios
      .get(`./markDownSource/${this.$route.params.id}.md`)
      .then(response => (this.source = response.data))
  }
}
</script>
