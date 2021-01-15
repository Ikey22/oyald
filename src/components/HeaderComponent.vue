<template>
  <b-navbar :sticky="true" toggleable="lg" type="dark" variant="success" style="background: var(--custom-primary-color) !important;">
    <b-navbar-brand to="/home" class="font-weight-bold navbar-brand">
      <div class="logo-img-wrapper">
        <img class="logo-img" src="@/assets/img/logo.jpeg">
        <br />
        <i class="logo-img-slogan text-white"><small class="font-weight-bold text-center d-none d-md-block d-lg-block d-xl-block">{{ $store.state.language === 'en' ? $store.state.englishStrings.inform : $store.state.frenchStrings.inform }}...{{ $store.state.language === 'en' ? $store.state.englishStrings.inspire : $store.state.frenchStrings.inspire }}<br />{{ $store.state.language === 'en' ? $store.state.englishStrings.involve : $store.state.frenchStrings.involve }}</small></i>
      </div>
      <span style="color: var(--yellow)" class="logo-text d-none d-md-block d-lg-block d-xl-block" v-html="$store.state.language === 'en' ? 'Organisation <small>of</small> Young African Leaders <small>for</small><br /> Development' : 'Organisation <small>des</small> jeunes leaders africains<br /> pour <small>le</small> développement'"></span>
      <span style="color: var(--yellow)" class="logo-text d-block d-md-none d-lg-none d-xl-none">{{ $store.state.appNameShort }}</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto" align="center">
        <b-nav-item to="/home">{{ $store.state.language === 'en' ? $store.state.englishStrings.home : $store.state.frenchStrings.home }}</b-nav-item>
        <b-nav-item-dropdown :text="$store.state.language === 'en' ? $store.state.englishStrings.about : $store.state.frenchStrings.about" right>
          <b-dropdown-item to="/about">{{ $store.state.language === 'en' ? $store.state.englishStrings.aboutUs : $store.state.frenchStrings.aboutUs }}</b-dropdown-item>
          <b-dropdown-item to="/initiatives">{{ $store.state.language === 'en' ? $store.state.englishStrings.ourInitiatives : $store.state.frenchStrings.ourInitiatives }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown :text="$store.state.language === 'en' ? 'OUR TEAM' : 'Notre équipe'" right>
          <b-dropdown-item to="/team">{{ $store.state.language === 'en' ? 'MEET OUR TEAM' : 'Rencontrez notre équipe' }}</b-dropdown-item>
          <b-dropdown-item to="/membership">{{ $store.state.language === 'en' ? 'OUR MEMBERSHIP' : 'Notre adhésion' }}</b-dropdown-item>
          <b-dropdown-item to="/partners">{{ $store.state.language === 'en' ? 'OUR PARTNERS' : 'Nos partenaires' }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/contact">{{ $store.state.language === 'en' ? 'CONTACT US' : 'Nous contacter' }}</b-nav-item>
      </b-navbar-nav>

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
    
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>
.navbar-brand{
  display: flex;
  align-items: center;
  justify-content: flex-tart;
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
}

.logo-img-slogan{
  font-weight: 600;
  font-size: 11px;
  transform: translateX(5px);
}

.logo-text{
  transform: translateY(-17px);
}

@media screen and (max-width: 767px){
  .logo-text{
    transform: translateY(0px);
  }
}
</style>