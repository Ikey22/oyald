<template>
<b-form-group>
                            <label for="title">Title of Appellation*</label>
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