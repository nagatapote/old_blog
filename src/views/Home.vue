<template>
<div id="home">
        <p style="white-space:pre-wrap; word-wrap:break-word;">{{ message }}</p>
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
