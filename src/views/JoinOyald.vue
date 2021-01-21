<template>
  <div class="container-fluid w-100">
      <h1 class="text-success w-100 text-center font-weight-bold" style="color: var(--custom-primary-color) !important;">{{ $store.state.language === 'en' ? $store.state.englishStrings.ourMembership : $store.state.frenchStrings.ourMembership }}</h1>
      <br />
      <p class="text-white text-center w-100 text-dark">Join OYALD</p>
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
                            <label for="date-of-birth">Date of birth (18 to 50 years)</label>
                            <b-form-datepicker
                            id="date-of-birth"
                            placeholder="select date..."
                            type="date"
                            :max="new Date(`${(new Date).getFullYear() - 18}-12-31`)"
                            :required="true"
                            autocomplete="date-of-birth"
                            />
                          </b-form-group>
                        </b-form-row>

                        <b-form-row class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="passport">Passport-size photograph*</label>
                            <b-form-file
                            id="passport"
                            placeholder="Select file..."
                            accept="image/*"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="membership-type">Select membership type*</label>
                            <b-form-select
                            :required="true"
                            class="bg-white text-black"
                            id="membership-type"
                              v-model="$store.state.userPreferences.membershipType"
                            >
                              <b-form-select-option
                              :selected="true"
                              value="active"
                              >Active member</b-form-select-option>
                              <b-form-select-option value="associate">Associate member</b-form-select-option>
                            </b-form-select>
                          </b-form-group>
                        </b-form-row>

                        <b-form-group>
                          <label for="self-description">Brief description of yourself</label>
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
                        variant="success"
                        class="bg-success w-100"
                        style="background-color: var(--custom-primary-color) !important;"
                        >Submit</b-button>
                      </b-form>

      <br />

      <CountryChapter />

  </div>
</template>

<script>
import CountryChapter from '@/components/CountryChapter';

export default {
    name: "JoinOyald",
    components: {
      CountryChapter
    }
}
</script>

<style scoped>
:root{
	--custom-primary-color: #002200;
	--custom-secondary-color: #b99e00;
	--custom-gradient: linear-gradient(to right, var(--custom-green), var(--custom-gold) 80%);
}

.bg-success{
  background-color: var(--custom-primary-color) !important;
}

.text-success{
  color: var(--custom-primary-color) !important;
}
</style>