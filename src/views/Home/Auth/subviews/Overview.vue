<template>
  <div>

      <div class="md-layout">
          <center class="md-layout-item md-xsmall-size-100 md-small-size-100 md-size-50 md-layout">
            <user-avatar />
          </center>

          <br  />

          <div class="md-layout-item md-xsmall-size-100 md-small-size-100 md-size-50 md-layout">
            <center class="md-layout-item" style="display: flex; align-items: center; justify-content: center;"><b>$username</b></center>
          </div>
      </div>

      <br />

      <center>
        <div class="md-layout md-gutter link-cards-and-accounts white-text">
          
          <div class="md-layout-item md-primary">
            <md-ripple>
              <md-icon class="white-text">credit_card</md-icon>
              &nbsp; 
              <span>Link your Card(s)</span>
              <md-tooltip>link your cards (credit and debit) to payjaro for easy access</md-tooltip>
            </md-ripple>
          </div>

          <div class="md-layout-item md-primary">
            <md-ripple>
              <span>Link bank account(s)</span>
              &nbsp;
              <md-icon class="white-text">account_balance</md-icon>
              <md-tooltip>Link your bank accounts to payJaro for easy access</md-tooltip>
            </md-ripple>
          </div>

        </div>
      </center>
      
      <br v-for="x in 2" :key="x + Math.random()" />

      <center>
        <div class="md-layout md-gutter top-4 white-text">
          <div v-for="item in first2categories" :key="JSON.stringify(item)" class="md-layout-item md-primary">
            <md-ripple>
              <md-icon class="white-text">{{ item.icon }}</md-icon>
              &nbsp; 
              <span>{{ item.label }}</span>
              <md-tooltip>{{ item.tooltip }}</md-tooltip>
            </md-ripple>
          </div>
        </div>
        <div class="md-layout md-gutter top-4 white-text">
          <div v-for="item in next2categories" :key="JSON.stringify(item)" class="md-layout-item md-primary">
            <md-ripple>
              <md-icon class="white-text">{{ item.icon }}</md-icon>
              &nbsp; 
              <span>{{ item.label }}</span>
              <md-tooltip>{{ item.tooltip }}</md-tooltip>
            </md-ripple>
          </div>
        </div>
      </center>

      <br v-for="x in 10" :key="x + Math.random()" />

  </div>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue';

export default {
    name: "Overview",
    mounted(){
      this.$store.commit('setAppbarTitle', 'PayJaro')
    },
    components: {
      UserAvatar
    },
    data(){
      return {
        first2categories: [
          {
            icon: "tv",
            label: "Tv Subscribtions",
            tooltip: "Purchase or renew tv subscribtion (e.g DSTV, GOTV)"
          },
          {
            icon: "phone",
            label: "Buy Airtime/Data",
            tooltip: "Buy Airtime and Data bundles for yourself and others"
          }
        ],
        next2categories: [
          {
            icon: "lightbulb_outline",
            label: "Electricity bills",
            tooltip: "Renew your electricity bi;;s"
          },
          {
            icon: "school",
            label: "Pay school fees",
            tooltip: "Easily pay your tution fees"
          }
        ]
      }
    }
}
</script>

<style scoped>
.link-cards-and-accounts.md-layout .md-layout-item, .top-4 .md-layout-item{
  margin: 4px;
  padding: 8px;
}

.link-cards-and-accounts.md-layout, .top-4{
  max-width: 600px !important;
}
</style>