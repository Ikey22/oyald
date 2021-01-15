import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    primaryColor: "#002200",
    appNameShort: "OYALD",
    appNameLong: "Organisation of Young African Leaders for Development",
    appNameLongFrench: "Organisation des jeunes leaders africains pour le développement",
    appbarTitle: "OYALD",
    language: 'en',
    englishStrings: {
      home: '',
      about: '',
      aboutUs: '',
      ourInitiatives: '',
      ourTeam: '',
      meetOurTeam: '',
      ourmembership: '',
      ourPartners: '',
      contactUs: '',
      writeUs: ''
    },
    frenchStrings: {
      home: '',
      about: '',
      aboutUs: '',
      ourInitiatives: '',
      ourTeam: '',
      meetOurTeam: '',
      ourmembership: '',
      ourPartners: '',
      contactUs: '',
      writeUs: ''
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
