import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Highlight from 'vue-markdown-highlight'

Vue.prototype.$axios = axios
Vue.use(Highlight)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
