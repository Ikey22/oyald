<template>
  <div class="w-100 container-fluid">
      <h1 class="text-center font-weight-bold w-100 text-success" style="color: var(--custom-primary-color) !important;">{{ $store.state.language === 'en' ? $store.state.englishStrings.contactUs : $store.state.frenchStrings.contactUs }}</h1>
      <center class="w-100">
        <img alt="contact-us" src="@/assets/img/mail.svg" width="250" />
      </center>
      <p class="text-center w-100 font-weight-bold"> {{ $store.state.language == 'en' ? 'Please drop us a note' : 'Veuillez nous laisser un message' }} </p>
      <br />
      <p class="w-100 text-center"><span class="p-1 bg-danger text-white font-weight-bold rounded">{{ $store.state.language == 'en' ? 'Note:' : 'Noter' }}</span> {{ $store.state.language == 'en' ? 'Fields labelled with asterisk (*) are mandatory, the rest are optional' : 'Remarque: Les champs marqués d\'un astérisque (*) sont obligatoires, les autres sont facultatifs' }}</p>
      <center> 
      <b-form
      style="max-width: 1050px !important;"
      @submit.prevent="submitContactForm"
      class="card rounded p-3 d-block text-left shadow-lg"
      >
                        <b-form-row class="row w-100">

                          <title-of-appelation class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" />

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="surname">{{ $store.state.language == 'en' ? 'Surname*' : 'Nom de famille*' }}</label>
                            <b-form-input
                            id="surname"
                            v-model="$store.state.userPreferences.surName"
                            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
                            type="text"
                            autocomplete="family-name"
                            :required="true"
                            />
                          </b-form-group>

                        </b-form-row>

                        <b-form-row class="row w-100">

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="first-name">{{ $store.state.language == 'en' ? 'First Name*' : 'Prénom*' }}</label>
                            <b-form-input
                            id="first-name"
                            v-model="$store.state.userPreferences.firstName"
                            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
                            type="text"
                            autocomplete="given-name"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="middle-name">{{ $store.state.language == 'en' ? 'Middle/other Names' : 'Deuxième prénom / autres noms' }}</label>
                            <b-form-input
                            id="middle-name"
                            v-model="$store.state.userPreferences.middleName"
                            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
                            type="text"
                            />
                          </b-form-group>
                          
                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="phone-number">{{ $store.state.language == 'en' ? 'Phone Number*' : 'Numéro de téléphone*' }}</label>
                            <b-form-input
                            id="phone-number"
                            v-model="$store.state.userPreferences.phoneNumber"
                            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
                            type="tel"
                            autocomplete="tel"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="email">{{ $store.state.language == 'en' ? 'Email*' : 'E-mail*' }}</label>
                            <b-form-input
                            id="email"
                            v-model="$store.state.userPreferences.email"
                            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
                            type="email"
                            autocomplete="email"
                            :required="true"
                            />
                          </b-form-group>
                        </b-form-row>

                        <b-form-row class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="subject">{{ $store.state.language == 'en' ? 'Subject*' : 'Matière*' }}</label>
                            <b-form-input
                            id="subject"
                            v-model="subject"
                            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
                            type="text"
                            :required="true"
                            />
                          </b-form-group> 
                        </b-form-row>

                        <b-form-group>
                          <label for="message">Message*</label>
                          <b-form-textarea
                          style="height: 200px;"
                          :required="true"
                          :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
                          v-model="message"
                          id="message"
                          />
                        </b-form-group>

                        <br />

                        <b-button
                        type="submit"
                        class="bg-green w-100"
                        >{{ $store.state.language == 'en' ? 'Submit' : 'Soumettre' }}</b-button>
                      </b-form>
                      </center>

                      <br />

                      <country-chapters />
  </div>
</template>

<script>
import CountryChapters from '@/components/CountryChapters.vue';
import TitleOfAppelation from '@/components/TitleOfAppelation.vue';

export default {
  name: "ContactUs",
  data(){
    return {
        subject: "",
        message: ""
      }
  },
  methods: {
    submitContactForm(){
      const destinationEmail = "danroyaleffiong@gmail.com" // this.$store.state.email;
      const subject = this.subject;
      const messageBody = this.message;


let message = `Sender: ${this.$store.state.userPreferences.email}
Date: ${ Date.now() || (new Date()).getTime() }
Surname: ${this.$store.state.userPreferences.surName}
First name: ${this.$store.state.userPreferences.firstName}
Middle name: ${this.$store.state.userPreferences.middleName}
Phone number: ${this.$store.state.userPreferences.phoneNumber}
Email: ${this.$store.state.userPreferences.email}

---

Message Body:
${messageBody}`;


      const rawUrl = `mailto:${destinationEmail}?subject=${subject}&body=${message}`;

      let a = document.createElement("a");
      const url = encodeURI(rawUrl);
      a.href = url;console.log(url);
      a.target = "_blank";
      a.click();
      URL.revokeObjectURL(a.href);
      a.remove();
      
    }
  },
  components: {
    CountryChapters,
    TitleOfAppelation
  }
}
</script>

<style scoped>
.bg-green{
  background-color: var(--custom-primary-color) !important;
}

.box-shadow{
  box-shadow: 5px 5px 5px 5px #999;
}
</style>