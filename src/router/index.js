import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LandingPage from '@/views/LandingPage.vue';
import NotFound404 from '@/views/NotFound404.vue';
import PreLoader from '@/components/Preloader.vue';
import NetworkError from '@/components/NetworkError.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    alias: '/landing-page',
    name: 'LandingPage',
    component: LandingPage
  },

  {
    path: '/home',
    alias: '/about-africa',
    name: 'HomePage',
    component: HomePage
  },

  {
    path: '/home-page',
    alias: '/about-page',
    name: 'AboutPage',
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader,
      error: NetworkError,
      component: import(/* webpackChunkName: "about", webpackPrefetch: true */ '@/views/AboutPage.vue')
    })
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
      component: import(/* webpackChunkName: "about", webpackPrefetch: true */ '@/views/InitiativesPage.vue')
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
      component: import(/* webpackChunkName: "membership" */ '@/views/NewMember.vue')
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
      component: import(/* webpackChunkName: "membership" */ '@/views/NewPartner.vue')
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
      component: import(/* webpackChunkName: "our-team", webpackPrefetch: true */ '@/views/Generalsecretariat.vue')
    })
  },

  {
    path: "/country-secretaries",
    name: "CountrySecretaries",
    component: () => ({
      timeout: 60000,
      delay: 1,
      loading: PreLoader, 
      error: NetworkError,
      component: import(/* webpackChunkName: "our-team", webpackPrefetch: true */ '@/views/CountrySecretaries.vue')
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
      component: import(/* webpackChunkName: "our-team", webpackPrefetch: true */ '@/views/Partners.vue')
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
      component: import(/* webpakChunkName: "contact-us", webpackPrefetch: true */ '@/views/ContactUs.vue')
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
      component: import(/*  webpackChunkName: "admin", webpackPrefetch: true */ '@/views/Admin.vue')
    })
  },

  {
    path: "*",
    name: "NotFound404",
    component: NotFound404
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
});

window.__$router = router;

export default router;
