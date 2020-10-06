<template>
  <div>
    <v-row id="md">
      <v-col>
        <vue-markdown :source="source"></vue-markdown>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import VueMarkdown from 'vue-markdown'
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

<style>

h1 {
    padding: 0.3em;
    color: #333;
    background: #dae5f3;
    border-bottom: solid 3px #455586;
}

code {
  display: inline-block;
  padding: 0.1em 0.25em; /* 文字周りの余白 */
  color: #444; /* 文字色 */
  background-color: #e7edf3; /* 背景色 */
  border-radius: 3px; /* 角丸 */
  border: solid 1px #d6dde4; /* 枠線 */
}

</style>
