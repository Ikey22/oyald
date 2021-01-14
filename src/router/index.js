import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    component: Home,
    children: [
      {
        path: '',
        alias: 'overview',
        name: 'Overview',
        component: () => import(`@/views/Home/Auth/subviews/Overview.vue`)
      },
      {
        path: 'wallet',
        name: 'Wallet',
        component: () => import(`@/views/Home/Auth/subviews/Wallet.vue`)
      },
      {
        path: "Send",
        name: "Send",
        component: () => import('@/views/Home/Auth/subviews/Send.vue')
      },
      {
        path: "Receive",
        name: "receive",
        component: () => import('@/views/Home/Auth/subviews/Receive.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/login-signup",
    alias: "/signup-login",
    name: "LoginSignup",
    component: () => import('@/views/LoginSignup.vue')
  },
  {
    path: "/signup",
    redirect: "/login-signup"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('@/views/Login.vue')
  },
  {
    path: "/signup-individual",
    name: "SignupIndividual",
    component: () => import('@/views/SignupIndividual.vue')
  },
  {
    path: "/signup-business",
    name: "SignupBusiness",
    component: () => import('@/views/SignupBusiness.vue')
  },
  {
    path: "/confirm-otp",
    name: "SConfirmOtp",
    component: () => import('@/views/ConfirmOTP.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
