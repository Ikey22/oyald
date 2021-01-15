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
      language: 'Language',
      inform: 'INFORM',
      inspire: 'INSPIRE',
      involve: 'INVOLVE',
      home: 'HOME',
      about: 'ABOUT',
      aboutUs: 'ABOUT OYALD',
      ourInitiatives: 'OUR INITIATIVES',
      ourTeam: 'OUR TEAM',
      meetOurTeam: 'MEET OUR TEAM',
      ourmembership: 'OUR MEMBERSHIP',
      ourPartners: 'OUR PARTNERS',
      contactUs: 'CONTACT US',
      writeUs: 'write us',
      usefulLinks: 'Useful links',
      stayConnected: 'Stay Connected'
    },
    frenchStrings: {
      language: 'Langue',
      inform: 'Informer',
      inspire: 'Inspirer',
      involve: 'impliquer',
      home: 'Accueil',
      about: 'À propos',
      aboutUs: 'À propos de nous',
      ourInitiatives: 'Nos initiatives',
      ourTeam: 'Notre équipe',
      meetOurTeam: 'Rencontrez notre équipe',
      ourmembership: 'Notre adhésion',
      ourPartners: 'Nos partenaires',
      contactUs: 'Nous contacter',
      writeUs: 'Écrivez-nous un email',
      usefulLinks: 'Hyperliens utiles',
      stayConnected: 'Rester connecté'
    }
  },
  mutations: {
    setLanguage(state, language){
      state.language = language;
      return console.log(language);
    }
  },
  actions: {
  },
  modules: {
  }
})
