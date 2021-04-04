<template>
  <div />
</template>

<script>
export default {
    name: 'SelectCity',
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
      this.states = this.$store.state.countries[foundIndex].states;
      this.cities = [{ name: "select Stat First!" }];
      return this.emitValue();
    },
    setState() {
      const foundIndex = this.states.findIndex(
        (state) => state.name === this.state
      );
      this.cities = this.states[foundIndex].cities;
      return this.emitValue();
    },
    setCity() {
      return this.emitValue();
    },
    emitValue() {
      const $this = this;
      const { country, state, city } = $this;

      const obj = {
        country,
        state,
        city,
      };

      $this.$emit("value", obj);
      $this.$store.state.userPreferences.country = country;
      $this.$store.state.userPreferences.state = state;
      $this.$store.state.userPreferences.city = city;
      return true;
    },
  },
}
</script>

<style>

</style>