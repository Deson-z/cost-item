import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Index'
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
