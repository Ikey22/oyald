<template>
  <div class="component-root">
    <form>
      <div class="md-layout">

          <h2 style="text-align: center;">Successful!</h2>
          <br />
          <center>Confirm the QR code sent to you</center>
          <br />

        <div v-for="x in 3" :key="x + X * 3/2" class="md-layout-item md-size-25">
          <md-field>
              <input
              v-model="otp[x]"
              :id="'otp-' + x"
              type="number"
              :min="0"
              :max="9"
              :required="true"
            />
          </md-field>
        </div>

      </div>

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
    name: 'SignupIndividual',
    mounted(){
        this.$store.commit('setAppbarTitle', 'Confirm OTP');
    },
    data(){
      return {
          otp: []
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
  overflow-y: auto;
  width: 100%;
  max-height: 85%;
  max-width: 500px;
  box-shadow: 1px 1px 2px 2px #999;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 5px;
  display: block !important;
}
</style>