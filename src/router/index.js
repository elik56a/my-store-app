import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: () => import('../pages/HomePage')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
