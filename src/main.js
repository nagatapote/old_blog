import Vue from 'vue'
import App from './App.vue'
import Ads from 'vue-google-adsense'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import Highlight from 'vue-markdown-highlight'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue'),
    meta: { title: 'pote\'s blog' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue'),
    meta: { title: 'pote\'s blog | Profile' }
  },
  {
    path: '/Article_1',
    name: 'Article1',
    component: () => import('./views/Article_1.vue'),
    meta: { title: 'pote\'s blog | Article' }
  },
  {
    path: '/Article_2',
    name: 'Article_2',
    component: () => import('./views/Article_2.vue'),
    meta: { title: 'pote\'s blog | Article' }
  },
  {
    path: '/:id',
    component: () => import('./views/Markdown.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

Vue.prototype.$axios = axios
Vue.use(Highlight)

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
