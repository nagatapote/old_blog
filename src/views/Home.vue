<template>
<div id="home">
  <v-parallax
    dark
    src="../assets/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="mb-4">
          pote's blog
        </h1>
        <h4 class="subheading">
          〜技術ブログ〜
        </h4>
      </v-col>
        <p style="white-space:pre-wrap; word-wrap:break-word;">{{ message }}</p>
    </v-row>
  </v-parallax>
  </div>
</template>

<script rel="preload">
export default {
  data () {
    return {
      message: `日々、やったことを記事に書いています。
主に、vue.jsを使ったフロントエンド開発です。`
    }
  }
}
</script>
