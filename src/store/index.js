import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    primaryColor: "#002200",
    appNameShort: "OYALD",
    appNameLong: "Organisation of Young African Leaders for Development",
    appNameLongFrench: "",
    appbarTitle: "OYALD",
    language: 'en',
    englishStrings: {},
    frenchStrings: {}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
