<template>
  <div class="w-100 container-fluid">
      <h1 class="text-center font-weight-bold w-100 text-success" style="color: var(--custom-primary-color) !important;">{{ $store.state.language === 'en' ? $store.state.englishStrings.contactUs : $store.state.frenchStrings.contactUs }}</h1>
      <p class="text-center w-100 font-weight-bold">{{ $store.state.language === 'en' ? $store.state.englishStrings.dontHesitateToReachOut : $store.state.frenchStrings.dontHesitateToReachOut }}</p>
      <br />
      <p><span class="p-1 bg-danger text-white font-weight-bold rounded">Note:</span> Fields labelled with asterisk (*) are mandatory, the rest are optional</p>
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

                        <b-form-row class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="country">Country*</label>
                            <b-form-select
                            id="country"
                            placeholder="Select country..."
                            autocomplete="country"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="region">State/Region*</label>
                            <b-form-select
                            id="region"
                            placeholder="Select State/Region..."
                            autocomplete="region"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="lga">District/L.G.A*</label>
                            <b-form-select
                            id="lga"
                            placeholder="Select District/L.G.A..."
                            autocomplete="country"
                            :required="true"
                            />
                          </b-form-group>
                        </b-form-row>

                        <b-form-row class="row w-100">
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
                            type="number"
                            :required="true"
                            autocomplete="zip-code"
                            />
                          </b-form-group>
                        </b-form-row>

                        <b-form-row class="row w-100">
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
                            <label for="subject">Subject*</label>
                            <b-form-input
                            id="subject"
                            placeholder="Type here..."
                            type="text"
                            :required="true"
                            />
                          </b-form-group>
                        </b-form-row>

                        <b-form-group>
                          <label for="self-description">Message*</label>
                          <b-form-textarea
                          style="height: 200px;"
                          :required="true"
                          placeholder="Type here..."
                          id="self-description"
                          />
                        </b-form-group>

                        <br />

                        <b-button
                        type="submit"
                        class="bg-green w-100"
                        >Submit</b-button>
                      </b-form>

                      <br />

                      <country-chapter />
  </div>
</template>

<script>
import CountryChapter from '@/components/CountryChapter.vue';

export default {
  name: "ContactUs",
  components: {
    CountryChapter
  }
}
</script>

<style scoped>
.bg-green{
  background-color: var(--custom-primary-color) !important;
}
</style>