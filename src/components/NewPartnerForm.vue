<template>
  <center> 
      <b-form
      @submit.prevent="submitForm"
      style="max-width: 1050px !important;" 
      class="card shadow-lg rounded p-3 d-block text-left"
      >
                        <b-form-row class="row w-100">

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label for="surname">Name of Company/Orrganisation*</label>
                            <b-form-input
                            id="company-name"
                            v-model="$store.state.userPreferences.companyName"
                            placeholder="type here..."
                            type="text"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <label for="company-category">Type/Category of Organisation*</label>
                            <b-form-input
                            id="company-category"
                            v-model="$store.state.userPreferences.companyCategory"
                            placeholder="type here..."
                            type="text"
                            :required="true"
                            />
                          </b-form-group>

                        </b-form-row>

                        <country-state-city />



                        <b-form-row class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="address1">Office Address 1*</label>
                            <b-form-input
                            id="address1"
                            v-model="$store.state.userPreferences.companyAddress1"
                            placeholder="type here..."
                            type="text"
                            autocomplete="address-line-1"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="address2">Office Address 2 (optional)</label>
                            <b-form-input
                            id="address2"
                            v-model="$store.state.userPreferences.companyAddress2"
                            placeholder="type here..."
                            type="text"
                            autocomplete="address-line-2"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="address3">Office Address 3 (optional)</label>
                            <b-form-input
                            id="address3"
                            v-model="$store.state.userPreferences.companyAddress3"
                            placeholder="type here..."
                            type="text"
                            autocomplete="address-line-3"
                            />
                          </b-form-group>
                        </b-form-row>

                        <b-form-row class="w-100 row">
                          
                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="zip">Zip/Postal code</label>
                            <b-form-input
                            id="zip"
                            v-model="$store.state.userPreferences.zipCode"
                            placeholder="type here..."
                            type="text"
                            autocomplete="text"
                            />
                          </b-form-group>

                        </b-form-row>

                        <b-form-row class="row w-100">

                          <b-form-group class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <label for="phone-number">Official Phone Number*</label>
                            <b-form-input
                            id="phone-number"
                            v-model="$store.state.userPreferences.companyPhoneNumber"
                            placeholder="type here..."
                            type="tel"
                            autocomplete="tel"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <label for="company-email">Official Email</label>
                            <b-form-input
                            id="company-email"
                            v-model="$store.state.userPreferences.companyEmail"
                            placeholder="type here..."
                            type="email"
                            autocomplete="zip"
                            />
                          </b-form-group>

                        </b-form-row>

                        <b-form-row class="w-100">

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="company-website">Organisation's  website link</label>
                            <b-form-input
                            id="company-website"
                            v-model="$store.state.userPreferences.companyWebsite"
                            placeholder="type here..."
                            type="url"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="company-facebook">Link to Facebook page</label>
                            <b-form-input
                            id="company-facebook"
                            v-model="$store.state.userPreferences.companyFacebook"
                            placeholder="type here..."
                            type="url"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="company-linkedin">Link to Linkedin profile</label>
                            <b-form-input
                            id="company-linkedin"
                            v-model="$store.state.userPreferences.companyLinkedin"
                            placeholder="type here..."
                            type="url"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="company-instagram">Link to Instagram profile</label>
                            <b-form-input
                            id="company-instagram"
                            v-model="$store.state.userPreferences.companyInstagram"
                            placeholder="type here..."
                            type="url"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="company-twitter">Link to Twitter profile</label>
                            <b-form-input
                            id="company-Twitter"
                            v-model="$store.state.userPreferences.companyTwitter"
                            placeholder="type here..."
                            type="url"
                            />
                          </b-form-group>

                        </b-form-row>

                        <b-form-row class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="company-logo">Company logo*</label>
                            <b-form-file
                            id="company-logo"
                            v-model="$store.state.userPreferences.companyLogo"
                            placeholder="Select file..."
                            accept="image/*"
                            :required="true"
                            />
                          </b-form-group>
                        </b-form-row>

                        <b-form-group>
                          <br />
                          <label for="notes">Additional notes</label>
                          <b-form-textarea
                          style="height: 200px;"
                            v-model="$store.state.userPreferences.companyNotes"
                          placeholder="Type here..."
                          id="notes"
                          :required="true"
                          />
                        </b-form-group>

                        <b-form-row class="w-100 row">

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-16">
                            <label for="company-officer">Name of organisation's officer proposing the partnership with OYALD*</label>
                            <b-form-input
                            id="company-officer"
                            v-model="$store.state.userPreferences.companyOfficer"
                            placeholder="type here..."
                            type="text"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-16">
                            <label for="company-officer-position">Position of the Offcer*</label>
                            <b-form-input
                            id="company-officer-position"
                            v-model="$store.state.userPreferences.companyOfficerPosition"
                            placeholder="type here..."
                            type="text"
                            :required="true"
                            />
                          </b-form-group>

                        </b-form-row>

                        <br />
                        
                        
                        <b-form-group>
                          <b-form-checkbox
                          class="d-inline"
                                id="trueRepresentative"
                                v-model="$store.state.userPreferences.trueRepresentative"
                                :value="true"
                                :unchecked-value="false"
                                :checked-value="true"
                                :required="true"
                              />
                          <label class="d-inline" for="trueRepresentative">I hereby confirm that I am a representative of the above named organisation and that I am authorized to propose partnership on with OYALD on the organisation's behalf*</label>
                          
                        </b-form-group>


                        <br />
                        
                        
                        <b-form-group>
                          <b-form-checkbox
                          class="d-inline"
                                id="truthOfCredentials"
                                v-model="$store.state.userPreferences.agreedTruthOfCredentials"
                                :value="true"
                                :unchecked-value="false"
                                :checked-value="true"
                                :required="true"
                              />
                          <label class="d-inline" for="truthOfCredentials">I declare that all the information provided herein by me are, to the best of my knowledge, correct and truthful. I hereby indemnify OYALD from any issues arising from inaccuracy or falsehood in the supplied information.*</label>


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
      </center>
</template>

<script>
import CountryStateCity from '@/components/CountryStateCity.vue';

export default {
  components: { CountryStateCity },
  methods: {
    submitForm(){
      const params = {};
      this.action(params);
    }
  },
  props: {
    action: {
      type: Function,
      required: true
    }
  },
    name: "NwePartnerForm"
}
</script>

<style scoped>
</style>