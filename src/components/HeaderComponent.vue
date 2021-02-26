<template>
  <b-navbar :sticky="true" toggleable="lg" type="dark" variant="success" style="background: var(--custom-primary-color) !important;">
    <b-navbar-brand to="/home-page" class="font-weight-bold navbar-brand">
      <div class="logo-img-wrapper">
        <img class="logo-img" width="100" height="100" alt="OYALD Logo" src="@/assets/img/logo.jpeg">
        <br />
        <span class="logo-img-slogan text-white"><marquee scrollamount="4" class="font-weight-bold text-justified d-none d-md-block d-lg-block d-xl-block">{{ $store.state.language === 'en' ? $store.state.englishStrings.inform : $store.state.frenchStrings.inform.toString().toUpperCase() }}...{{ $store.state.language === 'en' ? $store.state.englishStrings.inspire : $store.state.frenchStrings.inspire.toString().toUpperCase() }}...{{ $store.state.language === 'en' ? $store.state.englishStrings.involve : $store.state.frenchStrings.involve.toString().toUpperCase() }}</marquee></span>
      </div>
      <span style="color: var(--yellow)" class="logo-text d-none d-sm-none d-md-block d-lg-none d-xl-block" v-html="$store.state.language === 'en' ? 'Organisation <small>of</small> Young African Leaders <small>for</small> Development <br /><small>(OYALD)</small>' : 'Organisation <small>des</small> Jeunes Leaders Africains <small>pour le</small> Développement <small>(OJLAD)</small>'"></span>
      <span style="color: var(--yellow)" class="logo-text d-block d-sm-block d-md-none d-lg-block d-xl-none">{{ $store.state.appNameShort }}</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto" align="center">
        <b-nav-item to="/home-page">{{ $store.state.language === 'en' ? $store.state.englishStrings.home : $store.state.frenchStrings.home }}</b-nav-item>
        <b-nav-item to="/about-africa">ABOUT AFRICA</b-nav-item>
        <b-nav-item to="/initiatives">{{ $store.state.language === 'en' ? $store.state.englishStrings.ourInitiatives : $store.state.frenchStrings.ourInitiatives }}</b-nav-item>
        <b-nav-item-dropdown :text="$store.state.language === 'en' ? 'OUR TEAM' : 'Notre équipe'" right>
          <b-dropdown-item to="/general-secretariat">Our General Sceretariat</b-dropdown-item>
          <b-dropdown-item to="/country-secretaries">Our National Coordinators/Country Secretaries</b-dropdown-item>
          <b-dropdown-item to="/partners">Our Partners</b-dropdown-item>
      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          !-- Using 'button-content' slot --
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="JOIN OYALD" right>
          <b-dropdown-item to="/membership">As a Member</b-dropdown-item>
          <b-dropdown-item to="/partnership">As a partner</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/contact">{{ $store.state.language === 'en' ? 'CONTACT US' : 'Nous contacter' }}</b-nav-item>
      </b-navbar-nav>
    
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: "HeaderComponent",
    components: {
    }
}
</script>

<style scoped>
.navbar-brand{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
}

.logo-img-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70px !important;
  height: 70px;
}

.logo-img{
  width: 50px;
  height: 50px;
  padding: 4px;
  border-radius: 10px;
  box-sizing: border-box;
  transform: translateY(9px);
  -moz-transform: translateY(3px);
}

.logo-img-slogan{
  font-weight: 600;
  font-size: 12px;
  transform: translate(45%, -14px);
  -moz-transform: translate(45%, 10px);
  -ms-transform: translate(45%, -14px);
  word-wrap: nowrap;
}

.logo-img-slogan{
  width: 350px;
}

.logo-text{
  transform: translateY(-14px);
  -ms-transform: translateY(-14px);
  -moz-transform: translateY(-14px);
}

@media screen and (max-width: 767px){
  .logo-text{
    transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
  }
}
</style>