<template>
<b-form-group>
                            <label for="title">Title of Appellation</label>
                            <b-form-select
                              class=""
                              >
                              <b-form-select-option selected value="mr">Mr</b-form-select-option>
                              <b-form-select-option value="mrs">Mrs</b-form-select-option>
                              <b-form-select-option value="dr">Dr</b-form-select-option>
                              <b-form-select-option value="prof">Prof</b-form-select-option>
                              <b-form-select-option value="engr">Engr</b-form-select-option>
                            </b-form-select>
                          </b-form-group>
</template>

<script>
export default {
    name: "TitleOfAppelation"
}
</script>