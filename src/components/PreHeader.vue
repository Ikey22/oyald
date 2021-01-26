<template>
  <div class="preheader p-4 bg-success text-white d-none d-sm-block d-md-block d-lg-block d-xl-block">

      <div class="d-flex align-items-center justify-content-between flex-row">
        <span class="text-white">
            <b-form inline>
              <select-language />
            </b-form>
          </span>

          <b-dropdown
            text="join OYALD"
            variant="warning"
            >
              <b-dropdown-item to="/membership">As a member</b-dropdown-item>
              <b-dropdown-item to="/partnerhip">As a Partner</b-dropdown-item>
          </b-dropdown>

          <a class="text-white" href="mailto:info@oyald-ojlad.org"> <span class="text-white">&nbsp;|&nbsp;</span> {{ $store.state.language === 'en' ? $store.state.englishStrings.writeUs : $store.state.frenchStrings.writeUs }}: info@oyald-ojlad.org  </a>
      </div>

      <br />
      <hr />
  </div>
</template>

<script>
import SelectLanguage from '@/components/SelectLanguage.vue';

export default {
    name: "PreHeader",
    components: {
      SelectLanguage
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