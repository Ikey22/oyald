import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: createApp => createApp(App)
}).$mount('#app');
