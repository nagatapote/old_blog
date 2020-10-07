import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
/** import Home from '../views/Home.vue' **/
import About from '../views/About.vue'
import Article from '../views/Article.vue'
import Markdown from '../views/Markdown.vue'
import MarkdownSample from '../views/MarkdownSample.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  {
    path: '/',
    name: 'Article',
    component: Article,
    meta: { title: 'pote\'s blog' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'pote\'s blog | Profile' }
  },
  {
    path: '/Article',
    name: 'Article',
    component: Article,
    meta: { title: 'pote\'s blog | Article' }
  },
  {
    path: '/:id',
    component: Markdown
  },
  {
    path: '/MarkdownSample',
    name: 'MarkdownSample',
    component: MarkdownSample
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

export default router
