<template>
  <center>
    <b-form
      @submit.prevent="submitForm"
      style="max-width: 1050px !important"
      class="card rounded p-3 d-block text-left"
    >
      <b-form-row clas="row w-100">
        <title-of-appelation
          class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
        />

        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
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

        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
          <label for="date-of-birth">Date of birth*</label>
          <b-form-datepicker
            id="date-of-birth"
            v-model="$store.state.userPreferences.dob"
            placeholder="select date..."
            :required="true"
            autocomplete="date-of-birth"
          />
        </b-form-group>

        <select-country class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" />
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="address1">Residential Address 1 *</label>
          <b-form-input
            id="address1"
            v-model="$store.state.userPreferences.address1"
            placeholder="type here..."
            type="text"
            autocomplete="address-line-1"
            :required="true"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="address2">Residential Address 2 (optional)</label>
          <b-form-input
            id="address2"
            v-model="$store.state.userPreferences.address2"
            placeholder="type here..."
            type="text"
            autocomplete="address-line-2"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="address3">Residential Address 3 (optional)</label>
          <b-form-input
            id="address3"
            v-model="$store.state.userPreferences.address3"
            placeholder="type here..."
            type="text"
            autocomplete="address-line-3"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
          <b-form-input 
            type="text"
            placeholder="District/l.G.A"
            v-model="$store.state.userPreferences.city"
          />
        </b-form-group>

         <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
          <b-form-input 
            type="text"
            placeholder="State/Region"
            v-model="$store.state.userPreferences.state"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="w-100 row">
        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="zip">Zip/Postal code</label>
          <b-form-input
            id="zip"
            v-model="$store.state.userPreferences.zipCode"
            placeholder="type here..."
            type="text"
            autocomplete="zip"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="nationality">Nationality*</label>
          <b-form-select
            id="nationality"
            v-model="$store.state.userPreferences.countryOfResidence"
          >
            <b-form-select-option
              v-for="(x, index) in $store.state.countries"
              :key="`nationality-${index + 1}`"
              :value="x.name"
              >{{ x.name }}{{ x.emoji }}</b-form-select-option
            >
          </b-form-select>
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
          <label for="passport">Passport-size photograph*</label>
          <b-form-file
            id="passport"
            v-model="$store.state.userPreferences.passport"
            placeholder="Select file..."
            accept="image/*"
            :required="true"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="membership-type">Membership Category*</label>
          <b-form-select
            :required="true"
            v-model="$store.state.userPreferences.membershipCategory"
            class="bg-white text-black"
            id="membership-type"
          >
            <b-form-select-option :selected="true" value="active"
              >Active member</b-form-select-option
            >
            <b-form-select-option value="associate"
              >Associate member</b-form-select-option
            >
            <b-form-select-option value="honorary"
              >Honorary member</b-form-select-option
            >
          </b-form-select>
        </b-form-group>
      </b-form-row>

      <b-form-group>
        <br />
        <label for="self-description"
          >Brief description of yourself (including your qualifications, skills
          and competencies, professional and volunteer activities)*</label
        >
        <b-form-textarea
          style="height: 200px"
          v-model="$store.state.userPreferences.description"
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
          v-model="$store.state.userPreferences.agreedToc"
          :value="true"
          :unchecked-value="false"
          :required="true"
        />
        <label class="d-inline" for="toc"
          >I have read, and hereby agree to the
          <b
            ><a
              href="javascript:void(0)"
              @click="$store.commit(`showTOCModal`, true)"
              ><q>terms and conditions of OYALD membership</q></a
            ></b
          >*</label
        >
      </b-form-group>

      <br />

      <b-form-group>
        <b-form-checkbox
          class="d-inline"
          id="truthOfCredentials"
          v-model="$store.state.userPreferences.agreedTruthOfCredentials"
          :value="true"
          :unchecked-value="false"
          :required="true"
        />
        <label class="d-inline" for="truthOfCredentials"
          >I declare that all the information provided herein by me are, to the
          best of my knowledge, correct and truthful. I hereby indemnify OYALD
          from any issues arising from inaccuracy or falsehood in the supplied
          information.*</label
        >
      </b-form-group>

      <br />

      <b-button
        type="submit"
        id="submit"
        variant="success"
        class="bg-success w-100"
        style="background-color: var(--custom-primary-color) !important"
        >Submit</b-button
      >
    </b-form>
  </center>
</template>

<script>
import TitleOfAppelation from "@/components/TitleOfAppelation.vue";
import SelectCountry from "./SelectCountry.vue";
//import SelectState from "./SelectState.vue";
//import SelectCity from "./SelectCity.vue";

export default {
  name: "NewMemberForm",
  methods: {
    submitForm() {
      const {
        surName,
        firstName,
        middleName,
        dob,
        address1,
        address2,
        address3,
        zipCode,
        phoneNumber,
        email,
        passport,
        membershipCategory,
        description,
        country,
        city,
        state,
        agreedToc,
        agreedTruthOfCredentials,
      } = this.$store.state.userPreferences;

      const params = {
        surName,
        firstName,
        middleName,
        dob,
        address1,
        address2,
        address3,
        zipCode,
        phoneNumber,
        email,
        passport,
        membershipCategory,
        description,
        country,
        city,
        state,
        agreedToc,
        agreedTruthOfCredentials,
      };

      this.action(params);
    },
  },
  components: {
    TitleOfAppelation,
    SelectCountry,
    //SelectState,
    //SelectCity,
  },
  props: {
    action: {
      type: Function,
      required: true,
    },
  },
};
</script>
