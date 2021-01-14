<template>
  <div>
      <center>
          <md-field class="max-width-500" :md-clearable="true">
              <label>Search</label>
              <span class="md-prefix">
                  <md-icon>search</md-icon>
              </span>
              <md-input
              placeholder="Search with username, link or email"
              v-model="username"
              type="text"
              />
          </md-field>
      </center>

      <center>
          <img class="qr max-width-500" src="@/assets/img/qr.svg">
      </center>

      <br />

      <center>
          <md-button @click="shareOnSocialMedia" class="mb-primary md-raised md-primary bold">SHARE QR CODE / REQUEST PAYMENT</md-button>

          <input-amount-and-currency
          class="max-width-500"
           />

          <md-field class="max-width-500">
              <label>Message / Narration (optional)</label>
              <span class="md-prefix">
                  <md-icon>chat_bubble_outline</md-icon>
              </span>
              <md-input
              md-counter="50"
              maxlength="50"
              />
          </md-field>

      </center>

      <br />

      <br v-for="x in 2" :key="x + Math.random()" />

      <md-dialog :md-active.sync="showSocialDialog" :md-fullscreen="false">

      <md-dialog-title
        class="md-accent bold white-text"
        >Share with</md-dialog-title>

      <md-dialog-content>
          <div class="social-share-content">
              <a target="_blank" href="https://wa.me/share">
                <img src="@/assets/img/share_on_whatsapp.svg" class="social-share-icon">
                <md-tooltip>whatsapp</md-tooltip>
              </a>

              <a target="_blank" href="https://facebook.com/share.php">
                <img src="@/assets/img/share_on_facebook.svg" class="social-share-icon">
                <md-tooltip>facebook</md-tooltip>
              </a>

              <a target="_blank" href="https://instagram.com/share.php">
                <img src="@/assets/img/share_on_instagram.svg" class="social-share-icon">
                <md-tooltip>instagram</md-tooltip>
              </a>

              <a target="_blank" href="https://linkedin.com/share.php">
                <img src="@/assets/img/share_on_linkedin.svg" class="social-share-icon">
                <md-tooltip>linkedin</md-tooltip>
              </a>

              <a target="_blank" href="https://twitter.com/share.php">
                <img src="@/assets/img/share_on_twitter.svg" class="social-share-icon">
                <md-tooltip>twitter</md-tooltip>
              </a>

              <a target="_blank" href="https://telegram.com/share.php">
                <img src="@/assets/img/share_on_telegram.svg" class="social-share-icon">
                <md-tooltip>telegram</md-tooltip>
              </a>
          </div>
      </md-dialog-content>


      <md-dialog-actions>
        <md-button class="md-accent white-text bold" @click="showSocialDialog = false">cancel</md-button>
      </md-dialog-actions>
    </md-dialog>


  </div>
</template>

<script>
import InputAmountAndCurrency from '../../../../components/InputAmountAndCurrency.vue';
export default {
  components: { InputAmountAndCurrency },
    name: "Receive",
    data(){
        return {
            showSocialDialog: false,
            username: ""
        }
    },
    methods: {
        shareOnSocialMedia(){
            const $this = this;
            if ($this.username && $this.username.length){
                $this.showSocialDialog = false;
            }
            else {
                $this.showSocialDialog = true;
            }
        }
    },
    mounted(){
      this.$store.commit('setAppbarTitle', 'Receive')
    }
}
</script>

<style scoped>
.qr{
    border: thin solid var(--black);
    object-fit: contain;
}

.social-share-content{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.social-share-icon{
    width: 50px;
    border-radius: 50%;
    margin: 8px;
}

.max-width-500{
    max-width: 500px;
}
</style>