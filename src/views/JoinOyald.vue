<template>
  <div class="container-fluid w-100">
      <h1 class="text-success w-100 text-center font-weight-bold" style="color: var(--custom-primary-color) !important;">{{ $store.state.language === 'en' ? $store.state.englishStrings.ourMembership : $store.state.frenchStrings.ourMembership }}</h1>
      <br />
      <p class="text-white text-center w-100 text-dark">Join OYALD</p>
      <br />
      <b-form
      @submit.stop.prevent
      class="card shadow-md rounded p-3 d-block text-left"
      >
                        <div class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <label for="first-name">First Name*</label>
                            <b-form-input
                            id="first-name"
                            placeholder="type here..."
                            type="text"
                            autocomplete="given-name"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <label for="surname">Surname*</label>
                            <b-form-input
                            id="surname"
                            placeholder="type here..."
                            type="text"
                            autocomplete="family-name"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="middle-name">Middle/other Names</label>
                            <b-form-input
                            id="middle-name"
                            placeholder="type here..."
                            type="text"
                            />
                          </b-form-group>
                        </div>

                        <div class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="phone-number">Phone Number*</label>
                            <b-form-input
                            id="phone-number"
                            placeholder="type here..."
                            type="tel"
                            autocomplete="tel"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="zip-code">Zip code</label>
                            <b-form-input
                            id="zip-code"
                            placeholder="type here..."
                            type="zip-code"
                            autocomplete="zip-code"
                            />
                          </b-form-group>
                        </div>

                        <div class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="email">Email*</label>
                            <b-form-input
                            id="email"
                            placeholder="type here..."
                            type="email"
                            autocomplete="email"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="date-of-birth">Date of birth</label>
                            <b-form-input
                            id="date-of-birth"
                            placeholder="type here..."
                            type="date"
                            autocomplete="date-of-birth"
                            />
                          </b-form-group>
                        </div>

                        <b-form-group>
                          <label for="passport">Passport-size photograph</label>
                          <b-form-file
                          id="passport"
                          accept="image/*"
                           />
                        </b-form-group>

                        <b-form-group>
                          <label for="self-description"></label>
                          <b-form-textarea
                          id="self-description"
                          />
                        </b-form-group>

                        <br />

                        <b-button
                        type="submit"
                        variant="success"
                        class="bg-success w-100"
                        style="background-color: var(--custom-primary-color) !important;"
                        >Submit</b-button>
                      </b-form>
  </div>
</template>

<script>
export default {
    name: "JoinOyald"
}
</script>

<style>

</style>