<template>
  <div class="w-100 container-fluid">
      <h1 class="text-center font-weight-bold w-100 text-success" style="color: var(--custom-primary-color) !important;">{{ $store.state.language === 'en' ? $store.state.englishStrings.contactUs : $store.state.frenchStrings.contactUs }}</h1>
      <p class="text-center w-100 font-weight-bold"> Please drop us a note </p>
      <br />
      <p><span class="p-1 bg-danger text-white font-weight-bold rounded">Note:</span> Fields labelled with asterisk (*) are mandatory, the rest are optional</p>
      <b-form
      @submit.stop.prevent="submitContactForm"
      class="card shadow-md rounded p-3 d-block text-left"
      >
                        <b-form-row class="row w-100">

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <label for="surname">Surname*</label>
                            <b-form-input
                            id="surname"
                            v-model="$store.state.userPreferences.surName"
                            placeholder="type here..."
                            type="text"
                            autocomplete="family-name"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <label for="first-name">First Name*</label>
                            <b-form-input
                            id="first-name"
                            v-model="$store.state.userPreferences.firstName"
                            placeholder="type here..."
                            type="text"
                            autocomplete="given-name"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="middle-name">Middle/other Names</label>
                            <b-form-input
                            id="middle-name"
                            v-model="$store.state.userPreferences.middleName"
                            placeholder="type here..."
                            type="text"
                            />
                          </b-form-group>

                        </b-form-row>

                        <b-form-row class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="phone-number">Phone Number*</label>
                            <b-form-input
                            id="phone-number"
                            v-model="$store.state.userPreferences.phoneNumber"
                            placeholder="type here..."
                            type="tel"
                            autocomplete="tel"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="email">Email*</label>
                            <b-form-input
                            id="email"
                            v-model="$store.state.userPreferences.email"
                            placeholder="type here..."
                            type="email"
                            autocomplete="email"
                            :required="true"
                            />
                          </b-form-group>
                        </b-form-row>

                        <b-form-row class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="zip-code">Zip code*</label>
                            <b-form-input
                            id="zip-code"
                            v-model="$store.state.userPreferences.zipCode"
                            placeholder="type here..."
                            type="number"
                            :required="true"
                            autocomplete="zip-code"
                            />
                          </b-form-group> 

                          <title-of-appelation class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" />
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

                      <country-chapters />
  </div>
</template>

<script>
import CountryChapters from '@/components/CountryChapters.vue';
import TitleOfAppelation from '@/components/TitleOfAppelation.vue';

export default {
  name: "ContactUs",
  methods: {
    submitContactForm(){}
  },
  components: {
    CountryChapters,
    TitleOfAppelation
  }
}
</script>

<style scoped>
.bg-green{
  background-color: var(--custom-primary-color) !important;
}
</style>