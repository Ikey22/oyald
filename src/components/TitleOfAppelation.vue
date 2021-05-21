<template>
<b-form-group>
                            <label for="title">{{ $store.state.language == 'en' ? 'Title of Appellation*' : 'Titre de l\'appellation*' }}</label>
                            <b-form-select
                              v-model="$store.state.userPreferences.titleOfAppelation"
                              :options="titles"
                              :required="true"
                              />
                          </b-form-group>
</template>

<script>
export default {
    name: "TitleOfAppelation",
    data(){
      return {
        titles: [
          'Mr.',
          'Mrs.',
          'Miss.',
          'Alh.',
          'Engr.',
          'Pst.',
          'Rev.',
          'Dr.',
          'Hon.',
          'Prof',
          'other'
        ]
      }
    }
}
</script>