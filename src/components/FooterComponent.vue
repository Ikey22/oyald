<template>
<footer class="w-100 bg-green text-dark">
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
        <p> <a class="text-white" href="https://fc.xdd/"> <b-icon icon="facebook"></b-icon> Facebook </a> </p>
        <p> <a class="text-white" href="https://fc.xdd/"> <b-icon icon="twitter"></b-icon> Twitter </a> </p>
        <p> <a class="text-white" href="https://fc.xdd/"> <b-icon icon="instagram"></b-icon> Instagram </a> </p>
        <p> <a class="text-white" href="https://fc.xdd/"> <b-icon icon="linkedin"></b-icon> Linkedin </a> </p>
      </div>

      <div class="col-12 col-md-6 col-lg-4 container-lg pt-2 pb-2">
        <p class="h5 u">{{ $store.state.language === 'en' ? $store.state.englishStrings.usefulLinks.toString().toUpperCase() : $store.state.frenchStrings.usefulLinks.toString().toUpperCase() }}</p>
        <p>
          <b-form inline>
            <b-form-select
              id="select-language"
              class="text-white"
              style="background-color: var(--custom-primary-color) !important;"
              v-model="$store.state.language"
              :options="[{ text: 'Language: English', value: 'en' }, { text: 'Langue: French', value: 'fr' }]"
              value="en"
            ></b-form-select>
          </b-form>
        </p>
        <p> <router-link class="text-white" to="/home"> <b-icon icon="caret-right-fill"></b-icon> {{ $store.state.language === 'en' ? $store.state.englishStrings.home.toString().toUpperCase() : $store.state.frenchStrings.home.toString().toUpperCase() }} </router-link> </p>
        <p> <router-link class="text-white" to="/about"> <b-icon icon="caret-right-fill"></b-icon> {{ $store.state.language === 'en' ? $store.state.englishStrings.aboutUs.toString().toUpperCase() : $store.state.frenchStrings.aboutUs.toString().toUpperCase() }} </router-link> </p>
        <p> <router-link class="text-white" to="/initiatives"> <b-icon icon="caret-right-fill"></b-icon> {{ $store.state.language === 'en' ? $store.state.englishStrings.ourInitiatives.toString().toUpperCase() : $store.state.frenchStrings.ourInitiatives.toString().toUpperCase() }} </router-link> </p>
        <p> <router-link class="text-white" to="/contact"> <b-icon icon="caret-right-fill"></b-icon> {{ $store.state.language === 'en' ? $store.state.englishStrings.contactUs.toString().toUpperCase() : $store.state.frenchStrings.contactUs.toString().toUpperCase() }} </router-link> </p>
        <p> <router-link class="text-white" to="/partners"> <b-icon icon="caret-right-fill"></b-icon> {{ $store.state.language === 'en' ? $store.state.englishStrings.ourPartners.toString().toUpperCase() : $store.state.frenchStrings.ourPartners.toString().toUpperCase() }} </router-link> </p>
      </div>

      <div class="col-12 col-md-6 col-lg-4 container-lg pt-2 pb-2">
        <p class="h5 u">{{ $store.state.language === 'en' ? $store.state.englishStrings.contactUs.toString().toUpperCase() : $store.state.frenchStrings.contactUs.toString().toUpperCase() }}</p>
        <p> <a class="text-white" target="_blank" href="mailto:info@oyald-ojlad.org"> <b-icon icon="chat-left-dots-fill"></b-icon> info@oyald-ojlad.org </a> </p>
      </div>

    </div>

    <hr class="bordered border-light"/>

    <div class="text-light d-flex flex-column flex-lg-row align-items-center justify-content-between">
      <span class="h4 font-weight-bold"> <i class="text-success fa fa-envelope-open"></i> OUR NEWSLETTER</span>
      <form @submit.stop.prevent method="POST"  action="#" target="_blank" class="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column">
        <div class="input-group rounded-lg">
          <input required type="email" class="form-control" id="inlineFormInputGroupUsername" :placeholder="$store.state.language === 'en' ? 'your email address' : 'Quelle est ton adresse email'">
          <div class="input-group-append">
            <button type="submit" role="button" class="btn btn-success bg-yellow input-group-text"><b-icon icon="arrow-right-square-fill"></b-icon></button>
          </div>
        </div>
      </form>
    </div> 

    <hr class="bordered border-light" />

    <div class="text-light d-flex flex-column flex-lg-row align-items-center justify-content-around">
      <span>OYALD &copy; {{ year }}</span>
    </div><br/>

  </div>
</footer>
</template>

<script>
export default {
    name: "FooterComponent",
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

.bg-yellow{
  background-color: #b99e00 !important;
  color: var(--custom-primary-color) !important;
}

.bg-green{
  background-color: #002200 !important;
}

.u{
  text-decoration: underline !important;
}
</style>