<template>
  <b-form-select
            class="text-white bg-green"
            v-model="$store.state.language"
            :options="[{ text: 'Language: English', value: 'en' }, { text: 'Langue: Français', value: 'fr' }]"
            value="en"
          ></b-form-select>
</template>

<script>
export default {
    name: "SelectLanguageDropdown"
}
</script>

<style scoped>
.bg-green{
    background: var(--custom-primary-color) !important;
}
</style>