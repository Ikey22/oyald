<template>
<b-form-group>
                            <label for="title">Title of Appellation</label>
                            <b-form-select
                              class=""
                              :options="titles"
                              />
                          </b-form-group>
</template>

<script>
export default {
    name: "TitleOfAppelation",
    data(){
      return {
        titles: [
          'Mr',
          'Mrs',
          'Engr',
          'Pst',
          'Rev',
          'Dr',
          'Hon',
          'other'
        ]
      }
    }
}
</script>