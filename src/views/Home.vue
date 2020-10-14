<template>
<div id="home">
  <center>
  <h1>pote's blog</h1>
  <h2>〜技術ブログ〜</h2>
  <p style="white-space:pre-wrap; word-wrap:break-word;">{{ message }}</p>
  </center>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: `日々、やったことを記事に書いています。
主に、vue.jsを使ったフロントエンド開発です。`
    }
  }
}
</script>
