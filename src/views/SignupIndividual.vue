<template>
  <div class="component-root">
    <form>
      <div class="md-layout">
        <div class="md-layout-item">
          <md-field>
            <label for="first-name">First Name</label>
              <md-input
              v-model="usernameOrNumberOrEmail"
              id="first-name"
              type="text"
              :required="true"
            />
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <label for="middle-name">Middle/Other Name</label>
              <md-input
              v-model="usernameOrNumberOrEmail"
              id="middle-name"
              type="text"
              :required="true"
            />
          </md-field>
        </div>
      </div>

      <md-field>
        <label for="sur-name">Surname/Lastname/Family Name</label>
        <md-input
          id="sur-name"
          :required="true"
          type="text"
        />
      </md-field>

      <md-field>
        <label for="number">Phone Number</label>
        <md-input
          id="number"
          :required="true"
          type="tel"
        />
      </md-field>

      <md-field>
        <label for="number-2">Phone Number 2 (optional)</label>
        <md-input
          id="number-2"
          :required="false"
          type="tel"
        />
      </md-field>

      <md-field>
        <label for="home-address">Home address</label>
        <md-input
          id="home-address"
          :required="true"
          type="text"
        />
      </md-field>

      <md-field>
        <label for="work-addres">Work address (optional)</label>
        <md-input
          id="work-address"
          :required="false"
          type="text"
        />
      </md-field>

      <md-field>
        <label for="verification-mode">Select verification mode</label>
        <md-select id="verification-mode" v-model="verificationMode">
          <md-option
          v-for="x in [
            {
              label: 'National Identity Number',
              value: 'nin'
            },
            {
              label: 'Bank Verification Number',
              value: 'bvn'
            }
          ]"
          :key="`${JSON.stringify(x) + Math.random()}`"
          :value="x.value"
          :required="true"
          > {{ x.label }} </md-option>
        </md-select>
      </md-field>

      <md-field>
        <label for="nin-or-bvn">Type your {{ verificationMode === 'nin' ? 'National Identity Number' : verificationMode === 'bvn' ? 'Bank Verification Number' : ''  }} here</label>
        <md-input
          id="nin-or-bvn"
          :required="true"
          :md-counter="verificationMode === 'nin' ? 11 : verificationMode === 'bvn' ? 10 : 11"
          type="number"
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

      <md-field>
        <label for="confirm-password">Confirm Password</label>
        <md-input
          v-model="password"
          id="confirm-password"
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
    name: 'SignupIndividual',
    mounted(){
        this.$store.commit('setAppbarTitle', 'Signup - Individual');
    },
    data(){
      return {
        verificationMode: 'nin'
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