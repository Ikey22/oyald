<template>
  <div class="container-fluid w-100">
    <h1 class="w-100 text-center font-weight-bold text-success">
      {{
        $store.state.language === "en"
          ? $store.state.englishStrings.ourInitiatives
          : $store.state.frenchStrings.ourInitiatives
      }}
    </h1>
    <br />
    <br />
    <div class="row w-100">
      <div class="col-12 col-md-6 col-lg-6 col-xl-6">
        <div class="accordion w-100" role="tablist">
          <b-card no-body class="mb-1 w-100">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                @click="openedInitiatives[0] = !openedInitiatives[0]"
                block
                v-b-toggle.accordion-1
                variant="sucess"
                class="bg-success text-white"
                >{{
                  $store.state.language === "en" ? "" : "Formation "
                }}
                Leaders<wbr />4<wbr />Development<wbr />
                {{ $store.state.language === "en" ? "Training" : "" }}
                <span v-if="openedInitiatives[0]" class="h5"
                  ><b-icon icon="caret-up-fill" /></span
                ><span class="h5" v-else
                  ><b-icon icon="caret-down-fill"
                /></span>
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1"
              visible
              accordion="accordion-1"
              role="tabpanel"
              class="text-justify"
            >
              <b-card-body>
                <b-card-text>{{
                  $store.state.language === "en"
                    ? "OYALD is organising a series of training and capacity development programmes to empower young people for impactful contributions to sustainable development in Africa. "
                    : "OJLAD organise une série de programmes de formation et de développement des capacités pour habiliter les jeunes à contribuer de manière significative au développement durable en Afrique. "
                }}</b-card-text>
                <b-card-text>{{
                  $store.state.language === "en"
                    ? "You can join the initiative as a trainee by filling the form below."
                    : "Vous pouvez rejoindre cette initiative en tant que stagiaire en remplissant le formulaire ci-dessous."
                }}</b-card-text>
                <hr />
                <b-form @submit.prevent="submitCapacityBuildingForm">
                  <div class="row w-100">
                    <b-form-group
                      class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                    >
                      <label for="surname">{{
                        $store.state.language === "en" ? "Surname*" : "Nom"
                      }}</label>
                      <b-form-input
                        id="surname"
                        class="w-100"
                        v-model="$store.state.userPreferences.surName"
                        :placeholder="
                          $store.state.language === 'en'
                            ? 'type here...'
                            : 'Écrire ici'
                        "
                        type="text"
                        autocomplete="family-name"
                        :required="true"
                      />
                    </b-form-group>

                    <b-form-group
                      class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                    >
                      <label for="first-name">{{
                        $store.state.language === "en"
                          ? "First Name*"
                          : "Prénom"
                      }}</label>
                      <b-form-input
                        id="first-name"
                        class="w-100"
                        v-model="$store.state.userPreferences.firstName"
                        :placeholder="
                          $store.state.language === 'en'
                            ? 'type here...'
                            : 'Écrire ici'
                        "
                        type="text"
                        autocomplete="given-name"
                        :required="true"
                      />
                    </b-form-group>

                    <b-form-group
                      class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"
                    >
                      <label for="middle-name">{{
                        $store.state.language === "en"
                          ? "Middle/other Names"
                          : "Deuxième/Autre(s) prénom(s)"
                      }}</label>
                      <b-form-input
                        id="middle-name"
                        class="w-100"
                        v-model="$store.state.userPreferences.middleName"
                        :placeholder="
                          $store.state.language === 'en'
                            ? 'type here...'
                            : 'Écrire ici'
                        "
                        type="text"
                      />
                    </b-form-group>
                  </div>

                  <div class="row w-100">
                    <select-country
                      label="Nationality"
                      class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
                      :placeholder="
                        $store.state.language == 'en'
                          ? 'Select a country'
                          : 'Sélectionner un pays'
                      "
                    />

                    <b-form-group
                      class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                    >
                      <label for="initiatives-state">{{
                        $store.state.language === "en"
                          ? "State/Region*"
                          : "État/Région*"
                      }}</label>
                      <b-form-input
                        id="initiatives-state"
                        class="w-100"
                        v-model="$store.state.userPreferences.initiativesState"
                        :placeholder="
                          $store.state.language === 'en'
                            ? 'type here...'
                            : 'Écrire ici'
                        "
                        type="text"
                        autocomplete="region"
                        :required="true"
                      />
                    </b-form-group>

                    <b-form-group
                      class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"
                    >
                      <label for="middle-name">{{
                        $store.state.language === "en"
                          ? "District/L.G.A."
                          : "Quartier/L.G.A."
                      }}</label>
                      <b-form-input
                        id="middle-name"
                        class="w-100"
                        v-model="$store.state.userPreferences.initiativesCity"
                        :placeholder="
                          $store.state.language === 'en'
                            ? 'type here...'
                            : 'Écrire ici'
                        "
                        type="text"
                        :required="true"
                        autocomplete="region"
                      />
                    </b-form-group>
                  </div>

                  <b-form-group
                    v-for="x in fieldOfInterestCount"
                    :key="`field-of-interest-${x}`"
                  >
                    <label for="field-of-interest">{{
                      $store.state.language === "en"
                        ? "Field of interest*"
                        : "Domaine d'intérêt"
                    }}</label>
                    <b-form-input
                      id="field-of-interest"
                      :placeholder="
                        $store.state.language === 'en'
                          ? 'type here...'
                          : 'Écrire ici'
                      "
                      v-model="
                        $store.state.userPreferences.fieldsOfInterest[x - 1]
                      "
                      type="text"
                      :required="true"
                    />
                  </b-form-group>

                  <b-button-toolbar class="w-100">
                    <b-button-group class="w-100">
                      <b-button
                        size="sm"
                        @click="decrementFieldOfInterestCount"
                        variant="danger"
                        :class="[canRemoveField ? '' : 'disabled']"
                        >{{
                          $store.state.language === "en"
                            ? "Remove field"
                            : "Supprimer un domaine"
                        }}</b-button
                      >
                      <b-button
                        size="sm"
                        @click="incrementFieldOfInterestCount"
                        class="bg-success"
                        :class="[canAddField ? '' : 'disabled']"
                        variant="success"
                        >{{
                          $store.state.language === "en"
                            ? "Add another field of interest"
                            : "Inclure un autre domaine d'intérêt"
                        }}</b-button
                      >
                    </b-button-group>
                  </b-button-toolbar>

                  <br />
                  <br />

                  <b-form-group>
                    <label for="email">{{
                      $store.state.language === "en"
                        ? "Email address*"
                        : "Adresse e-mail"
                    }}</label>
                    <b-form-input
                      id="email"
                      :placeholder="
                        $store.state.language === 'en'
                          ? 'type here...'
                          : 'Écrire ici'
                      "
                      type="email"
                      v-model="$store.state.userPreferences.email"
                      :required="true"
                    />
                  </b-form-group>

                  <b-button
                    type="submit"
                    variant="success"
                    class="bg-success w-100"
                    >{{
                      $store.state.language == "en" ? "Submit" : "Soumettre"
                    }}</b-button
                  >
                </b-form>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-6 col-xl-6">
        <div class="accordion w-100" role="tablist">
          <b-card no-body class="mb-1 w-100">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                @click="openedInitiatives[1] = !openedInitiatives[1]"
                block
                v-b-toggle.accordion-2
                variant="sucess"
                class="bg-success text-white"
                >{{
                  $store.state.language === "en"
                    ? "Do you know Africa?"
                    : "Connaissez-vous l'Afrique?"
                }}
                <span v-if="openedInitiatives[1]" class="h5"
                  ><b-icon icon="caret-up-fill" /></span
                ><span class="h5" v-else
                  ><b-icon icon="caret-down-fill"
                /></span>
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-2"
              visible
              accordion="accordion-2"
              role="tabpanel"
            >
              <b-card-body>
                <center class="p-l-r">
                  <p class="text-justify">
                    {{
                      $store.state.language === "en"
                        ? "In this initiative, OYALD provides regular historical information and current events updates about Africa on our social media channels. This serves as a readily available source of relevant knowledge about our African heritage, and helps to keep our social media followers up-to-date on the happenings in the continent."
                        : "Dans cette initiative, OJLAD fournit régulièrement des informations historiques et des mises à jour sur les événements actuels en Afrique sur nos canaux de médias sociaux. Cela sert de source facilement accessible de connaissances pertinentes sur notre héritage Africain, et aide à garder nos adeptes des médias sociaux au courant des événements sur le continent."
                    }}
                  </p>
                  <p class="text-justify">
                    {{
                      $store.state.language === "en"
                        ? "Kindly follow us on, and subscribe to, our social media pages/profiles to get these information updates about Africa."
                        : "Veuillez nous suivre sur, et vous abonner à, nos pages/profils de médias sociaux pour obtenir ces mises à jour sur l'Afrique."
                    }}
                  </p>
                </center>
                <br />
                <p
                  class="d-flex align-items-center justify-content-around w-100"
                >
                  <a
                    v-for="(handle, index) in $store.state.socialHandles"
                    target="_blank"
                    :key="`initiatives-social-handle-${index + 1}`"
                    :href="handle.url"
                    class="text-center"
                    variant="success"
                    style="color: #004400 !important"
                    ><b-icon font-scale="2" :icon="handle.icon"
                  /></a>
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectCountry from "../components/SelectCountry.vue";
export default {
  components: { SelectCountry },
  name: "InitiativesPage",
  methods: {
    incrementFieldOfInterestCount() {
      if (this.fieldOfInterestCount >= 5) {
        this.canAddField = false;
      } else {
        this.canAddField = true;
        ++this.fieldOfInterestCount;
      }
      this.canRemoveField = true;
    },
    decrementFieldOfInterestCount() {
      if (this.fieldOfInterestCount > 1) {
        --this.fieldOfInterestCount;
        this.canRemoveField = true;
        this.canAddField = true;
      } else if (this.fieldOfInterestCount == 2) {
        this.canRemoveField = false;
        this.canAddField = true;
      } else if (this.fieldOfInterestCount < 2) {
        this.canRemoveField = false;
        this.canAddField = true;
      } else {
        this.canAddField = false;
      }
    },
    async submitCapacityBuildingForm() {
      const $this = this;
      const fields = this.$store.state.userPreferences;

      if (
        fields.firstName &&
        fields.surName &&
        fields.fieldsOfInterest &&
        fields.email &&
        fields.country &&
        fields.state &&
        fields.city
      ) {
        const {
          firstName,
          middleName,
          surName,
          fieldsOfInterest,
          email,
          phoneNumber,
          country,
          state,
          city,
        } = fields;

        const data = {
          firstName,
          middleName: middleName || "",
          surName,
          fieldsOfInterest: fieldsOfInterest.filter(
            (i) => typeof i === "string" && i !== ""
          ),
          email,
          phoneNumber,
          country,
          state,
          city,
        };

        const serializedData = JSON.parse(JSON.stringify(data));

        const ref = $this.$firebase.firestore().collection("capacity_building");

        ref
          .where("email", "==", serializedData.email)
          .get()
          .then((snapshot) => {
            const docs = snapshot.docs;

            if (docs.length) {
              if (docs[0] && docs[0].exists) {
                // todo
              } else {
                ref
                  .add(serializedData)
                  .then(() => {
                    // todo
                  })
                  .catch(() => {
                    $this.$store.commit("showNetworkErrorModal", true);
                  });
              }
            }
          })
          .catch(() => {
            $this.$store.commit("showNetworkErrorModal", true);
          });
      } else {
        return this.$tore.commit("showIncompleteFormModal", true);
      }
    },
  },
  data() {
    return {
      canRemoveField: false,
      canAddField: true,
      fieldOfInterestCount: 1,
      fieldsOfInterest: {},
      openedInitiatives: {
        0: true,
        1: true,
      },
    };
  },
};
</script>

<style scoped>
:root {
  --custom-primary-color: #002200;
  --custom-secondary-color: #b99e00;
  --custom-gradient: linear-gradient(
    to right,
    var(--custom-green),
    var(--custom-gold) 80%
  );
}

.disabled {
  opacity: 0.5;
}

.bg-success {
  background-color: var(--custom-primary-color) !important;
}

.text-success {
  color: var(--custom-primary-color) !important;
}
</style>