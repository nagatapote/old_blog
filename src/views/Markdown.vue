<template>
  <div id="md" v-highlight>
    <vue-markdown :source="source"></vue-markdown>
  </div>
</template>

<script rel="preload">
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

<style rel="preload">
#md img {
    border: 5px solid green;
    max-width: 100%;
}

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
