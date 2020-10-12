import Vue from 'vue'
import App from './App.vue'
import Ads from 'vue-google-adsense'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import Highlight from 'vue-markdown-highlight'

Vue.use(Highlight)

Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* アドセンスの使用宣言 */
Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
