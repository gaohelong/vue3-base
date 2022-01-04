import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home', // 首页
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Product', // 产品页
    // route level code-splitting
    // this generates a separate chunk (product.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '@/views/product/index.vue')
  },
  {
    path: '/sign/:id',
    name: 'Sign', // 签字
    // route level code-splitting
    // this generates a separate chunk (product.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '@/views/sign/index.vue')
  },
  {
    path: '/watcom',
    name: 'Watcom', // watch、computed
    // route level code-splitting
    // this generates a separate chunk (product.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '@/views/watcom/index.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex', // watch、computed
    // route level code-splitting
    // this generates a separate chunk (product.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '@/views/vuex/index.vue')
  },
  {
    path: '/404',
    name: '404', // 404
    component: () => import(/* webpackChunkName: "404" */ '@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/:pathMatch(.*)*', // https://next.router.vuejs.org/guide/migration/#removal-of-the-fallback-option
    redirect: '/404', // 不存在的url
    hidden: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
