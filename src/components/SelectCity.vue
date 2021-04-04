<template>
  <b-form-group>
    <label for="lga">District/L.G.A*</label>
    <b-form-select
      id="lga"
      @change="setCity"
      @input="setCity"
      placeholder="Select District/L.G.A..."
      v-model="city"
      :required="true"
    >
      <b-form-select-option
        v-for="(x, index) in cities"
        :key="`cities-${index + 1}`"
        :value="x.name"
        >{{ x.name }}</b-form-select-option
      >
    </b-form-select>
  </b-form-group>
</template>

<script>
export default {
  name: "SelectCity",
  data() {
    return {
      city: "",
      cities: []
    };
  },
  created() {
    if (this.$store.state.cities.length < 2)
      this.cities = this.$store.state.cities;
  },
  methods: {
    setCity() {
      return this.emitValue();
    },
    emitValue() {
      const $this = this;
      const { city } = $this;

      const obj = {
        city,
      };

      $this.$emit("value", obj);
      $this.$store.state.userPreferences.city = city;
      return true;
    },
  },
};
</script>
