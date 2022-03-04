import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home', // 首页
    component: Home
  },
  {
    path: '/login',
    name: 'Login', // 产品页
    component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue')
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
    // this generates a separate chunk (sign.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "sign" */ '@/views/sign/index.vue')
  },
  {
    path: '/watcom',
    name: 'Watcom', // watch、computed
    // route level code-splitting
    // this generates a separate chunk (watcom.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "watcom" */ '@/views/watcom/index.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex', // watch、computed
    // route level code-splitting
    // this generates a separate chunk (vuex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "vuex" */ '@/views/vuex/index.vue')
  },
  {
    path: '/dcomponents',
    name: 'Dcomponents', // watch、computed
    // route level code-splitting
    // this generates a separate chunk (dcomponents.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dcomponents" */ '@/views/dcomponents/index.vue')
  },
  {
    path: '/refs',
    name: 'Refs', // watch、computed
    // route level code-splitting
    // this generates a separate chunk (refs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "refs" */ '@/views/refs/index.vue')
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

/**
 * 全局前置守卫
 */
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach-to: ', to) // to: 即将要进入的目标
//   console.log('beforeEach-from: ', from) // from: 当前导航正要离开的路由

//   return true // 返回 false 以取消导航
// })

/**
 * 全局前置守卫
 */
router.beforeEach((to, from, next) => {
  console.log('beforeEach-to: ', to) // to: 即将要进入的目标
  console.log('beforeEach-from: ', from) // from: 当前导航正要离开的路由

  let token = 'cloud'
  if (to.name !== 'Login' && !token) next({ path: '/login' })
  else next()
})

export default router
