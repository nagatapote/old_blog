import Vue from 'vue'
import VueRouter from 'vue-router'
/** import Home from '../views/Home.vue' **/

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Article',
    component: () => import('../views/Article.vue'),
    meta: { title: 'pote\'s blog' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { title: 'pote\'s blog | Profile' }
  },
  {
    path: '/Article/',
    name: 'Article',
    component: () => import('../views/Article.vue'),
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
