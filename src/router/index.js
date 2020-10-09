import Vue from 'vue'
import VueRouter from 'vue-router'
/** import Home from '../views/Home.vue' **/

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Article1',
    component: () => import('../views/Article1.vue'),
    meta: { title: 'pote\'s blog' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { title: 'pote\'s blog | Profile' }
  },
  {
    path: '/Article1',
    name: 'Article1',
    component: () => import('../views/Article1.vue'),
    meta: { title: 'pote\'s blog | Article' }
  },
  {
    path: '/Article2',
    name: 'Article2',
    component: () => import('../views/Article2.vue'),
    meta: { title: 'pote\'s blog | Article' }
  },
  {
    path: '/:id',
    component: () => import('../views/Markdown.vue')
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
