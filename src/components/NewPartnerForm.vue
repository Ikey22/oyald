<template>
  <center>
    <b-form
      @submit.prevent="submitForm"
      style="max-width: 1050px !important"
      class="card rounded p-3 d-block text-left"
    >
      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="surname">{{
            $store.state.language === "en"
              ? "Name of Organisation*"
              : "Nom de l’organisation"
          }}</label>
          <b-form-input
            id="company-name"
            v-model="$store.state.userPreferences.companyName"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="text"
            :required="true"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="company-category">{{
            $store.state.language == "en"
              ? "Type/Category of Organisation*"
              : " Catégorie d'Organisation"
          }}</label>
          <b-form-input
            id="company-category"
            v-model="$store.state.userPreferences.companyCategory"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="text"
            :required="true"
          />
        </b-form-group>

        <select-country
          :label="
            $store.state.language == 'en'
              ? 'Country where Organisation is registered'
              : 'Pays où l’organisation est enregistrée'
          "
          class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
        />
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="address1">{{
            $store.state.language == "en"
              ? "Organisation's Office Address 1*"
              : "Adresse du bureau de l’organisation 1"
          }}</label>
          <b-form-input
            id="address1"
            v-model="$store.state.userPreferences.companyAddress1"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="text"
            autocomplete="address-line-1"
            :required="true"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="address2">{{
            $store.state.language == "en"
              ? "Organisation's Office Address 2 (optional)"
              : "Adresse du bureau de l’organisation 2 (facultative)"
          }}</label>
          <b-form-input
            id="address2"
            v-model="$store.state.userPreferences.companyAddress2"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="text"
            autocomplete="address-line-2"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="address3">{{
            $store.state.language == "en"
              ? "Organisation's Office Address 3 (optional)"
              : "Adresse du bureau de l’organisation 3 (facultative)"
          }}</label>
          <b-form-input
            id="address3"
            v-model="$store.state.userPreferences.companyAddress3"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="text"
            autocomplete="address-line-3"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="w-100 row">
        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="district-lga">{{
            $store.state.language == "en"
              ? "District/L.G.A *"
              : "Quartier/L.G.A"
          }}</label>
          <b-form-input
            id="district-lga"
            type="text"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            :required="true"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="state-region">{{
            $store.state.language == "en" ? "State/Region *" : "État/Région"
          }}</label>
          <b-form-input
            id="state-region"
            type="text"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            :required="true"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="w-100 row">
        <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="zip">{{
            $store.state.language == "en"
              ? "Zip/Postal code"
              : "Code zip/postal"
          }}</label>
          <b-form-input
            id="zip"
            v-model="$store.state.userPreferences.zipCode"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="text"
            autocomplete="text"
          />
        </b-form-group>

        <select-country
          :label="
            $store.state.language == 'en'
              ? 'Country of Domicile'
              : 'Pays de résidence'
          "
          class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
        />
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <label for="phone-number">{{
            $store.state.language == "en"
              ? "Organisation's Official Phone Number*"
              : "Numéro de téléphone officiel de l’organisation"
          }}</label>
          <b-form-input
            id="phone-number"
            v-model="$store.state.userPreferences.companyPhoneNumber"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="tel"
            autocomplete="tel"
            :required="true"
          />
        </b-form-group>

        <b-form-group class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <label for="company-email">{{
            $store.state.language == "en"
              ? "Organisation's Official Email"
              : "Courriel officiel de l’organisation"
          }}</label>
          <b-form-input
            id="company-email"
            v-model="$store.state.userPreferences.companyEmail"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="email"
            autocomplete="zip"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="w-100">
        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="company-website">{{
            $store.state.language == "en"
              ? "Link to Organisation's website (if any)"
              : "Lien vers le site web de l’organisation (le cas échéant)"
          }}</label>
          <b-form-input
            id="company-website"
            v-model="$store.state.userPreferences.companyWebsite"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="url"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="company-facebook">{{
            $store.state.language == "en"
              ? "Link to Organisation'd Facebook page (if any)"
              : "Profile Facebook de l’organisation (le cas échéant)"
          }}</label>
          <b-form-input
            id="company-facebook"
            v-model="$store.state.userPreferences.companyFacebook"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="url"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="company-linkedin">{{
            $store.state.language == "en"
              ? "Link to Organisation's Linkedin profile (if any)"
              : "Lien Linkedin de l’organisation (le cas échéant)"
          }}</label>
          <b-form-input
            id="company-linkedin"
            v-model="$store.state.userPreferences.companyLinkedin"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="url"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="company-instagram">{{
            $store.state.language == "en"
              ? "Link to Organisation's Instagram profile (if any)"
              : "Lien instagram de l’organisation (le cas échéant)"
          }}</label>
          <b-form-input
            id="company-instagram"
            v-model="$store.state.userPreferences.companyInstagram"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="url"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="company-twitter">{{
            $store.state.language == "en"
              ? "Link to Organisation's Twitter account (if any)"
              : "Lien Twitter de l’organisation (le cas échéant)"
          }}</label>
          <b-form-input
            id="company-Twitter"
            v-model="$store.state.userPreferences.companyTwitter"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="url"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="company-youtube">{{
            $store.state.language == "en"
              ? "Link to Organisation's Youtube channel (if any)"
              : "Lien YouTube de l’organisation (le cas échéant)"
          }}</label>
          <b-form-input
            id="company-youtube"
            v-model="$store.state.userPreferences.companyYoutube"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="url"
          />
        </b-form-group>
      </b-form-row>

      <b-form-row class="row w-100">
        <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="company-logo">{{
            $store.state.language == "en"
              ? "Organisation's logo*"
              : "Le logo de l’organisation"
          }}</label>
          <b-form-file
            id="company-logo"
            v-model="$store.state.userPreferences.companyLogo"
            :placeholder="
              $store.state.language === 'en'
                ? 'Select file...'
                : 'Sélectionner une Image'
            "
            :browse-text="$store.state.language == 'en' ? 'Browse' : 'Parcourir'"
            accept="image/png,image/jpg,image/jpeg,image/webp,image/svg"
            :required="true"
          />
        </b-form-group>
      </b-form-row>

      <b-form-group>
        <br />
        <label for="notes">{{
          $store.state.language == "en"
            ? "Brief Organisational profile"
            : "Bref aperçu du profile de l’organisation"
        }}</label>
        <b-form-textarea
          style="height: 200px"
          v-model="$store.state.userPreferences.companyNotes"
          :placeholder="
            $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
          "
          id="notes"
          :required="true"
        />
      </b-form-group>

      <b-form-row class="w-100 row">
        <b-form-group class="col-12 col-sm-12 col-md-7 col-lg-6 col-xl-7">
          <label style="font-size: 15.5px;" for="company-officer">{{
            $store.state.language == "en"
              ? "Name of organisation's Officer proposing the partnership with OYALD*"
              : "Nom du Responsable de l’organisation proposant un partenariat avec OJLAD*"
          }}</label>
          <b-form-input
            id="company-officer"
            v-model="$store.state.userPreferences.companyOfficer"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
            type="text"
            :required="true"
          />
        </b-form-group>

        <b-form-group class="col-12 col-sm-12 col-md-5 col-lg-6 col-xl-5">
          <label for="company-officer-position">{{
            $store.state.language == "en"
              ? "Designation of the Officer*"
              : "Désignation du Responsable"
          }}</label>
          <b-form-input
            id="company-officer-position"
            v-model="$store.state.userPreferences.companyOfficerPosition"
            :placeholder="
              $store.state.language === 'en' ? 'type here...' : 'Écrire ici'
            "
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
        <label class="d-inline" for="trueRepresentative">{{
          $store.state.language == "en"
            ? `I, the above named officer, hereby affirm that I am a representative
          of the above named organisation, and that I have the authority to
          propose partnership with OYALD on the organisation's behalf*`
            : `Le responsable susmentionné, je déclare par la présente que
            je suis un représentant de l’organisation susmentionnée, et
            que j’ai le pouvoir de proposer un partenariat avec l'OJLAD
            au nom de  l'organisation.`
        }}</label>
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
        <label class="d-inline" for="truthOfCredentials">{{
          $store.state.language == "en"
            ? `I declare that all the information provided herein by me are, to the
          best of my knowledge, correct and truthful. I hereby indemnify OYALD
          from any issues arising from inaccuracy or falsehood in the supplied
          information.*`
            : `Je déclare que toutes les informations fournies ici sont à ma
            connaissance correctes et véridiques. Par le présent, j’indemnise
            l'OJLAD de tout problème résultant d’une inexactitude ou d’un
            mensonge dans les informations fournies.`
        }}</label>
      </b-form-group>

      <br />

      <b-button
        type="submit"
        id="submit"
        variant="success"
        class="bg-success w-100"
        style="background-color: var(--custom-primary-color) !important"
        >{{ $store.state.language == "en" ? `Submit` : `Soumettre` }}</b-button
      >
    </b-form>
  </center>
</template>

<script>
import SelectCountry from "@/components/SelectCountry.vue";

export default {
  components: {
    SelectCountry,
  },
  methods: {
    submitForm() {
      const {
        companyName,
        companyCategory,
        companyAddress1,
        companyAddress2,
        companyAddress3,
        zipCode,
        companyPhoneNumber,
        companyEmail,
        companyWebsite,
        companyFacebook,
        companyInstagram,
        companyLinkedin,
        companyTwitter,
        companyNotes,
        companyOfficer,
        companyOfficerPosition,
        trueRepresentative,
        agreedTruthOfCredentials,
        companyLogo,
        country,
        state,
        city,
      } = this.$store.state.userPreferences;

      const params = {
        companyName,
        companyCategory,
        companyAddress1,
        companyAddress2,
        companyAddress3,
        zipCode,
        companyPhoneNumber,
        companyEmail,
        companyWebsite,
        companyFacebook,
        companyInstagram,
        companyLinkedin,
        companyTwitter,
        companyNotes,
        companyOfficer,
        companyOfficerPosition,
        trueRepresentative,
        agreedTruthOfCredentials,
        companyLogo,
        country,
        state,
        city,
      };

      this.action(params);
    },
  },
  props: {
    action: {
      type: Function,
      required: true,
    },
  },
  name: "NwePartnerForm",
};
</script>

<style scoped>
</style>