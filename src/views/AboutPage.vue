<template>
  <div class="container-fluid">

    <div class="w-100 row">
      <section class="col-12 col-md-6 col-lg-6 col-xl-6">
        <img
        class="w-100 p-2 p-lg-4"
        src="@/assets/img/sdg-rect.jpeg"
        />
      </section>

      <section class="col-12 col-md-6 col-lg-6 col-xl-6">
        <h1 class="text-center text-success font-weight-bold w-100">
          Who we are?
        </h1>

        <p>
          OYALD is a non-partisan, not-for-profit, and non-discriminatory network established to equip young Africans for the inclusive transformation of the continent. 
        </p>

        <p>
           Comprising young leaders, professionals and entrepreneurs of African descent/citizenship collaborating for sustainable development, we are a union of national chapters, organized and registered in the countries of Africa. 
        </p>
      </section>
    </div>

    <br />
    <br />
    <br />
    <hr />
    <br />
    <br />

    <div class="row w-100">
      <section class="col-12 col-md-6 col-lg-8 col-xl-8">
      <h1 class="w-100 text-center text-success font-weight-bold">Why OYALD?</h1>
        <ul>
          <li>
            <p>
              Given the commitments made by the African Heads of State to support the implementation of the main development Agenda in Africa; 
            </p>
          </li>

          <li>
            <p>
              Acknowledging the importance of the Agenda 2063, <b>"The Africa We Want"</b> in building a united and prosperous Africa; 
            </p>
          </li>

          <li>
            <p>
              Understanding the strategic contributions of the Agenda 2030, <b>"Leaving No One Behind"</b> to the enhancement of the living conditions of Africans; 
            </p>
          </li>
        </ul>

        <br />
        <b-button v-b-toggle.collapse-1 variant="success" class="bg-success">Read more</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <ul>
            <li>
              <p>
                Considering the critical role of young Africans in ameliorating the narrative through their meaningful participation in, and contributions to, the decisions on the continent; 
              </p>
            </li>

            <li>
              <p>
                *Convinced that collaboration between young Africans, the Civil Society Organizations (CSO), and other decision makers in the region can influence policies and enable better life for all; 
              </p>
            </li>

            <li>
              <p>
                With the resolve, as young Africans, to contribute to the positive transformation of our communities, and the improvement of the living conditions of our people; 
              </p>
            </li>
          </ul>

          <br />

          <p>
            OYALD was established to unite young leaders, professionals and entrepreneurs as collaborators towards the achievement of sustainable development in Africa. 
          </p>
        </b-collapse>

      </section>

      <section class="col-12 col-md-6 col-lg-4 col-xl-4">
        <img
        class="w-100 p-2 p-lg-4"
        src="@/assets/img/sdg-circle.jpeg"
        />
      </section>
    </div>

    <br />
    <br />
    <hr />
    <br />

      <section>
        <h1 class="w-100 font-weight-bold text-success text-center">
          What we do
        </h1>

        <p>
          Towards the realisation of the driving vision, OYALD: 
        </p>

        <ul>
          <li>
            <p>
              Establishes a strong network of young African leaders, professionals, and entrepreneurs to serve as a reliable and effective human resource pool for inclusive and sustainable development in Africa.
            </p>
          </li>

          <li>
            <p>
              Provides capacity development and mentoring opportunities to the African youth as agents of good leadership.
            </p>
          </li>

          <li>
            <p>
              Provides opportunities for peaceful and humanity-focused interaction, for the sharing of ideas and knowledge resources among young Africans, towards enhanced unity, ethno-cultural tolerance and peaceful co-existence.
            </p>
          </li>

          <li>
            <p>
              Stimulates the establishment of technology, arts and business incubation platforms and opportunities for young Africans towards environment-conscious socio-economic and technological development in Africa.
            </p>
          </li>

          <li>
            <p>
              Facilitates realistically streamlined projects targeted at achieving the 17 Sustainable Development Goals and their 169 targets in Africa.
            </p>
          </li>
        </ul>
      </section>
  </div>
</template>

<script>
export default {
    name: "AboutPage"
}
</script>

<style scoped>
:root{
	--custom-primary-color: #002200;
	--custom-secondary-color: #b99e00;
	--custom-gradient: linear-gradient(to right, var(--custom-green), var(--custom-gold) 80%);
}

.bg-success{
  background-color: var(--custom-primary-color) !important;
}

.text-success{
  color: var(--custom-primary-color) !important;
}

.bg-secondary{
  background-color: var(--custom-secondary-color) !important;
}
</style>