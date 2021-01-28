<template>
  <div class="w-100">
      <hr />
      <br />      
      <br />
      <h1 class="text-green text-center font-weight-bold w-100">Country chapters' contact details</h1>


      <div class="row w-100">

          <div v-for="(country, index) in countries" :key="`country-${index + 1}`" class="col-12 col-md-6 col-lg-6 col-xl-6">
              <div class="accordion w-100" role="tablist" visible>
                <b-card no-body class="mb-1 w-100">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle="`accordion-${index}`" variant="sucess" class="bg-green text-white">{{ country.name }}<b-icon icon="caret-down-fill" /> </b-button>
                  </b-card-header>
                  <b-collapse :id="`accordion-${index}`" :accordion="`accordion-${index}`" role="tabpanel">
                    <b-card-body>
                      <b-card-text>{{ country.representative || 'null' }}</b-card-text>
                      <b-card-text>{{ country.address || 'null' }}</b-card-text>
                      <b-card-text>{{ country.email || 'null' }}</b-card-text>
                      <b-card-text>{{ country.phoneNumber || 'null' }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name: "CountryChapter",
    data(){
        return {
            countries: [
                {
                    name: "Nigeria",
                    representative: "....",
                    address: "....",
                    phoneNumber: "....",
                    email: "..."
                },
                {
                    name: "Kenya",
                    representative: "Ms. Cecilia Mutave",
                    address: "OYALD [Aly’s Centre, 5 Muthithi Road, Muthithi/Mpaka Road Junction]",
                    email: "mutave@alekomedia.org",
                    phoneNumber: "+254745719094"
                },
                {
                    name: "Other country",
                    representative: "....",
                    address: "....",
                    phoneNumber: "....",
                    email: "..."
                }
            ]
        }
    }
}
</script>

<style>
.text-green{
    color: var(--custom-primary-color) !important;
}
.bg-green{
    background-color: var(--custom-primary-color);
}
</style>