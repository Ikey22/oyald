<template>
  <div class="root">

    <pre-header v-if="$route.path !== '/' || $route.path !== '/landing-page'" />

    <header-component v-if="$route.path !== '/' || $route.path !== '/landing-page'" />

    <br v-if="$route.path !== '/' || $route.path !== '/landing-page'" />

    <router-view />

    <br v-if="$route.path !== '/' || $route.path !== '/landing-page'" />

    <footer-component v-if="$route.path !== '/' || $route.path !== '/landing-page'" />

  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import PreHeader from '@/components/PreHeader.vue';

export default {
  components: {
    FooterComponent,
    PreHeader,
    HeaderComponent
    },
  name: "App",
  mounted(){
  }
}
</script>

<style>
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

a, button, .btn, [type=button], [type=submit]{
  cursor: pointer;
}

hr{
  border-top: 1px dashed var(--custom-primary-color) !important;
  border-bottom: 1px dashed #ffffff !important;
}
</style>