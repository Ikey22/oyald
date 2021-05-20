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
          <label for="surname">{{ $store.state.language === 'en' ? 'Surname*' : 'Nom' }}</label>
          <b-form-input
            id="surname"
            v-model="$store.state.userPreferences.surName"
            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
            type="text"
            autocomplete="family-name"
            :required="true"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="first-name">{{ $store.state.language === 'en' ? 'First Name*' : 'Prénom' }}</label>
          <b-form-input
            id="first-name"
            v-model="$store.state.userPreferences.firstName"
            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
            type="text"
            autocomplete="given-name"
            :required="true"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="middle-name">{{ $store.state.language === 'en' ? 'Middle/other Names' : 'Deuxième/Autre(s) prénom(s)' }}</label>
          <b-form-input
            id="middle-name"
            v-model="$store.state.userPreferences.middleName"
            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
            type="text"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="date-of-birth">{{ $store.state.language === 'en' ? 'Date of birth*' : 'Date de Naissance' }}</label>
          <b-form-datepicker
            id="date-of-birth"
            v-model="$store.state.userPreferences.dob"
            :placeholder="$store.state.language === 'en' ? 'select date...' : 'Sélectionner une date'"
            :required="true"
            autocomplete="date-of-birth"
          />
        </b-form-group>

        <select-country label="Nationality" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" />
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="address1">{{ $store.state.language === 'en' ? 'Residential Address 1 *' : 'Adresse du Domicile 1' }}</label>
          <b-form-input
            id="address1"
            v-model="$store.state.userPreferences.address1"
            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
            type="text"
            autocomplete="address-line-1"
            :required="true"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="address2">{{ $store.state.language === 'en' ? 'Residential Address 2 (optional)' : 'Adresse du Domicile 2' }}</label>
          <b-form-input
            id="address2"
            v-model="$store.state.userPreferences.address2"
            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
            type="text"
            autocomplete="address-line-2"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="address3">{{ $store.state.language === 'en' ? 'Residential Address 3 (optional)' : 'Adresse du Domicile 3 (facultatif)' }}</label>
          <b-form-input
            id="address3"
            v-model="$store.state.userPreferences.address3"
            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
            type="text"
            autocomplete="address-line-3"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
          <label>{{ $store.state.language === 'en' ? 'District/L.G.A' : 'Quartier/L.G.A.' }}</label>
          <b-form-input 
            type="text"
            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
            v-model="$store.state.userPreferences.city"
          />
        </b-form-group>

         <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
           <label>{{ $store.state.language === 'en' ? 'State/Region' : 'État/Région' }}</label>
          <b-form-input 
            type="text"
            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
            v-model="$store.state.userPreferences.state"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="w-100 row">
        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="zip">{{ $store.state.language === 'en' ? 'Zip/Postal code' : 'Code Zip/postal' }}</label>
          <b-form-input
            id="zip"
            v-model="$store.state.userPreferences.zipCode"
            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
            type="text"
            autocomplete="zip"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="nationality">{{ $store.state.language === 'en' ? 'Country of Residence*' : 'Pays de Résidence' }}</label>
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
          <label for="phone-number">{{ $store.state.language === 'en' ? 'Phone Number*' : 'Numéro de téléphone' }}</label>
          <b-form-input
            id="phone-number"
            v-model="$store.state.userPreferences.phoneNumber"
            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
            type="tel"
            autocomplete="tel"
            :required="true"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="email">{{ $store.state.language === 'en' ? 'Email*' : 'E-mail' }}</label>
          <b-form-input
            id="email"
            v-model="$store.state.userPreferences.email"
            :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
            type="email"
            autocomplete="email"
            :required="true"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="passport">{{ $store.state.language === 'en' ? 'Passport-size photograph*' : 'Photo de format passeport' }}</label>
          <b-form-file
            id="passport"
            v-model="$store.state.userPreferences.passport"
            :placeholder="$store.state.language === 'en' ? 'Select file...' : 'Sélectionner une Image'"
            accept="image/png,image/jpg,image/jpeg,image/webp,image/svg"
            :required="true"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="membership-type">{{ $store.state.language === 'en' ? 'Membership Category*' : 'Catégorie d\'Adhésion' }}</label>
          <b-form-select
            :required="true"
            v-model="$store.state.userPreferences.membershipCategory"
            class="bg-white text-black"
            id="membership-type"
          >
            <b-form-select-option :selected="true" value="active"
              >{{ $store.state.language === 'en' ? 'Active member' : 'Membre Actif' }}</b-form-select-option
            >
            <b-form-select-option value="associate"
              >{{ $store.state.language === 'en' ? 'Associate member' : 'Membre Associé' }}</b-form-select-option
            >
            <b-form-select-option value="honorary"
              >{{ $store.state.language === 'en' ? 'Honorary member' : 'Membre Honoraire' }}</b-form-select-option
            >
          </b-form-select>
        </b-form-group>
      </b-form-row>

      <b-form-group>
        <br />
        <label for="self-description"
          >{{ $store.state.language === 'en' ? 'Brief description of yourself (including your qualifications, skills and competencies, professional and volunteer activities)*' : 'Description brève de vous-même (y compris vos qualifications, aptitudes et compétences, activités professionnelles et bénévoles)' }}</label
        >
        <b-form-textarea
          style="height: 200px"
          v-model="$store.state.userPreferences.description"
          :required="true"
          :placeholder="$store.state.language === 'en' ? 'type here...' : 'Écrire ici'"
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
          >{{ $store.state.language === 'en' ? 'I have read, and hereby agree to the' : 'J\'ai lu, et j\'accepte par la présente, les ' }}
          <b
            ><a
              href="javascript:void(0)"
              @click="$store.commit(`showTOCModal`, true)"
              >{{ $store.state.language === 'en' ? 'terms and conditions of OYALD membership' : 'termes et conditions d\'adhésion à l\'OJLAD' }}</a
            ></b
          ></label
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
          >{{ $store.state.language === 'en' ? `I declare that all the information provided herein by me are, to the
          best of my knowledge, correct and truthful. I hereby indemnify OYALD
          from any issues arising from inaccuracy or falsehood in the supplied
          information.*` : `Je déclare que toutes les informations fournies ici par moi sont,
          à ma connaissance, correctes et véridiques. Par la présente, j'indemnise l'OJLAD de tout
          problème résultant de l'inexactitude ou du mensonge dans les informations fournies.` }}</label
        >
      </b-form-group>

      <br />

      <b-button
        type="submit"
        id="submit"
        variant="success"
        class="bg-success w-100"
        style="background-color: var(--custom-primary-color) !important"
        >{{ $store.state.language === 'en' ? 'Submit' : 'Soumettre' }}</b-button
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
