<template>
<div class="phone-viewport md-layout">

      <md-button
      v-if="$route.path === '/' || $route.path === '/home/overview' || $route.path === '' || $route.path === '/home'"
      class="md-fab md-primary"
      id="send-fab"
      @click="$store.commit('showSendDialog')"
      >
        <md-ripple><md-icon>arrow_upward</md-icon></md-ripple>
        <md-tooltip>Send money</md-tooltip>
      </md-button>

      <md-button
      v-if="$route.path === '/' || $route.path === '/home/overview' || $route.path === '' || $route.path === '/home'"
      class="md-fab md-primary"
      id="receive-fab"
      to="/home/receive"
      >
        <md-ripple><md-icon>arrow_downward</md-icon></md-ripple>
        <md-tooltip>Receive money</md-tooltip>
      </md-button>

      <md-button
      v-if="$route.path === '/' || $route.path === '/home/overview' || $route.path === '' || $route.path === '/home'"
      class="md-fab md-primary"
      to="/home/send?method=payjaro"
      id="scan-to-pay-fab"
      >
        <md-ripple><md-icon>filter_center_focus</md-icon></md-ripple>
        <md-tooltip>Scan to pay</md-tooltip>
      </md-button>

      <md-bottom-bar
      v-show="!$store.state.mdPersistent"
      :style="{width: '100%', margin: 0, padding: 0}"
      class="white-text bottom-app-bar"
      md-route-sync
      >
        <md-bottom-bar-item
        v-for="item in $store.state.authUserLinks"
        :key="JSON.stringify(item) + 'in_bottom_app_bar'"
        :to="item.to"
        :md-label="item.title"
        :md-icon="item.icon.toString()"
        style="color: #ffffff !important; -webkit-text-stroke-color: #000000;"
        clas="white-text"></md-bottom-bar-item>

      </md-bottom-bar>

</div>
</template>

<script>
export default {
    name: "MobileBottomNav"
}
</script>

<style scoped>
.phone-viewport{
  z-index: 100000000 !important;
  width: 100%;
  position: fixed !important;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#send-fab, #receive-fab{
  position: fixed;
  bottom: 110px;
}

#send-fab{
  left: calc(50% - 70px)
}

#receive-fab{
  right: calc(50% - 70px)
}

@media (min-width: 601px){
  #send-fab{
    left: calc(50% - 70px + 69px/2);
  }
  #receive-fab{
    right: calc(50% - 70px - 69px/2);
  }
  #scan-to-pay-fab{
    margin-left: 69px !important;
  }
}
</style>