<template>
  <!-- <b-form-select
            class="text-white bg-green"
            v-model="$store.state.language"
            :options="[{ text: 'Language: English', value: 'en' }, { text: 'Langue: Français', value: 'fr' }]"
            value="en"
          ></b-form-select> -->
      <b-button
        @click="toggleLanguage"
        class="bg-primary-color"
        > {{ $store.state.language === 'en' ? 'En Français' : 'View in English' }} </b-button>
</template>

<script>
export default {
    name: "SelectLanguage",
    methods: {
      toggleLanguage(){
        switch (this.$store.state.language) {
          case 'en':
            (() => {
              return this.$store.commit('setLanguage', 'fr');
            })();
            break;

          case 'fr':
            (() => {
              return this.$store.commit('setLanguage', 'en');
            })();
            break;
        
          default:
            break;
        }
      }
    }
}
</script>