import Vue from 'vue';
import Vuex from 'vuex';
// import vuejsStorage from "vuejs-storage";


Vue.use(Vuex);
// Vue.use(vuejsStorage);

const $store = new Vuex.Store({
  /* plugins: [
    vuejsStorage({
      keys: ['authAdmin'],
      namespace: '_oyald_ojlad'
    })
  ], */
  state: {
    countries: [{
      name: "Loading..."
    }],
    primaryColor: "#002200",
    email: "oyald.ojlad@gmail.com",
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
      titleOfAppelation: "Mr",
      dob: "",
      phoneNumber: "",
      zipCode: "",
      country: "",
      state: "",
      city: "",
      passport: [],
      description: "",
      agreedToc: true,
      agreedTruthOfCredentials: true,
      countryName: "",
      countryAddress1: "",
      countryAddress2: "",
      countryAddress3: "",
      countryCategory: "",
      countryEmail: "",
      countryPhoneNumber: "",

      companyFacebook: "",
      companyTwitter: "",
      companyInstagram: "",
      companyYoutube: "",
      companyWebsite: "",
      companyOfficer: "",
      companyOfficerPosition: "",
      companyLogo: [],
      companyNotes: "",
      trueRepresentative: true,
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
    isAddingToNewsletter: false,
    socialHandles: [
      {
        name: 'Linkedin',
        url: 'https://linkedin.com/company/oyald-ojlad',
        icon: "linkedin"
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/oyald.ojlad',
        icon: "facebook"
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/oojlad',
        icon: "twitter"
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/oyald.ojlad',
        icon: "instagram"
      }
    ],

    uploadProgress: 0,

    successModal: false,
    networkErrorModal: false,
    isUploading: false,
    emailAlreadyInNewsletterModal: false,
    tocModal: false
  },
  mutations: {
    setLanguage(state, language){
      state.language = language;
      return console.log(`Lang: ${language}`);
    },
    setAuthAdmin(state, admin){
      state.authAdmin = admin;
      // localStorage.setItem('authAdmin', JSON.stringify(admin));
      // console.log(JSON.stringify(admin));
    },
    showSuccessModal(state, boolValue){
      state.successModal = boolValue;
    },
    showEmailAlreadyInNewsletterModal(state, boolValue){
      state.emailAlreadyInNewsletterModal = boolValue;
    },
    showNetworkErrorModal(state, boolValue){
      state.networkErrorModal = boolValue;
    },
    showTOCModal(state, trueOrFalse) {
      state.tocModal = trueOrFalse;
    },
    showIsUploadingModal(state, trueOrFalse){
      state.isUploading = trueOrFalse;
    },
    setUploadProgress(state, progress){
      state.uploadProgress = progress;
    },
    async submitNewsletterForm(state){
      state.isAddingToNewsletter = true;


      const ref = window.__$vm.$firebase.firestore().collection('newsletter_subscribtion');
      const email = state.userPreferences.email;

      const addEmailToNewsletterSubscribtion = email => {
        if (/\S@\S.\S/.test(email)) ref.add({email, subscribed_on: Date.now() || (new Date()).getTime()})
          .then(() => {
            state.isAddingToNewsletter = false;
            window.__$store.commit('showSuccessModal', true)
          })
          .catch(() => {
            state.isAddingToNewsletter = false;
            window.__$store.commit('showNetworkErrorModal', true)
          });
      }

      if (/\S@\S.\S/.test(email)) ref.where('email', '==', email)
        .limit(1)
        .get()
        .then(snapshot => {
          if (snapshot.docs){
            if (snapshot.docs.length && snapshot.docs[0]){
              state.isAddingToNewsletter = false;
              window.__$store.commit('showEmailAlreadyInNewsletterModal', true);
            } else {
              addEmailToNewsletterSubscribtion(email);
            }
          } else {
            addEmailToNewsletterSubscribtion(email);
          }
        })
        .catch(() => {
          state.isAddingToNewsletter = false;
          this.$tore.commit('showNetworkErrorModal', true);
        })
    }
  },
  actions: {
  },
  modules: {
  }
});

/* const checkStorageForAuthAdmin = () => {
  if (localStorage.authAdmin){
    if ($store){
      $store.commit('setAuthAdmin', JSON.parse(localStorage.authAdmin));
    }
  }
}

window.addEventListener('load', () => checkStorageForAuthAdmin());
window.addEventListener('DOMContentLoaded', () => checkStorageForAuthAdmin());
window.addEventListener('ready', () => checkStorageForAuthAdmin()) */

window.__$store = $store;

export default $store;


