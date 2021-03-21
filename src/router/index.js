import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SecondPage from '../views/SecondPage.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },


  {
    path: '/secondPage',
    name: 'SecondPage',
    component: SecondPage

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
