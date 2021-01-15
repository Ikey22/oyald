<template>
  <div>
      <span>Landing Page</span>
      <br v-for="x in 100" :key="x" />
  </div>
</template>

<script>
export default {
    name: "LandingPage"
}
</script>

<style scoped>
</style>