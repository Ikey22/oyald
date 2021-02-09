<template>
  <div class="root w-100 h-100">

    <pre-header />

    <header-component />

    <br />

    <keep-alive>
      <router-view />
    </keep-alive>

    <br v-for="x in 3" :key="`pre-footer-line-break-${x}`" />

  <!-- begin newtork error modal -->
  <b-modal v-model="$store.state.networkErrorModal">
    <div class="w-100 h-100">
      <p class="h1 text-center w-100 font-weight-bold text-danger">Network error!!!</p>
    </div>
  </b-modal>
  <!-- #end network error modal -->

  <!-- begin success modal -->
  <b-modal v-model="$store.state.successModal">
    <div class="w-100 h-100">
      <p class="h1 text-center w-100 font-weight-bold text-primary-color">Successful!!!!</p>
    </div>
  </b-modal>
  <!-- #end success modal -->

  <!-- begin email already in newsletter modal -->
  <b-modal v-model="$store.state.emailAlreadyInNewsletterModal">
    <div class="w-100 h-100">
      <p class="h1 text-center w-100 font-weight-bold text-primary-color">You've already signed up for our newsletter!!!!</p>
    </div>
  </b-modal>
  <!-- #end email already in newsletter modal -->


    <footer-component />

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
  name: "App"
}
</script>

<style>
:root{--custom-primary-color: #002200;--custom-secondary-color: #b99e00;--custom-gradient: linear-gradient(to right, var(--custom-green), var(--custom-gold) 80%);}

*{
  box-sizing: border-box;font-family:
  'Times New Roman', Times, serif;
}

.bg-success, .bg-primary-color, .bg-green{
  background-color: var(--custom-primary-color) !important;
  }

.text-success, .text-primary-color, .text-green{
  color: var(--custom-primary-color) !important;
}

.bg-secondary{
  background-color: var(--custom-secondary-color) !important;
}

input, textarea, select{
  border-bottom: 1px solid green !important;
}

a, button, .btn, [type=button], [type=submit]{
  cursor: pointer;
}

hr{
  border-top: 1px dotted var(--custom-primary-color) !important;
  border-bottom: 1px dotted #ffffff !important;
}

*, #root{
  animation-name: fadeIn;
  animation-duration: .25s;
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