import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: 'pote\'s blog' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { title: 'pote\'s blog | Profile' }
  },
  {
    path: '/Article_1',
    name: 'Article1',
    component: () => import('../views/Article_1.vue'),
    meta: { title: 'pote\'s blog | Article' }
  },
  {
    path: '/Article_2',
    name: 'Article_2',
    component: () => import('../views/Article_2.vue'),
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
