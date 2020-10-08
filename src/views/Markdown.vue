<template>
  <div id="md" v-highlight v-cloak>
    <vue-markdown :source="source"></vue-markdown>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import axios from 'axios'
import 'highlight.js/styles/default.css'
import Highlight from 'vue-markdown-highlight'

Vue.use(Highlight)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

export default {
  el: 'md',
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

<style>
#md h1 {
    padding: 0.3em;
    color: #333;
    background: #dae5f3;
    border-bottom: solid 3px #455586;
}

.v-application code {
    background: #25292f;
    color: #fff;
}

pre {
    margin: 1em 0; /* ブロック前後の余白 */
    padding: 1em; /* ブロック内の余白 */
    border-radius: 5px; /* 角丸 */
    background: #25292f; /* 背景色 */
    color: #fff;
  }
</style>
