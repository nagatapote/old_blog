<template>
<div id='Markdown'>
    <mavon-editor language='ja' v-model='value'/>
</div>
</template>

<script>
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

export default {
  name: 'Markdown',
  data () {
    return { value: '' }
  }
}
</script>
