<template>
  <div class="container-fluid">

    

    <div class="row w-100">
      <section class="col-12">
      <h1 class="w-100 text-left text-success font-weight-bold">Why OYALD?</h1>
      <p class="pl-4 text-justify">
        <figure class="float-right">
          <img
          class="w-100 p-2 p-lg-4"
          alt="Elliptical Image depicting the 17 sustainable development goals as laid down by the United Nations Organisation"
          width="300"
          align="right"
          style="width: 100%; max-width: 350px;"
          src="@/assets/img/sdg-circle.jpg"
        />
          <figcaption class="ml-4"><small>Image source: <br /><a target="_blank" href="https://www.edf-feph.org/newsroom-news-what-have-we-done-so-far-about-sustainable-development-goals/">https://www.edf-feph.org/newsroom-news-what-have<br />-we-done-so-far-about-sustainable-development-goals/</a> </small> </figcaption>
        </figure>
        <b-icon icon="caret-right-fill" /> Given the commitments made by the African Heads of State to support the implementation of the main development Agenda in Africa;  <br /><br />
        <b-icon icon="caret-right-fill" /> Acknowledging the importance of the Agenda 2063, <b>"The Africa We Want"</b> in building a united and prosperous Africa;  <br /><br />
        <b-icon icon="caret-right-fill" /> Understanding the strategic contributions of the Agenda 2030, <b>"Leaving No One Behind"</b> to the enhancement of the living conditions of Africans;  <br />
        <!-- eslint-disable-next-line vue/no-parsing-error -->
      </p>
      
        <b-collapse id="collapse-1" class="mt-2">
          <p class="pl-1 text-justify">
            <b-icon icon="caret-right-fill" /> Considering the critical role of young Africans in ameliorating the narrative through their meaningful participation in, and contributions to, the decisions on the continent;  <br /><br />
            <b-icon icon="caret-right-fill" /> Convinced that collaboration between young Africans, the Civil Society Organizations (CSO), and other decision makers in the region can influence policies and enable better life for all;  <br /><br />
            <b-icon icon="caret-right-fill" /> With the resolve, as young Africans, to contribute to the positive transformation of our communities, and the improvement of the living conditions of our people; <br />
          </p>

          <br />

          <p>
            OYALD was established to unite young leaders, professionals and entrepreneurs as collaborators towards the achievement of sustainable development in Africa. 
          </p>
        </b-collapse>

        <br />
        <b-button v-b-toggle.collapse-1 variant="success" class="bg-success" @click="readMoreText === 'Read More' ? readMoreText = 'Read Less' : readMoreText = 'Read More'">{{ readMoreText }}</b-button>

      </section>
      
    </div>

    <br />
    <br />
    <hr />
    <br />
    
    <div class="w-100 row">
      <section class="col-12 col-md-6 col-lg-4 col-xl-4">
        <img
        class="w-100 p-2 p-lg-4"
        width="300"
        alt="Image members of OYALD-OJLAD"
        src="@/assets/img/oyald-collage.jpeg"
        />
        <!-- <small class="pl-2 pl-lg-4 d-block w-100">Image source: <a href="https://www.un.org/en/africa/osaa/peace/youth.shtml" target="_blank">https://www.un.org/en/<wbr />africa/osaa/peace/<wbr />youth.shtml</a></small> -->
      </section>

      <section class="col-12 col-md-6 col-lg-8 col-xl-8">
        <h1 class="text-left text-success font-weight-bold w-100">
          Who we are
        </h1>

        <p class="text-justify">
          OYALD is a non-partisan, not-for-profit, and non-discriminatory network established to equip young Africans for the inclusive transformation of the continent. 
        </p>

        <p class="text-justify">
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

      <section class="text-justify">
        <h1 class="w-100 font-weight-bold text-success text-left">
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
    name: "AboutPage",
    data(){
      return {
        readMoreText: 'Read More'
      }
    }
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