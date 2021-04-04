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
export default {
  name: "SelectCountry",
  methods: {
      
    setCountry() {
      const foundIndex = this.$store.state.countries.findIndex(
        (country) => country.name === this.country
      );
      this.states = this.$store.state.countries[foundIndex].states;
      this.cities = [{ name: "select Stat First!" }];
      return this.emitValue();
    },
  }
};
</script>

<style>
</style>