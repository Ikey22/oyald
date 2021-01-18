import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LandingPage from '@/views/LandingPage.vue';

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
    alias: '/home-page',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    alias: '/about-page',
    name: 'AboutPage',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch: true */ '@/views/AboutPage.vue')
  },
  {
    path: '/initiatives',
    alias: '/initiatives-page',
    name: 'InitiativesPage',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch: true */ '@/views/InitiativesPage.vue')
  },
  {
    path: '/membership',
    alias: '/join-oyald',
    name: 'JoinOyald',
    component: () => import(/* webpackChunkName: "join-oyald", webpackPrefetch: true */ '@/views/JoinOyald.vue')
  },
  {
    path: "/team",
    alias: "/our-team",
    name: "OurTeam",
    component: () => import(/* webpackChunkName: "our-team", webpackPrefetch: true */ '@/views/OurTeam.vue')
  },
  {
    path: "/contact",
    alias: "/contact-us",
    name: "ContactUs",
    component: () => import(/* webpakChunkName: "contact-us", webpackPrefetch: true */ '@/views/ContactUs.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
