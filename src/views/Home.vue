<template>
    <div id="home" v-cloak>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
  el: '#home',
  data () {
    return {
      message: 'hello'
    }
  }
}
</script>
<style>
#home{
    text-align: center;
}

</style>
