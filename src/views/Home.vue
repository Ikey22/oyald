<template>
  <div id="home">
    <div v-if="$store.state.currentUser" id="auth-home">
      <auth-home />
    </div>
    <div v-else id="guest-home">
      <GuestHome />
    </div>

    <mobile-bottom-nav />

  </div>
</template>

<script>
import MobileBottomNav from '@/components/MobileBottomNav.vue'
import GuestHome from '@/views/Home/Guest/GuestHome.vue';
import AuthHome from '@/views/Home/Auth/AuthHome.vue';
// @ is an alias to /src

export default {
  components: {
    MobileBottomNav,
    GuestHome,
    AuthHome
    },
  name: 'Home'
}
</script>

<style scoped>
</style>
