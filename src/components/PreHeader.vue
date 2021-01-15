<template>
  <div class="preheader p-4 bg-success clearfix text-white d-none d-sm-block d-md-block d-lg-block d-xl-block">
      <span class="float-left text-white">
        <b-select class="bg-success text-white" v-model="$store.state.language">
          <b-select-option value="en">English</b-select-option>
          <b-select-option value="fr">Franch</b-select-option>
        </b-select>
      </span>
      <a class="float-right text-white" href="mailto:info@oyald-ojlad.org"> <span class="text-white">&nbsp;|&nbsp;</span> write us: info@oyald-ojlad.org  </a>
      <br />
      <hr />
    </div>
</template>

<script>
export default {
    name: "PreHeader"
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