<template>
  <md-app id="app" md-waterfall md-mode="fixed">

      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">

          <md-button class="md-icon-button" @click="$store.state.mainSidebarOpen = !$store.state.mainSidebarOpen">
            <md-icon>sort</md-icon>
            <md-tooltip>Menu</md-tooltip>
          </md-button>

          <span class="md-title">{{ $store.state.appbarTitle }}</span>


          <div class="md-toolbar-section-end">

            <md-button v-for="item in $store.state.authUserLinks" :to="item.to" v-show="$store.state.mdPersistent" :key="JSON.stringify(item)" class="md-icon-button">
              <md-icon>{{ item.icon }}</md-icon>
              <md-tooltip>{{ item.tooltip }}</md-tooltip>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
              <md-tooltip md-direction="bottom">More Options</md-tooltip>
            </md-button>

          </div>

        </div>
      </md-app-toolbar>

      <md-app-drawer id="app-drawer" :md-persistent="$store.state.mdPersistent" :md-active.sync="$store.state.mainSidebarOpen" md-swipeable>

        <md-toolbar class="md-transparent" :md-elevation="0">
          <span>Menu</span>

          <div class="md-toolbar-section-end">
            <md-button title="close" class="md-icon-button md-dense" @click="$store.state.mainSidebarOpen = !$store.state.mainSidebarOpen">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list md-route-sync>

          <md-list-item
          v-for="item in $store.state.sidebarItems"
          :key="JSON.stringify(item)"
          :to="item.to"
          @click="$store.state.mainSidebarOpen = false"
          >
            <md-icon>{{ item.icon }}</md-icon>
            <span class="md-list-item-text">{{ item.title }}</span>
            <md-tooltip md-direction="right">{{ item.tooltip }}</md-tooltip>
          </md-list-item>

        </md-list>          
      </md-app-drawer>

      <md-app-content style="width: 100% !important; height: 100% !important;">
        <!--<keep-alive>-->
          <router-view class="component-root" />
        <!--</keep-alive>-->

        <!-- send money dialog -->
        <md-dialog :md-active.sync="$store.state.showSendMoneyDialog" :md-fullscreen="false">

      <md-dialog-title
        class="md-accent bold white-text"
        >Send to</md-dialog-title>

      <md-dialog-content>
          <div class="social-share-content">
              <md-radio v-model="sendPreference" value="payjaro">PayJaro Wallet</md-radio>
              <br />
              <md-radio v-model="sendPreference" value="bank">Bank Account</md-radio>
          </div>
      </md-dialog-content>


      <md-dialog-actions>
        <md-button class="md-accent white-text bold" @click="$store.state.showSendMoneyDialog = false">Close</md-button>

        <md-button class="md-accent white-text bold" @click="send">Send</md-button>
      </md-dialog-actions>
    </md-dialog>
    <!-- end send money dialog -->

      </md-app-content>

    </md-app>
</template>


<style>
  :root{
    --primary-color: #25ACCA; 
    --accent-color: #2e3a59;
    --white: #ffffff;
    --black: #000000;
  }

  #app{
    overflow-x: hidden;
  }
  
  .md-drawer {
    width: 230px !important;
    max-width: calc(100vw - 125px) !important;
  }

  .bold{
    font-weight: bold;
  }

  .component-root{
    width: 100% !important;
    height: 100% !important;
    margin: 0px !important;
    padding: 0px !important;
  }

  .md-primary{
    background-color: var(--primary-color) !important;
  }

  .white-text{
    color: var(--white) !important;
  }

  .md-accent{
    background-color: var(--accent-color) !important;
  }

  .bold{
    font-weight: bold !important;
  }

  .primary-link{
    color: var(--primary-color) !important;
    background-color: var(--primary-color) !important;
    border-radius: 5px;
  }

  /*********************
  Media Query Classes
**********************/
@media only screen and (max-width: 600px) {
  .hide-on-small-only, .hide-on-small-and-down {
    display: none !important;
  }
}

@media only screen and (max-width: 992px) {
  .hide-on-med-and-down {
    display: none !important;
  }
}

@media only screen and (min-width: 601px) {
  .hide-on-med-and-up {
    display: none !important;
  }
}

@media only screen and (min-width: 600px) and (max-width: 992px) {
  .hide-on-med-only {
    display: none !important;
  }
}

@media only screen and (min-width: 993px) {
  .hide-on-large-only {
    display: none !important;
  }
}

@media only screen and (min-width: 1201px) {
  .hide-on-extra-large-only {
    display: none !important;
  }
}

@media only screen and (min-width: 1201px) {
  .show-on-extra-large {
    display: block !important;
  }
}

@media only screen and (min-width: 993px) {
  .show-on-large {
    display: block !important;
  }
}

@media only screen and (min-width: 600px) and (max-width: 992px) {
  .show-on-medium {
    display: block !important;
  }
}

@media only screen and (max-width: 600px) {
  .show-on-small {
    display: block !important;
  }
}

@media only screen and (min-width: 601px) {
  .show-on-medium-and-up {
    display: block !important;
  }
}

@media only screen and (max-width: 992px) {
  .show-on-medium-and-down {
    display: block !important;
  }
}

@media only screen and (max-width: 600px) {
  .center-on-small-only {
    text-align: center;
  } 
}
</style>

<script>
export default {
  name: 'App',
  data(){
    return {
      sendPreference: "payjaro"
    }
  },
  methods: {
    send(){
      this.$store.state.showSendMoneyDialog = false;
      this.$router.push('/home/send?method=' + this.sendPreference)
    }
  },
  mounted(){
    const $this = this;
    const checkSidebar = t => {
      if (window.matchMedia('(max-width: 600px)').matches) {
        t.$store.state.mdPersistent = null
      } else {
        t.$store.state.mdPersistent = 'mini'
      }
    }

    window.addEventListener('load', () => checkSidebar($this));
    window.addEventListener('resize', () => checkSidebar($this));
  }
}
</script>