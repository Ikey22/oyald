<template>
  <b-form-group class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
    <label for="region">State/Region*</label>
    <b-form-select
      id="region"
      @change="setState"
      @input="setState"
      placeholder="Select State/Region..."
      v-model="state"
      :required="true"
    >
      <b-form-select-option
        v-for="(x, index) in states"
        :key="`state-${index + 1}`"
        :value="x.name"
        >{{ x.name }}</b-form-select-option
      >
    </b-form-select>
  </b-form-group>
</template>

<script>
export default {
  data() {
    return {
      state: "",
    };
  },
  name: "SelectState",
  created() {
    if (this.$store.state.states.length < 2)
      this.states = this.$store.state.states;
  },
  methods: {
    setState() {
      const foundIndex = this.$store.state.states.findIndex(
        (state) => state.name === this.state
      );
      this.$store.state.cities = this.states[foundIndex].cities;
      return this.emitValue();
    },
    emitValue() {
      const $this = this;
      const { state } = $this;

      const obj = {
        state,
      };

      $this.$emit("value", obj);
      $this.$store.state.userPreferences.state = state;
      return true;
    },
  },
};
</script>

<style>
</style>