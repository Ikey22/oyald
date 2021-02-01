<template>
    <div class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="country">Nationality*</label>
                            <b-form-select
                            id="country"
                            @change="setCountry($event)"
                            placeholder="Select country..."
                            autocomplete="country"
                            :required="true"
                            >
                                <b-form-select-option v-for="(x, index) in countries" :key="`country-${index + 1}`" :value="x.name">{{x.name}}</b-form-select-option>
                            </b-form-select>
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="region">State/Region*</label>
                            <b-form-select
                            id="region"
                            @change="setState($event)"
                            placeholder="Select State/Region..."
                            autocomplete="region"
                            :required="true"
                            >
                                <b-form-select-option v-for="(x, index) in states" :key="`state-${index + 1}`" :value="x.name">{{x.name}}</b-form-select-option>
                            </b-form-select>
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="lga">District/L.G.A*</label>
                            <b-form-select
                            id="lga"
                            @change="setCity($event)"
                            placeholder="Select District/L.G.A..."
                            autocomplete="country"
                            :required="true"
                            >
                                <b-form-select-option v-for="(x, index) in cities" :key="`cities-${index + 1}`" :value="x.name">{{x.name}}</b-form-select-option>
                            </b-form-select>
                          </b-form-group>
                        </div>
</template>
<script>
    export default {
        name: 'CountryStateCity',
        data () {
            return {
                countries: [
                    {name: 'Loading...'},
                ],
                states: [
                    {name: '__Select Country first__'},
                ],
                cities: [
                    {name: '__Select State first__'},
                ],
                country: '',
                state: '',
                city: ''
            }
        },
        created() {
            return this.fetchData();
        },
        methods: {
         fetchData(){
            const $this = this;

           fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json')
           .then(res => res.json())
           .then(json => {
               $this.countries = json;
               return $this.countries
           })
           .catch(err => {
               console.error("Unable to get list of countrie, states and cities: ", err);
               $this.countries = {name: 'Trying to connect'};
               return setTimeout($this.fetchData, 5000);
               });
         },
         setCountry($event){
             this.states = this.countries.filter(country => country.name === $event.target.value)[0].states;
             this.country = $event.target.value;
            return this.emitValue();
         },
         setState($event){
            this.cities = this.states.filter(state => state.name === $event.target.value)[0].cities;
            this.state = $event.target.value;
            return this.emitValue();
            },
         setCity($event){
            this.city = $event.target.value;
            return this.emitValue();
            },
         emitValue(){
            const $this = this;
            $this.$emit('value', {
                country: $this.country,
                state: $this.state,
                city: $this.city
            });
         }
        }
    }
</script>