<template>
  <div class="root">

    <pre-header v-if="$route.path != '/' || $route.path != '/landing-page'" />

    <header-component v-if="$route.path !== '/' || $route.path !== '/landing-page'" />

    <br v-if="$route.path !== '/' || $route.path !== '/landing-page'" />

    <router-view />

    <br v-for="x in 3" :key="`pre-fppter-line-break-${x}`" v-show="$route.path !== '/' || $route.path !== '/landing-page'" />

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
    return console.log(this.$route.path);
  }
}
</script>

<style>
a, button, .btn, [type=button], [type=submit]{
  cursor: pointer;
}

hr{
  border-top: 1px dotted var(--custom-primary-color) !important;
  border-bottom: 1px dotted #ffffff !important;
}

*, #root{
  animation-name: fadeIn;
  animation-duration: .45s;
  animation-delay: 0s;
  animation-timing-function: ease-in;
}

@keyframes fadeIn {
	from{
		opacity: 0;
		transform: translate3d(0px, 0px, 2px);
		perspective: 1000;
	}
	to{
		opacity: 1;
		transform: translate3d(0px, 0px, 0px);
	}
}

@-webkit-keyframes fadeIn {
	from{
		opacity: 0;
		transform: translate3d(0px, 0px, 2px);
		perspective: 1000;
	}
	to{
		opacity: 1;
		transform: translate3d(0px, 0px, 0px);
	}
}
</style>