<template>
  <div class="component-root">
    <form>
      <md-field>
        <label for="username-or-number-or-email">Username/Number/Email</label>
        <md-input
          v-model="usernameOrNumberOrEmail"
          id="username-or-number-or-email"
          type="text"
          :required="true"
        />
      </md-field>
      <md-field>
        <label for="password">Password</label>
        <md-input
          v-model="password"
          id="password"
          :required="true"
          type="password"
        />
      </md-field>
      <br />
      <center>
        <md-button class="md-primary md-raised" type="button">
          Submit
        </md-button>
      </center>
    </form>

    <img align="bottom" src="@/assets/img/logo.png" >
  </div>
</template>


<script>
export default {
    name: 'Login',
    mounted(){
        this.$store.commit('setAppbarTitle', 'Login');
    },
    data(){
      return {
        usernameOrNumberOrEmail: '',
        password: ''
      }
    }
}
</script>

<style scoped>
.component-root{
  display: flex !important;
  align-items: center;
  justify-content: space-around !important;
  flex-direction: column;
}
.component-root > form {
  width: 100%;
  max-width: 500px;
  box-shadow: 1px 1px 2px 2px #999;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 5px;
  display: block !important;
}
</style>