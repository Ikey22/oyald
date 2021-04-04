<template>
  <b-form-group class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
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
    };
  },
  created() {
    if (this.$store.state.countries.length < 2)
      return setTimeout(() => this.fetchData(), 10);

    return true;
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
