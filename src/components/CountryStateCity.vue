<template>
    <b-form-row class="row w-100">
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
                                <b-form-select-option v-for="(x, index) in $store.state.countries" :key="`country-${index + 1}`" :value="x.name">{{x.name}}{{ x.emoji }}</b-form-select-option>
                            </b-form-select>
                          </b-form-group>

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
                                <b-form-select-option v-for="(x, index) in states" :key="`state-${index + 1}`" :value="x.name">{{x.name}}</b-form-select-option>
                            </b-form-select>
                          </b-form-group>

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
                                <b-form-select-option v-for="(x, index) in cities" :key="`cities-${index + 1}`" :value="x.name">{{x.name}}</b-form-select-option>
                            </b-form-select>
                          </b-form-group>
                        </b-form-row>
</template>
<script>
import FetchInBG from "worker-loader!../workers/fetch-and-parse-countries.js";

let fetchInBackground = new Worker("/js/fetch-and-parse-countries.worker.js") || new FetchInBG();

    export default {
        name: 'CountryStateCity',
        data() {
            return {
                isReady: false,
                url: '/country-state-city.json',//'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json',
                countries: [
                    {name: 'Loading...'},
                ],
                states: [
                    {name: 'Select Country first'},
                ],
                cities: [
                    {name: 'Select State first'},
                ],
                country: '',
                state: '',
                city: ''
            }
        },
        created() {
            if (this.$store.state.countries.length < 2) return setTimeout(() => this.fetchData(), 10);
            
            return true;
        },
        methods: {
         fetchData(){
           const $this = this;

           if (!fetchInBackground){
               fetchInBackground = new Worker("/js/fetch-and-parse-countries.worker.js") || new FetchInBG();
           }

               fetchInBackground.onmessage = e => {
                       //console.log(e.data);
                   if (e.data){
                       if (e.data.status == "starting"){
                           $this.$store.state.countries = [];
                       } else if (e.data.status == "success") {
                           $this.$store.state.countries.push(e.data.value);
                       } else if (e.data.status == "ended") {
                           $this.isREady = true;
                           fetchInBackground.terminate();
                           fetchInBackground = null;
                       } else if (e.data.status == 'error'){
                           $this.$store.state.countries = [{name: 'Trying to connect'}];
                           console.trace(e.data.payload);
                           $this.fetchData();
                       }
                   }
               };

               fetchInBackground.onerror = e => {
                   console.trace(e);
               };

               fetchInBackground.postMessage(this.url);

         },
         setCountry(){
            const foundIndex = this.$store.state.countries.findIndex(country => country.name === this.country);
            this.states = this.$store.state.countries[foundIndex].states;
            this.cities = [{name: 'select Stat First!'}];
            return this.emitValue();
         },
         setState(){
            const foundIndex = this.states.findIndex(state => state.name === this.state);
            this.cities = this.states[foundIndex].cities;
            return this.emitValue();
            },
         setCity(){
             return this.emitValue();
            },
         emitValue(){
            const $this = this;
            const { country, state, city } = $this;

            const obj = {
                country,
                state,
                city
            };

            $this.$emit('value', obj);
            $this.$store.state.userPreferences.country = country;
            $this.$store.state.userPreferences.state = state;
            $this.$store.state.userPreferences.city = city;
            return true;
         }
        }
    }
</script>