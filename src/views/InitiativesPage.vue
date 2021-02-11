<template>
  <div class="container-fluid w-100">

      <h1 class="w-100 text-center font-weight-bold text-success">
          {{ $store.state.language === 'en' ? $store.state.englishStrings.ourInitiatives : $store.state.frenchStrings.ourInitiatives }}
      </h1>
      <br />
      <br />
      <div class="row w-100">

          <div class="col-12 col-md-6 col-lg-6 col-xl-6">
              <div class="accordion w-100" role="tablist"> 
                <b-card no-body class="mb-1 w-100">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="sucess" class="bg-success text-white">Leaders<wbr />4<wbr />Development<wbr /> Training <b-icon icon="caret-right-fill" /> </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="accordion-1" role="tabpanel">
                    <b-card-body>
                      <b-card-text>OYALD is organising a series of training and capacity development programmes to empower young people for impactful contributions to sustainable in Africa. </b-card-text>
                      <b-card-text>You can join the initiative as a trainee by filling the form below.</b-card-text>
                      <hr />
                      <b-form @submit.prevent="submitCapacityBuildingForm">
                        <div class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <label for="first-name">First Name*</label>
                            <b-form-input
                            id="first-name"
                            class="w-100"
                            v-model="$store.state.userPreferences.firstName"
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
                            class="w-100"
                            v-model="$store.state.userPreferences.surName"
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
                            class="w-100"
                            v-model="$store.state.userPreferences.middleName"
                            placeholder="type here..."
                            type="text"
                            />
                          </b-form-group>
                        </div>

                        <country-state-city />

                        <b-form-group
                          v-for="x in fieldOfInterestCount"
                          :key="`field-of-interest-${x}`"
                            >
                            <label for="field-of-interest">Field of interest*</label>
                            <b-form-input
                            id="field-of-interest"
                            placeholder="type here..."
                            v-model="$store.state.userPreferences.fieldsOfInterest[x -1]"
                            type="text"
                            :required="true"
                            />
                        </b-form-group>

                        <b-button-toolbar class="w-100">
                          <b-button-group class="w-100">
                            <b-button @click="decrementFieldOfInterestCount" variant="danger" :class="[canRemoveField ? '' : 'disabled']">Remove field</b-button>
                            <b-button @click="incrementFieldOfInterestCount" class="bg-success" variant="success">Add another field of interest</b-button>
                          </b-button-group>
                        </b-button-toolbar>
                        <br />

                        <b-form-group>
                            <label for="email">Email address*</label>
                            <b-form-input
                            id="email"
                            placeholder="type here..."
                            type="email"
                            v-model="$store.state.userPreferences.email"
                            :required="true"
                            />
                        </b-form-group>

                        <b-button
                        type="submit"
                        variant="success"
                        class="bg-success w-100"
                        >Submit</b-button>
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
                    <b-button block v-b-toggle.accordion-2 variant="sucess" class="bg-success text-white">Do you know Africa? <b-icon icon="caret-right-fill" /> </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-2" visible accordion="accordion-2" role="tabpanel">
                    <b-card-body>
                      <center class="p-l-r">
                        <p class="text-left">In this initiative, OYALD regular historical information and current events updates about Africa on our social media channels. This serves as a readily available source of relevant knowledge about our African heritage, and helps to keep our social media followers up-to-date on the happenings in the continent.</p>
                        <p class="text-left">Kindly follow us on, and subscribe to, our social media pages/profiles to get these information updates about Africa.</p>
                        <b-form @submit.prevent="$store.commit('submitNewsletterForm')">
                          <b-form-group class="w-100">
                            <label for="newsletter-email" class="w-100 text-left">Your email</label>
                            <b-form-input
                              type="email"
                              class="w-100 text-left"
                              v-model="$store.state.userPreferences.email"
                              placeholder="Type here..." 
                              />
                          </b-form-group>
                          <br />
                          <b-overlay
                            :show="$store.state.isAddingToNewsletter"
                            rounded
                            opacity="0.6"
                            spinner-small
                            class="w-100">
                          <b-button
                            class="bg-success"
                            block
                            variant="success"
                            type="submit"
                            >Submit</b-button>
                          </b-overlay> 
                        </b-form>
                      </center>
                      <br />
                      <p class="d-flex align-items-center justify-content-around w-100">
                        <a
                          v-for="(handle, index) in $store.state.socialHandles"
                          target="_blank"
                          :key="`initiatives-social-handle-${index + 1}`"
                          :href="handle.url"
                          class="text-center"
                          variant="success"
                          style="color: #004400 !important;"
                          ><b-icon font-scale="2" :icon="handle.icon" /></a>
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
import CountryStateCity from '../components/CountryStateCity.vue'
export default {
  components: { CountryStateCity },
    name: "InitiativesPage",
    methods: {
      incrementFieldOfInterestCount(){
        ++this.fieldOfInterestCount;
        this.canRemoveField = true;
      },
      decrementFieldOfInterestCount(){
        if (this.fieldOfInterestCount > 1) {
          --this.fieldOfInterestCount;
          this.canRemoveField = true;
        } else if(this.fieldOfInterestCount == 2){
          this.canRemoveField = false;
        } else if(this.fieldOfInterestCount < 2) {
          this.canRemoveField = false;
        }
      },
      async submitCapacityBuildingForm(){
        const $this = this;
        const fields = this.$store.state.userPreferences;

        if (fields.firstName && fields.surName && fields.fieldsOfInterest && fields.email && fields.country && fields.state && fields.city){
          const { firstName, middleName,  surName, fieldsOfInterest, email, phoneNumber, country, state, city } = fields;

          const data = {
              firstName,
              middleName: middleName || '',
              surName,
              fieldsOfInterest: fieldsOfInterest.filter(i => typeof i === 'string' && i !== ''),
              email,
              phoneNumber,
              country,
              state,
              city
              };

          const serializedData = JSON.parse(JSON.stringify(data));

          const ref = $this.$firebase.firestore()
              .collection('capacity_building');

              ref.where('email', '==', serializedData.email)
                .get()
                .then(snapshot => {
                  const docs = snapshot.docs;

                  if(docs.length){
                    if (docs[0] && docs[0].exists){
                      // todo
                    } else {
                      ref.add(serializedData)
                        .then(() => {
                          // todo
                        })
                        .catch(() => {
                          $this.$store.commit('showNetworkErrorModal', true);
                        });
                    }
                  }
                })
                .catch(() => {
                  $this.$store.commit('showNetworkErrorModal', true);
                });
              
        } else {
          return this.$tore.commit('showIncompleteFormModal', true);
        }
      }
    },
    data(){
      return {
        canRemoveField: true,
        fieldOfInterestCount: 1,
        fieldsOfInterest: {}
      }
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