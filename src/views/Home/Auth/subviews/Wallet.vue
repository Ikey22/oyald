<template>
  <div>
    
    <div class="md-layout">
      <user-avatar />
    </div>
    <br />
    <center>
      <span class="wallet_username">
        <span>$username</span>
        <md-button style="padding: 0 !important; margin: 0 !important;" md-small>
          <md-icon style="padding: 0 !important; margin: 0 !important;">edit</md-icon>
          <md-tooltip>Edit your profile</md-tooltip>
        </md-button>
      </span>

      <br />

      <span>email@domain.com</span>
      <br v-for="x in 2" :key="x + Math.random()" />
      <md-ripple class="wallet-qr-code-address-wrapper">
        <span class="wallet-qr-code-intro-text">QR code <md-icon>keyboard_arrow_right</md-icon></span>
        <img @click="$router.push('/home/receive')" class="wallet-qr-code" src="@/assets/img/qr.png">
      </md-ripple>
    </center>

    <br />

    <hr />
    <div class="balance-display">
      <span class="bold">Balance</span>
      <span>
        <md-field>
          <md-input type="password" value="1000000" disabled />
        </md-field>
      </span>
    </div>
    <hr />

    <br />

    <div style="list-style-type: none; margin: 0; padding: 0;">
      <wallet-list-item v-for="x in 30" :key="x + Math.random()" />
    </div>

    <br v-for="x in 4" :key="x" />
  </div>
</template>

<script>
import UserAvatar from "@/components/UserAvatar.vue";
import WalletListItem from "@/components/WalletListItem.vue";

export default {
    name: "Wallet",
    components: {
      UserAvatar,
      WalletListItem
    },
    mounted(){
      this.$store.commit('setAppbarTitle', 'Wallet')
    }
}
</script>

<style scoped>
.wallet_username{
  font-weight: 900;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.wallet-qr-code-address-wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.wallet-qr-code-intro-text{
  font-weight: 600;
}
.wallet-qr-code{
  width: 50px;
  height: 50px;
  border: 1px solid #000000;
}

.balance-display{
  display: flex;
  width: 100% !important;
  align-items: center;
  justify-content: space-between !important;
}

.balance-display input{
  text-align: right !important;
  padding-right: 40px;
}
</style>