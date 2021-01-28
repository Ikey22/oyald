<template>
    <b-form-row class="row w-100">
                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="country">Nationality*</label>
                            <b-form-select
                            id="country"
                            placeholder="Select country..."
                            autocomplete="country"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="region">State/Region*</label>
                            <b-form-select
                            id="region"
                            placeholder="Select State/Region..."
                            autocomplete="region"
                            :required="true"
                            />
                          </b-form-group>

                          <b-form-group class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <label for="lga">District/L.G.A*</label>
                            <b-form-select
                            id="lga"
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
                done: false
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
           })
           .catch(err => console.error("API Error", err))
        },
        methods: {
          computeState (){
            this.states = this.countries.filter(country => country.name === this.user.country)[0].states;
            },
         computeCity (){
            this.cities = this.states.filter(state => state.name === this.user.state)[0].cities;
            },
         displayData (){
             this.done = true;
         },
         hideData (){
             this.user.name = this.user.countries = this.user.city = this.user.state  =  '';
             this.done = false;
             alert("Start Over")
         }
          }
    }
</script>