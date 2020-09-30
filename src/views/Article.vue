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
