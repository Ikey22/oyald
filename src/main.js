import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import portalVue from 'portal-vue';
import 'popper.js';
window.jquery = window.jQuery = window.$ = require('jquery');
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './registerServiceWorker';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/analytics";
//import "firebase/auth";
import "firebase/firestore";
//import "firebase/storage";
import "firebase/messaging";
//import "firebase/functions";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiGfgkLFbNA3MnrhCVwmOzwZgmDrxGITQ",
  authDomain: "oyald-ojlad.firebaseapp.com",
  projectId: "oyald-ojlad",
  storageBucket: "oyald-ojlad.appspot.com",
  messagingSenderId: "171369652432",
  appId: "1:171369652432:web:4df8d43e7b16ddf2143ed5",
  measurementId: "G-X8Y2JR0N9R"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.__$firebase = firebase;

const firebaseVuePlugin = vueApp => {
  vueApp.$firebase = vueApp.prototype.$firebase = firebase;
};

firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(portalVue);
Vue.use(firebaseVuePlugin);

Vue.config.productionTip = false;

window.__$vm = new Vue({
  store,
  router,
  render: createApp => createApp(App)
}).$mount('#app');

console.log('Welcome to OYALD');
