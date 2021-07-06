<template>
  <b-form-group>
    <label for="title-of-appelation">{{
      $store.state.language == "en"
        ? "Title of Appellation*"
        : "Titre de l'appellation*"
    }}</label>
    <b-form-select
      id="title-of-appelation"
      v-model="$store.state.userPreferences.titleOfAppelation"
      :required="true"
      :value="null"
      :placeholder="
        $store.state.language == 'en'
          ? 'Select a title'
          : 'Sélectionner un titre'
      "
    >
      <template #first>
        <b-form-select-option :value="null" disabled selected>
          --
          {{
            $store.state.language == "en"
              ? "Select a title"
              : "Sélectionner un titre"
          }}
          --
        </b-form-select-option>
      </template>

      <b-form-select-option
        v-for="title of titles"
        :key="title.english"
        :value="title.english"
      >
        {{ $store.state.language == "en" ? title.english : title.french }}
      </b-form-select-option>
    </b-form-select>
  </b-form-group>
</template>

<script>
export default {
  name: "TitleOfAppelation",
  data() {
    return {
      titles: [
        {
          english: "Mr.",
          french: "M.",
        },
        {
          english: "Mrs.",
          french: "Mme.",
        },
        {
          english: "Miss.",
          french: "Mlle.",
        },
        {
          english: "Engr",
          french: "Ingr.",
        },
        {
          english: "Pst.",
          french: "Pst.",
        },
        {
          english: "Rev.",
          french: "Rev",
        },
        {
          english: "Dr.",
          french: "Dr.",
        },
        {
          english: "Hon.",
          french: "Hon.",
        },
        {
          english: "Prof",
          french: "Prof",
        },
        {
          english: "other",
          french: "Autre",
        },
      ],
    };
  },
};
</script>
