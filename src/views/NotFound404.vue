<template>
  <div class="w-100 container-fluid d-flex align-items-center justify-content-center flex-column">
      <br />
      <p class="h1 font-weight-bold d-inline-block">
        <img src="@/assets/img/404.svg" width="200"  class="h1" alt="404" />
        <br />
        <!-- <b-iconstack aria-label="" class="center">
          <b-icon class="text-black" icon="link" />
          <b-icon class="text-primary-color" icon="slash" />
        </b-iconstack> -->
      </p>
      <br />
      <br />
      <p class="h3 text-center w-100 text-black font-weight-bold">Oops, It appears the link you followed is broken</p>
      <r />
      <p class="h5 w-100 text-black text-center">Please <b-button to="/home" class="bg-primary-color"> click here </b-button> to return to the Home Page</p>
      <br />
  </div>
</template>

<script>
export default {
    name: "NotFound404"
}
</script>

<style scoped>
</style>