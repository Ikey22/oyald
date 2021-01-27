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
                    <b-button block v-b-toggle.accordion-1 variant="sucess" class="bg-success text-white">Leaders<wbr />4<wbr />Development<wbr /> Training <b-icon icon="caret-down-fill" /> </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="accordion-1" role="tabpanel">
                    <b-card-body>
                      <b-card-text>OYALD is organising a series of training and capacity development programmes to empower young people for impactful contributions to sustainable in Africa. </b-card-text>
                      <b-card-text>You can join the initiative as a trainee by filling the form below.</b-card-text>
                      <hr />
                      <b-form @submit.stop.prevent>
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

                        <b-form-group>
                            <label for="first-name">Field of interest*</label>
                            <b-form-input
                            id="field-of-interest"
                            placeholder="type here..."
                            type="text"
                            :required="true"
                            />
                        </b-form-group>

                        <b-form-group>
                            <label for="email">Email address*</label>
                            <b-form-input
                            id="email"
                            placeholder="type here..."
                            type="email"
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
                    <b-button block v-b-toggle.accordion-2 variant="sucess" class="bg-success text-white">Do you know Africa? <b-icon icon="caret-down-fill" /> </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-2" visible accordion="accordion-2" role="tabpanel">
                    <b-card-body>
                      <b-card-text class="w-100 font-weight-bold text-center">African union anthem</b-card-text>
                      <center class="p-l-r">
          <p class="text-size-15">Let us all unite and celebrate together<br />
            The victories won for our liberation<br />
            Let us dedicate ourselves to rise together<br />
            To defend our liberty and unity</p>

          <p class="text-size-15"><i>O Sons and Daughters of Africa<br />
            Flesh of the Sun and Flesh of the Sky<br />
            Let us make Africa the tree of life</i></p>

          <p class="text-size-15">Let us all unite and sing together<br />
            To uphold the bonds that frame our destiny<br />
            Let us dedicate ourselves to fight together<br />
            For lasting peace and justice on the earth</p>

          <p class="text-size-15"><i>O Sons and Daughters of Africa<br />
            Flesh of the Sun and Flesh of the Sky<br />
            Let us make Africa the tree of life</i></p>

          <p class="text-size-15">Let us all unite and toil together<br />
            To give the best we have to Africa<br />
            The cradle of mankind and fount of culture<br />
            Our pride and hope at break of dawn</p>

          <p class="text-size-15"><i>O Sons and Daughters of Africa<br />
            Flesh of the Sun and Flesh of the Sky<br />
            Let us make Africa the tree of life</i></p>
          </center>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name: "InitiativesPage"
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