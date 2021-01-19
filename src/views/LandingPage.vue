<template>
  <div class="landing-page-root w-100 h-100 d-block">

    <div class="landing-page-fill">

      <b-carousel
      class="w-100 h-100 absolute"
      id="carousel-1"
      v-model="slide"
      img-height="500"
      img-width="600"
      :interval="5000"
      :background="$store.state.primaryColor"
      style="text-shadow: 1px 1px 2px #333;"
    >

      <b-carousel-slide
        v-for="image in carouselImages"
        :key="image"
        class="w-100 h-100 bg-success"
        img-alt="Stock Image of arica sourced from shutterstock"
        :img-src="`/img/shutterstock-${image}.jpg`"
      ></b-carousel-slide>

    </b-carousel>

    <div class="absolute w-100 h-100 bg-succes layer-2">

      <div class="call-to-action p-5 shadow-lg">
        <b-navbar>
          <b-navbar-brand
            style="color: var(--custom-secondary-color);"
            class="w-100 font-weight-bold text-center n-brand">
            <img
              src="@/assets/img/logo.jpeg"
              class="call-to-action-logo"
              width="100"
              alt="OYALD Logo"
              />
            <br />
            <br />
            <span>OYALD</span>
          </b-navbar-brand>
        </b-navbar>
        <br />
        <b-button-toolbar>
          <b-button-group>
            <b-button @click="setLanguage($event, 'en')" to="/home">English</b-button>
            <b-button @click="setLanguage($event, 'fr')" to="/home">Français</b-button>
          </b-button-group>
        </b-button-toolbar>
      </div>

    </div>

    </div>

  </div>
</template>

<script>
export default {
    name: "LandingPage",
    methods: {
      setLanguage($event, lang){
        console.log($event);
        this.$store.commit('setLanguage', lang);
      }
    },
    data(){
      return {
        carouselImages: [
          'baobab',
          'table-mountain',
          'elephant',
          'pyramid',
          'victoria-falls',
          'timbukutu'
        ]
      }
    }
}
</script>

<style scoped>
.landing-page-root{
  background: #ffffff;
  width: 100% !important;
  height: 100% !important;
  position: fixed;
  z-index: 99999999;
  overflow: hidden !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.landing-page-fill{
  width: 100% !important;
  height: 100% !important;
  position: relative;
}
.absolute{
  position: absolute;
  top: 0px;
  left: 0px;
}
.layer-2{
  background: #06300294;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layer-2 > .call-to-action{
  background: var(--custom-primary-color);
  border-radius: 50px;
}
.call-to-action-logo{
  border-radius: 20px;
}
.n-brand{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>