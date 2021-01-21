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

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(portalVue);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: createApp => createApp(App)
}).$mount('#app');
