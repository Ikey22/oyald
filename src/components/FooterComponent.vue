<template>
<footer class="w-100 bg-green text-dark">
  <br />
  <h1 class="w-100 text-center font-weight-bold text-white">Our Vision</h1>
  <p class="text-center text-white font-weight-bold w-100">
    We envision a united, peaceful, inclusive, and sustainably prosperous Africa, driven by the joint transformational efforts of Africans, across generations.
  </p>
  <br />
  <hr />
  <div class="container-fluid">
    <div class="d-flex flex-column flex-med-row flex-lg-row align-items-start justify-content-between text-yellow">
      <center class="pt-4 pb-1">
        <span style="padding-left: 0 !important; margin-left: 0 !important; padding-right: 0 !important; margin-right: 0 !important; color:; var(--yellow) !important;" class="h2 font-weight-bold"> OYALD</span>
      </center>
      <center class="pt-4 px-3 pb-2 row d-flex flex-row align-items-center justify-content-between">
      </center>
    </div>

    <div class="row text-light">

      <div class="col-12 col-md-6 col-lg-4 container-lg pt-2 pb-2">
        <p class="h5 u">{{ $store.state.language === 'en' ? $store.state.englishStrings.stayConnected.toString().toUpperCase() : $store.state.frenchStrings.stayConnected.toString().toUpperCase() }}</p>
        <p v-for="(handle, index) in $store.state.socialHandles" :key="`social-handle-${index + 1}`"> <a class="text-white" target="_blank" :href="handle.url"> <b-icon :icon="handle.icon"></b-icon> {{ handle.name }} </a> </p>
      </div>

      <div class="col-12 col-md-6 col-lg-4 container-lg pt-2 pb-2">
        <p class="h5 u">{{ $store.state.language === 'en' ? $store.state.englishStrings.usefulLinks.toString().toUpperCase() : $store.state.frenchStrings.usefulLinks.toString().toUpperCase() }}</p>
        <p>
          <b-form inline>
            <select-language />
          </b-form>
        </p>
        <p> <router-link class="text-white" to="/home-page"> <b-icon icon="caret-right-fill"></b-icon> {{ $store.state.language === 'en' ? $store.state.englishStrings.aboutUs.toString().toUpperCase() : $store.state.frenchStrings.aboutUs.toString().toUpperCase() }} </router-link> </p>
        <p> <router-link class="text-white" to="/initiatives"> <b-icon icon="caret-right-fill"></b-icon> {{ $store.state.language === 'en' ? $store.state.englishStrings.ourInitiatives.toString().toUpperCase() : $store.state.frenchStrings.ourInitiatives.toString().toUpperCase() }} </router-link> </p>
        <p> <router-link class="text-white" to="/general-secretariat"> <b-icon icon="caret-right-fill"></b-icon> OUR GENERAL SECRETARIAT </router-link> </p>
        <p> <router-link class="text-white" to="/national-coordinators"> <b-icon icon="caret-right-fill"></b-icon> OUR NAIONAL COORDINATORS </router-link> </p>
        <p> <router-link class="text-white" to="/country-chapters"> <b-icon icon="caret-right-fill"></b-icon> OUR COUNTRY CHAPTERS </router-link> </p>
        <p> <router-link class="text-white" to="/partners"> <b-icon icon="caret-right-fill"></b-icon> OUR PARTNERS </router-link> </p>
        <p> <a> <b-icon icon="caret-right-fill"></b-icon>
          <JoinOYALDButton />
        </a> </p>
      </div>

      <div class="col-12 col-md-6 col-lg-4 container-lg pt-2 pb-2">
        <p class="h5 u">{{ $store.state.language === 'en' ? $store.state.englishStrings.contactUs.toString().toUpperCase() : $store.state.frenchStrings.contactUs.toString().toUpperCase() }}</p>
        <p> <a class="text-white" target="_blank" href="mailto:info@oyald-ojlad.org"> <b-icon icon="chat-left-dots-fill"></b-icon> info@oyald-ojlad.org </a> </p>
      </div>

    </div>

    <hr class="bordered border-light"/>

    <div class="text-light d-flex flex-column flex-lg-row align-items-center justify-content-between">
      <span class="h5 font-weight-bold"> <i class="text-success fa fa-envelope-open"></i> SUBSCRIBE TO OUR NEWSLETTER </span>
      <form @submit.prevent="$store.commit('submitNewsletterForm')" target="_blank" class="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column">
        <div class="input-group rounded-lg">
          <input required v-model="$store.state.userPreferences.email" type="email" class="form-control" id="inlineFormInputGroupUsername" :placeholder="$store.state.language === 'en' ? 'your email address' : 'Quelle est ton adresse email'">
          <div class="input-group-append">
            <button type="submit" role="button" class="btn btn-success bg-warning input-group-text"><b-icon icon="arrow-right-square-fill"></b-icon></button>
          </div>
        </div>
      </form>
    </div> 

    <hr class="bordered border-light" />

    <div class="text-light d-flex flex-column flex-lg-row align-items-center justify-content-around">
      <small>Organisation of Young African Leaders for Development &copy;  2011 -  {{ year }}</small>
    </div><br/>

  </div>
</footer>
</template>

<script>
import SelectLanguage from '@/components/SelectLanguage.vue';
import JoinOYALDButton from '@/components/JoinOYALDButton.vue';

export default {
    name: "FooterComponent",
    components: {
      SelectLanguage,
      JoinOYALDButton
    },
    data(){
      return {
        year: `${(new Date()).getFullYear()}`
      }
    }
}
</script>

<style scope>
.text-yellow{
  color: #b99e00 !important;
}

.bg-green{
  background-color: #002200 !important;
}

.u{
  text-decoration: underline !important;
}
</style>
