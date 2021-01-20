<template>
  <b-overlay
      variant="dark"
      opacity=".95"
      rounded="sm"
      class="w-100 h-100 position-absolute"
      style="top: 0px !important; left: 0px !important;"
      >
      <template #overlay>
        <div
          class="d-flex align-items-center"
          >
          <b-spinner small type="grow" variant="warning"></b-spinner>
          <b-spinner type="grow" variant="warning"></b-spinner>
          <b-spinner small type="grow" variant="warning"></b-spinner>
          <br />
          <span class="h3 w-100 text-center text-white font-weight-bold">Loading, lease wait...</span>
        </div>
      </template>

      <div>&nbsp;</div>
    </b-overlay>
</template>

<script>
export default {

}
</script>

<style>

</style>