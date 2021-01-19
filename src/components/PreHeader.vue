<template>
  <div class="preheader p-4 bg-success clearfix text-white d-none d-sm-block d-md-block d-lg-block d-xl-block">
      <span class="float-left text-white">
        <b-form inline>
          <select-language-dropdown />
        </b-form>
      </span>
      <a class="float-right text-white" href="mailto:info@oyald-ojlad.org"> <span class="text-white">&nbsp;|&nbsp;</span> {{ $store.state.language === 'en' ? $store.state.englishStrings.writeUs : $store.state.frenchStrings.writeUs }}: info@oyald-ojlad.org  </a>
      <br />
      <hr />
  </div>
</template>

<script>
import SelectLanguageDropdown from '@/components/SelectLanguageDropdown.vue';

export default {
    name: "PreHeader",
    components: {
      SelectLanguageDropdown
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