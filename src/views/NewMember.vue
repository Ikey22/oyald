<template>
  <div class="container-fluid w-100">
      <h1 class="text-success w-100 text-center font-weight-bold" style="color: var(--custom-primary-color) !important;"> JOIN OYALD AS A MEMBER </h1>
      <br />
      <p><span class="p-1 bg-danger text-white font-weight-bold rounded">Note:</span> Fields labelled with asterisk (*) are mandatory, the rest are optional</p>
      <b-form
      @submit.stop.prevent
      class="card shadow-md rounded p-3 d-block text-left"
      >
                        <div class="row w-100">

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

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="middle-name">Middle/other Names</label>
                            <b-form-input
                            id="middle-name"
                            placeholder="type here..."
                            type="text"
                            />
                          </b-form-group>

                        </div>

                        <country-state-city />

                        <b-form-row class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="address1">Residential Address 1 *</label>
                            <b-form-input
                            id="address1"
                            placeholder="type here..."
                            type="text"
                            autocomplete="address-line-1"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="address2">Residential Address 2 (optional)</label>
                            <b-form-input
                            id="address2"
                            placeholder="type here..."
                            type="text"
                            autocomplete="address-line-2"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="address3">Residential Address 3 (optional)</label>
                            <b-form-input
                            id="address3"
                            placeholder="type here..."
                            type="text"
                            autocomplete="address-line-3"
                            />
                          </b-form-group>
                        </b-form-row>

                        <b-form-row class="row w-100">

                          <b-form-group class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <label for="phone-number">Phone Number*</label>
                            <b-form-input
                            id="phone-number"
                            placeholder="type here..."
                            type="tel"
                            autocomplete="tel"
                            :required="true"
                            />
                          </b-form-group>

                          <title-of-appelation class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" />

                          <b-form-group class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <label for="zip">Zip/Postal code</label>
                            <b-form-input
                            id="zip"
                            placeholder="type here..."
                            type="zip"
                            autocomplete="zip"
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
                            <label for="date-of-birth">Date of birth*</label>
                            <b-form-datepicker
                            id="date-of-birth"
                            placeholder="select date..."
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
                            <label for="membership-type">Membership Category*</label>
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
                              <b-form-select-option
                                value="associate"
                                >Associate member</b-form-select-option>
                              <b-form-select-option
                                value="honorary"
                                >Honorary member</b-form-select-option>
                            </b-form-select>
                          </b-form-group>
                        </b-form-row>

                        <b-form-group>
                          <br />
                          <label for="self-description">Brief description of yourself (including your qualifications, skills and competencies, professional and volunteer activities)*</label>
                          <b-form-textarea
                          style="height: 200px;"
                          :required="true"
                          placeholder="Type here..."
                          id="self-description"
                          />
                        </b-form-group>

                        <br />
                        
                        
                        <b-form-group>
                          <b-form-checkbox
                          class="d-inline"
                                id="toc"
                                :value="true"
                                :unchecked-value="false"
                              />
                          <label class="d-inline" for="toc">I have read and agreed to  the <b><a href="javascript:void(0)" @click="$refs.tocModal.show()"><q>terms and conditions of OYALD membership</q></a></b></label>
                        </b-form-group>


                        <br />

                        <b-button
                        type="submit"
                        id="submit"
                        variant="success"
                        class="bg-success w-100"
                        style="background-color: var(--custom-primary-color) !important;"
                        >Submit</b-button>
      </b-form>

      <br />

      <b-modal ref="tocModal">
        <header class="h1" style="color: var(--custom-primary-color) !important;">Terms and Conditions</header>
        <p>Lorem Ipsum Dolor Set Amet</p>
      </b-modal>

  </div>
</template>

<script>
import TitleOfAppelation from '@/components/TitleOfAppelation.vue';
import CountryStateCity from '@/components/CountryStateCity.vue';

export default {
    name: "NewMember",
    components: {
      TitleOfAppelation,
      CountryStateCity
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