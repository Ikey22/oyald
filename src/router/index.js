import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutAfrica from '@/views/AboutAfrica.vue';
import LandingPage from '@/views/LandingPage.vue';
import NotFound404 from '@/views/NotFound404.vue';
import PreLoader from '@/components/Preloader.vue';
import NetworkError from '@/components/NetworkError.vue';
// import { useTitle } from '@vueuse/core';

import store from '../store';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    alias: '/landing-page',
    name: 'LandingPage',
    component: LandingPage
  },



  {
    path: '/about-africa',
    name: 'AboutAfrica',
    component: AboutAfrica
  },



  {
    path: '/home',
    redirect: '/home-page'
  },
  {
    path: '/home.html',
    alias: '/home-page.html',
    redirect: '/home-page'
  },
  {
    path: '/home-page',
    alias: '/about-us',
    name: 'HomePage',
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import( /* webpackChunkName: "about", webpackPrefetch: true */ '@/views/HomePage.vue')
    })
  },



  {
    path: '/initiatives.html',
    alias: '/our-initiatives.html',
    redirect: '/initiatives'
  },
  {
    path: '/ourinitiative',
    alias: '/ourinitiatives.html',
    redirect: '/initiatives'
  },
  {
    path: '/initiatives',
    alias: '/initiatives-page',
    name: 'InitiativesPage',
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import( /* webpackChunkName: "about", webpackPrefetch: true */ '@/views/InitiativesPage.vue')
    })
  },



  {
    path: '/membership',
    alias: '/join-oyald',
    name: 'NewMember',
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import( /* webpackChunkName: "membership" */ '@/views/NewMember.vue')
    })
  },



  {
    path: '/partnership',
    name: 'NewPartner',
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import( /* webpackChunkName: "membership" */ '@/views/NewPartner.vue')
    })
  },



  {
    path: "/general-secretariat",
    name: "GeneralSecretariat",
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import( /* webpackChunkName: "our-team", webpackPrefetch: true */ '@/views/Generalsecretariat.vue')
    })
  },



  {
    path: "/national-coordinators",
    alias: "/national-coordinators.html",
    redirect: "/country-secretaries"
  },

  {
    path: "/country-secretaries",
    alias: "/country-secretaries",
    name: "CountrySecretaries",
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import( /* webpackChunkName: "our-team", webpackPrefetch: true */ '@/views/CountrySecretaries.vue')
    })
  },



  {
    path: "/partners",
    name: "Partners",
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import( /* webpackChunkName: "our-team", webpackPrefetch: true */ '@/views/Partners.vue')
    })
  },



  {
    path: "/contact",
    alias: "/contact-us",
    name: "ContactUs",
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import( /* webpakChunkName: "contact-us", webpackPrefetch: true */ '@/views/ContactUs.vue')
    })
  },



  {
    path: "/__admin",
    name: "Admin",
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import( /*  webpackChunkName: "admin", webpackPrefetch: true */ '@/views/Admin.vue')
    })
  },



  {
    path: "*",
    name: "NotFound404",
    component: NotFound404
  },



  {
    path: "/hover-calender",
    name: "HoverCalender",
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import( /*  webpackChunkName: "admin", webpackPrefetch: true */ '@/views/HoverCalendar.vue')
    })
  },



  {
    path: "/auth-handler",
    name: "AuthHandler",
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import( /*  webpackChunkName: "AuthHandler" */ '@/views/AuthHandler.vue')
    })
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

router.beforeEach((to, from, next) => {
  if (!to.query.lang) {
    to.query.lang = from.query.lang || store.state.language
  }
  console.clear();
  return next();
});

router.afterEach((to) => {
  if (to.query.lang) store.commit('setLanguage', to.query.lang);
  return console.clear();
});

window.__$router = router;

export default router;