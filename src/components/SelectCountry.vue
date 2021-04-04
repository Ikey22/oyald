<template>
  <b-form-group class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
    <label for="country">Nationality*</label>
    <b-form-select
      :class="isReady ? 'disabled' : null"
      id="country"
      @change="setCountry"
      @input="setCountry"
      placeholder="Select country..."
      autocomplete="country"
      v-model="country"
      :required="true"
    >
      <b-form-select-option
        v-for="(x, index) in $store.state.countries"
        :key="`country-${index + 1}`"
        :value="x.name"
        >{{ x.name }}{{ x.emoji }}</b-form-select-option
      >
    </b-form-select>
  </b-form-group>
</template>

<script>
import FetchInBG from "worker-loader!../workers/fetch-and-parse-countries.js";

let fetchInBackground =
  new Worker("/js/fetch-and-parse-countries.worker.js") || new FetchInBG();

export default {
  name: "SelectCountry",
  data() {
    return {
      isReady: false,
      url: "/country-state-city.json", //'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json',
      countries: [{ name: "Loading..." }],
      states: [{ name: "Select Country first" }],
      cities: [{ name: "Select State first" }],
      country: "",
      state: "",
      city: "",
    };
  },
  created() {
    if (this.$store.state.countries.length < 2)
      return setTimeout(() => this.fetchData(), 10);

    return true;
  },
  methods: {
    fetchData() {
      const $this = this;

      if (!fetchInBackground) {
        fetchInBackground =
          new Worker("/js/fetch-and-parse-countries.worker.js") ||
          new FetchInBG();
      }

      fetchInBackground.onmessage = (e) => {
        //console.log(e.data);
        if (e.data) {
          if (e.data.status == "starting") {
            $this.$store.state.countries = [];
          } else if (e.data.status == "success") {
            $this.$store.state.countries.push(e.data.value);
          } else if (e.data.status == "ended") {
            $this.isREady = true;
            fetchInBackground.terminate();
            fetchInBackground = null;
          } else if (e.data.status == "error") {
            $this.$store.state.countries = [{ name: "Trying to connect" }];
            console.trace(e.data.payload);
            $this.fetchData();
          }
        }
      };

      fetchInBackground.onerror = (e) => {
        console.trace(e);
      };

      fetchInBackground.postMessage(this.url);
    },
    setCountry() {
      const foundIndex = this.$store.state.countries.findIndex(
        (country) => country.name === this.country
      );
      this.$store.state.states.states = this.$store.state.countries[
        foundIndex
      ].states;
      this.$store.state.cities = [{ name: "select Stat First!" }];
      return this.emitValue();
    },
    emitValue() {
      const $this = this;
      const { country } = $this;

      const obj = {
        country,
      };

      $this.$emit("value", obj);
      $this.$store.state.userPreferences.country = country;
      return true;
    },
  },
};
</script>
