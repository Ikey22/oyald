<template>
  <div class="root">

    <!-- begin send to payjaro -->
    <div v-if="$route.query.method == 'payjaro'" class="send-to-payjaro">

      <center class="send-to-bank-banner">
        <img src="@/assets/img/logo.png" width="100" />
        <br v-for="x in 2" :key="x + Math.random()" />
        <span class="bold bank-heading">to PayJaro</span>
      </center>

      <br />

      <center>
        <small>scan to pay</small>
        <br />
        <video id="scan-video"></video>
      </center>

      <hr />
      <center>or</center>

      <md-field>
        <label for="uername-or-email">Username/Email of recipient</label>
        <span class="md-prefix">
          <md-icon>account_circle</md-icon>
        </span>
        <md-input
        type="text"
        ></md-input>
      </md-field>


      <input-amount-and-currency />

      <br />

      <center>
        <md-button
        @click="showDialog = true"
        type="button"
        class="md-elevation-4 md-primary md-raised"
        >SEND</md-button>
      </center>

      <br v-for="x in 5" :key="x + 0.001" />

    </div>
    <!-- End send to payjaro -->

    <!-- begin send to bank -->
    <div v-else-if="$route.query.method == 'bank'" class="send-to-bank">
      <br />
      <br />

      <center class="send-to-bank-banner">
        <md-icon class="bank-icon">account_balance</md-icon>
        <br v-for="x in 3" :key="x + Math.random()" />
        <span class="bold bank-heading">to Bank</span>
      </center>

      <br />

      <md-field>
        <label for="bank-name">Bank name</label>
        <md-select
        id="bank-name"
        name="bank-name"
        :required="true"
        :md-dense="true"
        @input="console.log(bankName)"
        v-model="bankName"
        >
          <md-option
          v-for="x in 10"
          :key="`Bank-${x}`"
          :value="`Bank-${x}`"
          >Bank {{ x }}</md-option>
        </md-select>
      </md-field>

      <br />

      <md-field>
        <label for="recipients-account-number">Recipient's account number</label>
        <md-input
        id="recipients-account-number"
        type="number"
        :md-counter="10"
        :maxlength="10"
        />
      </md-field>

      <br />

      <md-field>
        <label for="recipients-full-name">Recipient's full name</label>
        <md-input
        id="recipients-full-name"
        class="readonly"
        value="loading..."
        type="text"
        :md-readonly="true"
        :readonly="true"
        />
      </md-field>

      <input-amount-and-currency />

      <br />

      <md-field>
        <label for="narration">Description/Narration</label>
        <md-input
        id="narration"
        type="text"
        :md-counter="50"
        :maxlength="50"
        />
      </md-field>

      <br />

      <center>
        <md-button @click="showDialog = true" type="button" class="md-elevation-4 md-primary md-raised">SEND</md-button>
      </center>

      <br v-for="x in 4" :key="x + Math.random()" />
    </div>
    <!-- end send to bank -->

    <!-- begin select method -->
    <div v-else class="select-send-method">
      <md-empty-state
        md-icon="devices_other"
        md-label="Select a valid payment destination"
        md-description="Payment destination must be either payjaro or Bank">
      <md-button @click="$store.state.showSendMoneyDialog = true" class="md-primary md-raised">Select</md-button>
    </md-empty-state>
    </div>
    <!-- end select method -->

    <!-- begin select debit method dialog -->
      <md-dialog :md-active.sync="showDialog" :md-fullscreen="true">

      <md-dialog-title
        class="md-accent bold white-text"
        >Deduct from:</md-dialog-title>

      <md-dialog-content>
          <div class="social-share-content">
              <md-radio v-model="debitPreference" value="payjaro">My PayJaro Wallet</md-radio>
              <br />
              <md-radio v-model="debitPreference" value="bank">My Bank Account</md-radio>
              <br />
              <md-radio v-model="debitPreference" value="card">My Credit/Debit card</md-radio>
          </div>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-accent white-text bold" @click="showDialog = false">Cancel</md-button>

        <md-button class="md-accent white-text bold" @click="proceed">Proceed</md-button>
      </md-dialog-actions>

      </md-dialog>
      <!-- end select debit method dialog -->

  </div>
</template>

<script>
import InputAmountAndCurrency from '@/components/InputAmountAndCurrency.vue'

export default {
  components: { InputAmountAndCurrency },
    name: "Send",
    mounted(){
      this.$store.commit('setAppbarTitle', 'Send Money')
    },
    data(){
      return {
        showDialog: false,
        debitPreference: "payjaro",
        bankName: "Bank-1",
      }
    },
    methods: {
      proceed(){
        this.showDialog = false
      }
    }
}
</script>

<style scoped>
.root{
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-to-payjaro{
  max-width: 500px;
  width: 100%;
  display: block !important;
  position: relative;
}

.select-send-method{
  width: 100%;
  max-width: 500px;
  display: block !important;
  position: relative;
}

.send-to-bank{
  max-width: 500px;
  width: 100%;
  display: block !important;
  position: relative;
}

.send-to-bank .bank-icon{
  font-size: 100px !important;
}

.send-to-bank-banner{
  font-size: 20px;
}

#select-currency{
  width: 100px !important;
  padding: 0px !important;
}

#scan-video{
  width: 100%;
  height: 300px;
  background: #000000;
  box-sizing: border-box;
  animation-name: blinkBorder;
  animation-duration: .8s;
  animation-iteration-count: infinite;
  border: thick solid #ff44ee;
  border-color: var(--primary-color);
}

@keyframes blinkBorder {
  0%, 100% {
    border: thick solid var(--primary-color);
    transform: translate3d(0, 0, 0);
    }
  50% {border: thick solid var(--accent-color);}
}
</style>