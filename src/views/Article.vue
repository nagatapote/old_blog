<template>
  <div id="md">
        <vue-markdown :source="source" v-highlight>
        </vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import '../assets/article.css'

export default {
  components: {
    VueMarkdown
  },
  data () {
    return { source: '' }
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
