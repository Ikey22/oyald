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
    states: [{
      name: "Loading..."
    }],
    cities: [{
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
      titleOfAppelation: null,
      dob: "",
      phoneNumber: "",
      zipCode: "",
      country: "",
      countryOfResidence: "",
      state: "",
      city: "",
      passport: [],
      description: "",
      agreedToc: true,
      agreedTruthOfCredentials: true,

      nationality: '',

      companyName: "",
      companyAddress1: "",
      companyAddress2: "",
      companyAddress3: "",
      companyCategory: "",
      companyEmail: "",
      companyPhoneNumber: "",
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

      initiativesState: "",
      initiativesCity: "",
    },
    englishStrings: {
      language: 'Language',
      inform: 'Inform',
      inspire: 'Inspire',
      involve: 'Involve',
      home: 'Home',
      about: 'About',
      aboutUs: 'About OYALD',
      ourInitiatives: 'Our Initiatives',
      ourTeam: 'Our Team',
      meetOurTeam: 'Meet Our Team',
      ourMembership: 'Our Membership',
      ourPartners: 'Our Partners',
      contactUs: 'Contact Us',
      writeUs: 'Write us',
      usefulLinks: 'Useful Links',
      stayConnected: 'Stay Connected',
    },
    frenchStrings: {
      language: 'Langue',
      inform: 'Informer',
      inspire: 'Inspirer',
      involve: 'impliquer',
      home: 'Accueil',
      about: 'À Propos',
      aboutUs: 'À Propos de Nous',
      ourInitiatives: 'Nos Initiatives',
      ourTeam: 'Notre Équipe',
      meetOurTeam: 'Rencontrez notre équipe',
      ourMembership: 'Notre adhésion',
      ourPartners: 'Nos partenaires',
      contactUs: 'Nous Contacter',
      writeUs: 'Nous écrire à ',
      usefulLinks: 'Hyperliens Utiles',
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
    
    setLanguage(state, language) {

      if (state.language == language) return;

      state.language = language;
      return console.log(`Lang: ${language}`);
    },
    setAuthAdmin(state, admin) {
      state.authAdmin = admin;
      // localStorage.setItem('authAdmin', JSON.stringify(admin));
      // console.log(JSON.stringify(admin));
    },
    showSuccessModal(state, boolValue) {
      state.successModal = boolValue;
    },
    showEmailAlreadyInNewsletterModal(state, boolValue) {
      state.emailAlreadyInNewsletterModal = boolValue;
    },
    showNetworkErrorModal(state, boolValue) {
      state.networkErrorModal = boolValue;
    },
    showTOCModal(state, trueOrFalse) {
      state.tocModal = trueOrFalse;
    },
    showIsUploadingModal(state, trueOrFalse) {
      state.isUploading = trueOrFalse;
    },
    setUploadProgress(state, progress) {
      state.uploadProgress = progress;
    },
    async submitNewsletterForm(state) {
      state.isAddingToNewsletter = true;


      const ref = window.__$vm.$firebase.firestore().collection('newsletter_subscribtion');
      const email = state.userPreferences.email;

      const addEmailToNewsletterSubscribtion = email => {
        if (/\S@\S.\S/.test(email)) ref.add({ email, subscribed_on: Date.now() || (new Date()).getTime() })
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
          if (snapshot.docs) {
            if (snapshot.docs.length && snapshot.docs[0]) {
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


