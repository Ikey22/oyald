<template>
  <div class="preheader p-4 bg-success clearfix text-white d-none d-sm-block d-md-block d-lg-block d-xl-block">
      <span class="float-left text-white">
        <b-form inline>
          <b-form-select
            id="select-language"
            class="text-white bg-success"
            v-model="$store.state.language"
            :options="[{ text: 'Language: English', value: 'en' }, { text: 'Langue: French', value: 'fr' }]"
            value="en"
          ></b-form-select>
        </b-form>
      </span>
      <a class="float-right text-white" href="mailto:info@oyald-ojlad.org"> <span class="text-white">&nbsp;|&nbsp;</span> {{ $store.state.language === 'en' ? $store.state.englishStrings.writeUs : $store.state.frenchStrings.writeUs }}: info@oyald-ojlad.org  </a>
      <br />
      <hr />
  </div>
</template>

<script>
export default {
    name: "PreHeader",
    methods: {
      setLanguage($event){
        return this.$store.commit('setLanguage', $event.target.value);
      }
    }
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

.bg-secondary{
  background-color: var(--custom-secondary-color) !important;
}
</style>