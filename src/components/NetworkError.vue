<template>
    <div class="w-100 container-fluid d-flex align-items-center justify-content-center flex-column">
      <br />
      <p class="h1 font-weight-bold d-inline-block">
        <u class="d-inline-block text-danger">Network Error</u>
        <br />
        <b-iconstack aria-label="" class="center text-danger">
          <b-icon icon="link" />
          <b-icon icon="slash" />
        </b-iconstack>
      </p>
      <br />
      <br />
      <p class="h3 text-center w-100 text-black font-weight-bold">Oops, It appears your network connection is bad, please try again later</p>
      <r />
      <p class="h5 w-100 text-black text-center">Or, <b-button to="/home" class="bg-primary-color"> click here </b-button> to return to the Home Page</p>
      <br />
  </div>
</template>

<script>
export default {
    name: "NetworkError"
}
</script>

<style scoped>
</style>