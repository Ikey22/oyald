<template>
  <div class="login-signup-root">
    <md-tabs
    class="md-tabs"
    :md-swipeable="true"
    md-alignment="centered"
    >
      <md-tab
      v-for="x in 2"
      :key="x + Math.random()"
      class="md-tab"
      :md-label="x === 1 ? 'Login' : x === 2 ? 'Signup' : ''"
      :md-icon="x === 1 ? 'exit_to_app' : x === 2 ? 'edit' : ''"
      >
        <br v-for="x in 4" :key="x + Math.random()" />

        <span> {{ x === 1 ? 'Welcome back, Login!' : x === 2 ? 'Welcome to Payjaro, Signup!' : '' }} </span>

        <br v-for="x in 4" :key="x + Math.random()" />

        <md-button
        v-if="x === 1"
        to="/login"
        class="md-raised md-elevation-5 md-primary md-button bold"
        > Login </md-button>

        <md-button
        v-if="x === 2"
        to="/signup-individual"
        class="md-raised md-elevation-5 md-primary md-button bold"
        > Individual </md-button>

        <md-button
        v-if="x === 2"
        to="/signup-business"
        class="md-raised md-elevation-5 md-primary md-button bold"
        > Business </md-button>

        <br />

        <center>
          <img src="@/assets/img/logo.png" alt="Payjaro Logo">
        </center>

        <img src="@/assets/svg/undraw_login_signup.svg" width="100"  align="right">
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>

const doTheNeedful = ($this) => {
  $this.$store.commit('setAppbarTitle', 'Login / Signup');
}

export default {
    name: "LoginSignup",
    mounted(){
      doTheNeedful(this);
    },
    created(){
      doTheNeedful(this);
    },
    updated(){
      doTheNeedful(this);
    }
}
</script>

<style scoped>
.login-signup-root, .md-tabs, .md-tab, .md-tabs-container, .md-tabs-content, .md-content, .md-content.md-tabs-content{
    width: 100% !important;
    height: 100% !important;
    margin: 0px !important;
    padding: 0px !important;
    display: block !important;
}

.md-tab{
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  flex-direction: column;
  width: 100% !important;
  height: 100% !important;
}
</style>