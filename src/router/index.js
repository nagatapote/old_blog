import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Markdown from '../views/Markdown.vue'
import article1 from '../views/article/20200922.vue'
import article2 from '../views/article/20200924.vue'
import article3 from '../views/article/20200927.vue'
import article4 from '../views/article/20200927-01.vue'
import article5 from '../views/article/20200929.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Markdown',
    name: 'Markdown',
    component: Markdown
  },
  {
    path: '/article1',
    name: 'article1',
    component: article1
  },
  {
    path: '/article2',
    name: 'article2',
    component: article2
  },
  {
    path: '/article3',
    name: 'article3',
    component: article3
  },
  {
    path: '/article4',
    name: 'article4',
    component: article4
  },
  {
    path: '/article5',
    name: 'article5',
    component: article5
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
