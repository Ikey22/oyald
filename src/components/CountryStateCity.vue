<template>
    <b-form-row class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="country">Nationality*</label>
                            <b-form-select
                            id="country"
                            @change="setCountry($event)"
                            placeholder="Select country..."
                            autocomplete="country"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="region">State/Region*</label>
                            <b-form-select
                            id="region"
                            @change="setState($event)"
                            placeholder="Select State/Region..."
                            autocomplete="region"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="lga">District/L.G.A*</label>
                            <b-form-select
                            id="lga"
                            @change="setCity($event)"
                            placeholder="Select District/L.G.A..."
                            autocomplete="country"
                            :required="true"
                            />
                          </b-form-group>
                        </b-form-row>
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
                    {name: 'Loading...'},
                ],
                cities: [
                    {name: 'Loading...'},
                ],
                done: false,
                country: '',
                state: '',
                city: ''
            }
        },
        beforeCreate() {
            const $this = this;

           fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json')
           .then(res => {
               return res.json()
           })
           .then(json => {
               $this.countries = json;
               return $this.countries
           })
           .catch(err => console.error("API Error", err));
        },
        methods: {
         setCountry($event){
             this.states = this.countries.filter(country => country.name === $event.target.value)[0].states;
             this.country = $event.target.value;
         },
         setState($event){
            this.cities = this.states.filter(state => state.name === $event.target.value)[0].cities;
            this.state = $event.target.value;
            },
         setCity($event){
            const $this = this;
            $this.city = $event.target.value;
            $this.$emit('value', {
                country: $this.country,
                state: $this.state,
                city: $this.city
            });
            }
        }
    }
</script>