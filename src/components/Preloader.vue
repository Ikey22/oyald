<template>
  <div class="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
    <br v-for="x in 4" :key="x/3" />
    <b-spinner />
    <br v-for="x in 4" :key="x/2" />
  </div>
</template>

<script>
export default {
  name: "Preloader"
}
</script>