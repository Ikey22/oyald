<template>
  <div id="amount-group">
      <md-field id="amount-currency">
          <md-select
          v-model="value"
          @changed="emitValue($event)"
          >
              <md-option v-for="(x, index) in ['NGN', 'USD', 'GBP', 'GCD']" :key="x + 1.1" :value="x" :selected="index === 0 ? true : false">{{ x }}</md-option>
          </md-select>
      </md-field>
      <md-field id="amount-field-wrapper">
        <label for="amount">Amount</label>
        <md-input
        max="5000000"
        id="amount"
        min="100"
        step="0.001"
        type="number"
        :maxlength="7"
        :md-counter="7"
        />
      </md-field>
      </div>
</template>

<script>
export default {
    name: "InputAmountAndCurrency",
    data(){
        return {
            value:'NGN'
        }
    },
    methods: {
            emitValue($event){
                return this.$emit(parseInt($event.target.value));
            }
        }    
}
</script>

<style scoped>
#amount-group{
    display: flex;
    align-items: center;
    justify-content: center;
}

#amount-currency{
    width: 20% !important;
}

#amount-field-wrapper{
    width: 80% !important;
}
</style>