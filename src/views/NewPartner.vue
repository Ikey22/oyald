<template>
  <div class="container-fluid w-100">
      <h1 class="text-success w-100 text-center font-weight-bold" style="color: var(--custom-primary-color) !important;">PARTNER WITH OYALD </h1>
      <br />
      <p class="w-100 text-center"><span class="p-1 bg-danger text-white font-weight-bold rounded">Note:</span> Fields labelled with asterisk (*) are mandatory, the rest are optional</p>
      
      
      
      
      <new-partner-form :action="submitNewPartnerForm" />




      <br />

  </div>
</template>

<script>
import NewPartnerForm from "../components/NewPartnerForm.vue";
//import CountryStateCity from '../components/CountryStateCity.vue'
export default {
  components: {
    //CountryStateCity,
    NewPartnerForm
    },
  data(){
    return {
      submitNewPartnerForm(params){
        console.log(params);
      }
    }
  },
    name: "NewPartner"
}
</script>

<style scoped>
:root{
	--custom-primary-color: #002200;
	--custom-secondary-color: #b99e00;
	--custom-gradient: linear-gradient(to right, var(--custom-green), var(--custom-gold) 80%);
}

.bg-success{
  background-color: var(--custom-primary-color) !important;
}

.text-success{
  color: var(--custom-primary-color) !important;
}
</style>