import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAdsense from 'vue-adsense'

// Google Adsense 用
Vue.component('adsense', VueAdsense)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
