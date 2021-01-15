import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LandingPage from '@/views/LandingPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/landing-page',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/home',
    alias: '/home-page',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    alias: '/about-page',
    name: 'AboutPage',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
