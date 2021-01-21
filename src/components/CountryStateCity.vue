<template>
    <div class="hello">
        <div>
            <ul>
                <li>
                    <select v-model="user.country" @changed="computeState">
                        <option v-for="country in countries" :key="country.id" :value="country.name"> {{ country.name }}</option>
                    </select>
                </li>
                <li>
                    <select v-if="user.state !== ''" v-model='user.state' @changed="computeCity">
                        <option v-for="state in states" :key="state.id" :value="state.name"> {{ state.name }}</option>
                    </select>
                </li>
                <li>
                    <select v-if="user.city !== ''" v-model='user.city' @changed="displayData">
                        <option v-for="city in cities" :key="city.id" :value="city.name"> {{ city.name }}</option>
                    </select>
                </li>
                <li v-if="done"> Name: <u> {{ name }} </u>, Country:  <u> {{ country }} </u>, State:  <u> {{ state }} </u>, City:  <u> {{ city }} </u>.</li>
                <li>
                    <button @click="hideData">Reset</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HelloWorld',
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
                user: {
                    country: '',
                    state: '',
                    city: ''
                }
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
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a, button {
        color: #42B983;
    }
    input, textarea{
        width: 600px;
    }
    textarea {
        height: 200px;
    }
</style>