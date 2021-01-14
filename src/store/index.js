import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    primaryColor: "#25ACCA",
    appName: "PayJaro",
    appbarTitle: "PayJaro",
    mainSidebarOpen: false,
    currentUser: true,
    sidebarItems: [
      {
        title: "Get started",
        icon: "home",
        to: "/home",
        tooltip: "PayJaro Home Page"
      },
      {
        title: "Help & Support",
        icon: "chat_bubble_outline",
        to: "/help-and-support",
        tooltip: "Get help/support"
      },
      {
        title: "Terms of Service",
        icon: "chrome_reader_mode",
        to: "/terms-of-service",
        tooltip: "Terms and conditions / Privay policy"
      },
      {
        title: "Report a problem",
        icon: "warning",
        to: "/report-a-problem",
        tooltip: "Report a bug"
      },
      {
        title: "FAQs",
        icon: "info_outline",
        tooltip: "Frequently asked questions"
      },
      {
        title: "My QR code",
        icon: "qr_code_scanner",
        tooltip: "Your Unique QR code"
      },
      {
        title: "Logout",
        icon: "exit_to_app",
        tooltip: "Logout now"
      }
    ],
    authUserLinks: [
      {
        title: "Overview",
        icon: "dashboard",
        tooltip: "Overview",
        to: "/home/overview"
      },
      {
        title: "Wallet",
        icon: "account_balance_wallet",
        tooltip: "my wallet balance / transaction history",
        to: "/home/wallet"
      },
      {
        title: "Rewards",
        icon: "star",
        tooltip: "My Rewards / Cashback",
        to: "/home/rewards"
      },
      {
        title: "Profile",
        icon: "account_circle",
        tooltip: "My Profile",
        to: "/home/profile"
      }
    ],
    mdPersistent: "mini",
    showSendMoneyDialog: false
  },
  mutations: {
    setAppbarTitle(state, title){
      state.appbarTitle = title
    },

    showSendDialog(state){
      state.showSendMoneyDialog = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
