import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Ads from 'vue-google-adsense'
import VueAnalytics from 'vue-analytics'
import axios from 'axios'
import './registerServiceWorker.js'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* アドセンスの使用宣言 */
Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

Vue.use(VueAnalytics, {
  id: 'UA-137236873-1',
  router
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
