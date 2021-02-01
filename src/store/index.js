import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const $store = new Vuex.Store({
  state: {
    primaryColor: "#002200",
    appNameShort: "OYALD",
    appNameLong: "Organisation of Young African Leaders for Development",
    appNameLongFrench: "Organisation des jeunes leaders africains pour le développement",
    appbarTitle: "OYALD",
    language: 'en',
    userPreferences: {
      firstName: "",
      middleName: "",
      surName: "",
      email: "",
      address1: "",
      address2: "",
      address3: "",
      fieldsOfInterest: [],
      membershipCategory: "active",
      dob: ""
    },
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
      ourMembership: 'OUR MEMBERSHIP',
      ourPartners: 'OUR PARTNERS',
      contactUs: 'CONTACT US',
      writeUs: 'write us',
      usefulLinks: 'Useful links',
      stayConnected: 'Stay Connected',
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
      ourMembership: 'Notre adhésion',
      ourPartners: 'Nos partenaires',
      contactUs: 'Nous contacter',
      writeUs: 'Écrivez-nous un email',
      usefulLinks: 'Hyperliens utiles',
      stayConnected: 'Rester connecté',
    },
    authAdmin: null,
    socialHandles: [
      {
        name: 'Linkedin',
        url: 'https://linkedin.com/oyald.ojlad',
        icon: "linkedin"
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/oyald.ojlad',
        icon: "facebook"
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/oyald.ojlad',
        icon: "twitter"
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/oyald.ojlad',
        icon: "instagram"
      }
    ]
  },
  mutations: {
    setLanguage(state, language){
      state.language = language;
      return console.log(`Lang: ${language}`);
    },
    setAuthAdmin(state, admin){
      state.authAdmin = admin;
    },
    async submitNewsletterForm(){
      //
    }
  },
  actions: {
  },
  modules: {
  }
});

window.__$store = $store;

export default $store;


