<template>
  <footer class="w-100 bg-green text-dark">
    <br />
    <h1 class="w-100 text-center font-weight-bold text-white">{{ $store.state.language === 'en' ? 'Our Vision' : 'Notre vision' }}</h1>
    <p class="text-center text-white w-100 px-3">
      {{ $store.state.language === 'en' ? 'We envision a united, peaceful, inclusive, and sustainably prosperous Africa, driven by the joint transformational efforts of Africans, across generations.' : 'Nous envisageons une Afrique unie, pacifique, inclusive et durablement prospère, portée par les efforts de transformation conjoints des Africains, à travers les générations.' }}
    </p>
    <br />
    <hr />
    <div class="container-fluid">
      <div
        class="d-flex flex-column flex-med-row flex-lg-row align-items-start justify-content-between text-yellow"
      >
        <center class="pt-4 pb-1">
          <span
            style="
              padding-left: 0 !important;
              margin-left: 0 !important;
              padding-right: 0 !important;
              margin-right: 0 !important; /*color:; var(--yellow) !important;*/
            "
            class="h2 font-weight-bold text-warning"
            >{{ $store.state.language === 'en' ? 'OYALD' : 'OJLAD' }}</span
          >
        </center>
        <center
          class="pt-4 px-3 pb-2 row d-flex flex-row align-items-center justify-content-between"
        ></center>
      </div>

      <div class="row text-light">
        <div class="col-12 col-md-6 col-lg-6 container-lg pt-2 pb-2">
          <p class="h5 u font-weight-bold">
            {{
              $store.state.language === "en"
                ? $store.state.englishStrings.stayConnected
                    .toString()
                    .toUpperCase()
                : $store.state.frenchStrings.stayConnected
                    .toString()
                    .toUpperCase()
            }}
          </p>
          <p
            v-for="(handle, index) in $store.state.socialHandles"
            :key="`social-handle-${index + 1}`"
          >
            <a class="text-white" target="_blank" :href="handle.url">
              <b-icon :icon="handle.icon"></b-icon> {{ handle.name }}
            </a>
          </p>
        </div>

        <div class="col-12 col-md-6 col-lg-6 container-lg pt-2 pb-2">
          <p class="h5 u font-weight-bold">
            {{
              $store.state.language === "en"
                ? $store.state.englishStrings.usefulLinks
                    .toString()
                    .toUpperCase()
                : $store.state.frenchStrings.usefulLinks
                    .toString()
                    .toUpperCase()
            }}
          </p>
          <p>
            <b-form inline>
              <select-language />
            </b-form>
          </p>
          <p>
            <router-link class="text-white" to="/home-page">
              <b-icon icon="caret-right-fill"></b-icon>
              {{
                $store.state.language === "en"
                  ? $store.state.englishStrings.aboutUs.toString().toUpperCase()
                  : $store.state.frenchStrings.aboutUs.toString().toUpperCase()
              }}
            </router-link>
          </p>
          <p>
            <router-link class="text-white" to="/initiatives">
              <b-icon icon="caret-right-fill"></b-icon>
              {{
                $store.state.language === "en"
                  ? $store.state.englishStrings.ourInitiatives
                      .toString()
                      .toUpperCase()
                  : $store.state.frenchStrings.ourInitiatives
                      .toString()
                      .toUpperCase()
              }}
            </router-link>
          </p>
          <p>
            <router-link class="text-white" to="/general-secretariat">
              <b-icon icon="caret-right-fill"></b-icon> {{ $store.state.language === 'en' ? 'OUR GENERAL SECRETARIAT' : 'Notre Secrétariat Général'.toUpperCase() }}
            </router-link>
          </p>
          <p>
            <router-link class="text-white" to="/country-secretaries">
              <b-icon icon="caret-right-fill"></b-icon> {{ $store.state.language === 'en' ? 'OUR NATIONAL COORDINATORS' : 'Nos Coordonnateurs Nationaux'.toUperCase() }}
            </router-link>
          </p>
          <p>
            <router-link class="text-white" to="/partners">
              <b-icon icon="caret-right-fill"></b-icon> {{ $store.state.language === 'en' ? 'OUR PARTNERS' : 'Nos partenaires' }}
            </router-link>
          </p>
          <p>
            <a>
              <b-icon icon="caret-right-fill"></b-icon>
              <JoinOYALDButton />
            </a>
          </p>
        </div>

        <!-- <div class="col-12 col-md-6 col-lg-4 container-lg pt-2 pb-2">
        <p class="h5 u">{{ $store.state.language === 'en' ? $store.state.englishStrings.contactUs.toString().toUpperCase() : $store.state.frenchStrings.contactUs.toString().toUpperCase() }}</p>
        <p> <a class="text-white" target="_blank" href="mailto:info@oyald-ojlad.org"> <b-icon icon="chat-left-dots-fill"></b-icon> info@oyald-ojlad.org </a> </p>
      </div> -->
      </div>

      <hr class="bordered border-light" />

      <div
        class="px-2 text-light d-flex flex-column flex-md-row flex-lg-row flex-xl-row align-items-center justify-content-between"
      >
        <div>
          <span class="h6 font-weight-bold text-center"
            >{{ $store.state.language === 'en' ? 'SUBSCRIBE TO OUR NEWSLETTER' : 'Abonnez-vous à notre newsletter'.toUpperCase() }}</span
          >
          <br />
          <b-overlay
            :show="$store.state.isAddingToNewsletter"
            rounded
            opacity="0.6"
            spinner-small
            class="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column"
          >
            <form
              @submit.prevent="$store.commit('submitNewsletterForm')"
              class="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column"
            >
              <div class="input-group rounded-lg">
                <input
                  required
                  v-model="$store.state.userPreferences.email"
                  type="email"
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                  :placeholder="$store.state.language === 'en' ? 'Enter your email address here' : 'Entrez votre courriel ici'"
                />
                <div class="input-group-append">
                  <button
                    type="submit"
                    role="button"
                    class="btn btn-success bg-warning input-group-text"
                  >
                    <b-icon icon="arrow-right-square-fill"></b-icon>
                  </button>
                </div>
              </div>
            </form>
          </b-overlay>
        </div>

        <span v-for="x in 3" :key="`random-span-${x}`" class="text-primary-color">&nbsp; . &nbsp;</span>

        <a
          class="text-white"
          href="mailto:info@oyald-ojlad.org"
          target="_blank"
        >
          <b-icon icon="chat-left-dots-fill" /> {{ $store.state.language === 'en' ? 'Send us an email' : ' Nous envoyer un e-mail' }}</a
        >
      </div>

      <hr class="bordered border-light" />

      <div
        class="text-light d-flex flex-crow flex-lg-row align-items-center justify-content-around"
      >
        <span>.</span>
        <small class="w-100 text-center font-weight-bold">
          &copy; {{ $store.state.language === 'en' ? 'Organisation of Young African Leaders for Development (OYALD)' : '(c) L\'Organisation des Jeunes Leaders Africains pour le Développement (OJLAD) 2021' }}
          {{ year }}
        </small>
        <!-- 2011 -->
        <router-link to="/__admin" class="text-white p-2"
          ><span> &nbsp; . &nbsp; </span></router-link
        >
      </div>
      <br />
    </div>
  </footer>
</template>

<script>
import SelectLanguage from "@/components/SelectLanguage.vue";
import JoinOYALDButton from "@/components/JoinOYALDButton.vue";

export default {
  name: "FooterComponent",
  components: {
    SelectLanguage,
    JoinOYALDButton,
  },
  data() {
    return {
      year: `${new Date().getFullYear()}`,
    };
  },
};
</script>

<style scope>
.text-yellow {
  color: #b99e00 !important;
}

.bg-green {
  background-color: #002200 !important;
}

.u {
  text-decoration: underline !important;
}
</style>
