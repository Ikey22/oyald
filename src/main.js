import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import '@/assets/css/fontawesome.min.css'

Vue.use(VueMaterial)

Vue.material.router.linkActiveClass = 'primary-link'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
