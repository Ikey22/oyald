<template>
  <div class="container-fluid">

    <section class="text-justify">
      <h1 class="text-left font-weight-bold w-100" style="color: var(--custom-primary-color) !important;">Africa, our continent!</h1>
      <br />
      <p> 
        <figure class="float-right">
          <img src="@/assets/img/africa.png" style="width: 100%; max-width: 400px;" class="pl-2 pr-2 pl-lg-4 pr-lg-4" />
          <figcaption class="ml-4"><small>Image source: <a target="_blank" href="http://www.pngall.com/africa-map-png">http://www.pngall.com/africa-map-png</a> </small> </figcaption>
        </figure>
        
        Africa is the second largest continent, spanning about one-fifth of the total land surface of the earth. It is bounded on the West by the Atlantic Ocean, the Mediterranean Sea on the North, the Red Sea and Indian Ocean on the East, and on the South by the mingling waters of the Atlantic and Indian Oceans. Africa has a total land mass of approximately 11,724,000 square miles (30,365,000 km²), and measures about 5,000 miles (8,000 km) from the north to south, and about 4,600 miles (7,400 km) from east to west.
      <!-- eslint-disable-next-line vue/no-parsing-error -->
      </p>
      <p> Africa is divided almost equally in two by the equator, making most of the continent lying within the tropical region, which is bounded on the north by the Tropic of Cancer and on the south by the tropic of Capricorn. Due to the bulge formed by West Africa, the greater part of the continent’s territory lies north of the equator.</p>

      <b-collapse id="collapse-1" class="mt-2">
        <p>Africa is said to be crossed from north to south by the prime meridian (0 degrees longitude), which passes a short distance to the east of Accra, Ghana. The continent is made up of 54 sovereign countries, with over 1000 official languages. Algeria is the largest African country by land area, while Nigeria is the largest by population. As at January 1, 2021, the United Nations estimates the population of Africa to be about 1.35 billion. </p>
        <p>The Continent is endowed with an abundance of mineral resources, including some of the world’s largest reserves of fossil fuels, metallic ores, gems and precious metals. This is matched by a great diversity of biological resources, including the intensely lush equatorial rainforests of Central Africa, and the world-famous wildlife of the eastern and southern sub-regions. Although agriculture still dominates the economies of many African countries, the exploitation of these resources in the 20th century has become the significant economic activity in Africa. </p>
        <p>Africa is rising once again. The African horizon is growing brighter. Africa is on the march towards a more prosperous future in which all its citizens, of all creeds and backgrounds, are empowered to realize their full potential, and live with satisfaction and pride about their continent. Indeed, Africa is on the verge of a future with healthy, well educated people living in robust, inclusive, and sustainably developed economies. </p>
      </b-collapse>
      <br />
      <b-button v-b-toggle.collapse-1 variant="success" @click="readMoreText === 'Read More' ? readMoreText = 'Read Less' : readMoreText = 'Read More'" class="bg-success">{{ readMoreText }}</b-button>
      <br />
      <br />
      <br />
    </section>

      <br />
      <hr />
      <br />

    <section class="text-justify">
      <h1 class="text-left font-weight-bold w-100" style="color: var(--custom-primary-color) !important;">Africa's future: A vibrant young population</h1>
      <br />
      <p> 
        <figure class="float-left">
          <img
          src="@/assets/img/vibrant-young-population.jpg"
          style="width: 100%; max-width: 400px;"
          class="pl-2 pr-2 pl-lg-4 pr-lg-4"
          width="300"
          align="left"
          alt="Image depicting africa's vibrant young population - sourced from https://www.weforum.org/agenda/2020/01/the-children-s-continent/"
          />
          <figcaption class="ml-4"><small>Image source: <a href="https://www.weforum.org/agenda/2020/01/the-children-s-continent/" target="_blank">https://www.weforum.org/<br />agenda/2020/01/the-children-s-continent/</a> </small> </figcaption>
        </figure>
        <!-- eslint-disable-next-line vue/no-parsing-error -->
           With 60 percent of Africa’s population currently aged 24 and below, it is clear that Africa is a continent of young people. Acknowledging this fact, the leaders of the world decided to give a priority to the young population. This is translated into both the Agenda 2063 of the African Union, and the Agenda 2030 of the United Nations. </p>
          <p>The responsibility to build this continent rests with each and every African citizen, especially young leaders at the continental level, and within our countries; responsibility to ensure that decision makers adequately put priority where it is needed. Thus, there is an emphatic call on governments in Africa to transform education and skills development, health and well being, empowerment, employment and entrepreneurship, which lie at the heart of the march of Africa towards progress, sustainable peace and development. </p>
      <br />
      <!-- <b-button v-b-toggle.collapse-2 variant="success" class="bg-success">Read more</b-button>
      <b-collapse id="collapse-2" class="mt-2">
        <p>The responsibility to build this continent rests with each and every African citizen, especially young leaders at the continental level, and within our countries; responsibility to ensure that decision makers adequately put priority where it is needed. Thus, there is an emphatic call on governments in Africa to transform education and skills development, health and well being, empowerment, employment and entrepreneurship, which lie at the heart of the march of Africa towards progress, sustainable peace and development. </p>
      </b-collapse> -->
    </section>
    <br />
    <hr />
    <br />


    <section>
      <cite class="card p-2 rounded-lg">
                <br />
                <u><p><small>Information Sources:</small></p></u>
                <ol>
                  <li><small>
                  African Union Commission Directorate on Information and Communication (2017). Harnessing the demographic dividend through investments in youth, AUEcho, Issue1. Ethiopia: African Union Commission. Retrieved from <a target="_blank" href="https://au.int/sites/default/files/documents/32665-doc-au-echo-magazine-2017-23june17-1.pdf">https://au.int/sites/default/files/documents/32665-doc-au-echo-magazine-2017-23june17-1.pdf</a>
                </small></li>
                <li><small>
                  Kwamina Busumafi Dickson et al (n.d). Africa Continent. Retrieved January 1, 2021 from <a target="_blank" href="https://www.britannica.com/place/Africa">https://www.britannica.com/place/Africa</a>
                </small></li>
                <li><small>
                  MoAfrika Tours. (2020). How many countries are in Africa? 54 in short. Retrieved January 1, 2021 form <a target="_blank" href="https://moafrikatours.com/how-many-countries-are-in-Africa">https://moafrikatours.com/how-many-countries-are-in-Africa</a>
                </small></li>
                <li><small>
                  Worldometer. (n.d). Population of Africa (2021). Retrieved January 1, 2021 from <a target="_blank" href="https://www.worldometers.info/world-population/">https://www.worldometers.info/world-population/africa-population/</a>
                </small></li>
                <li>
                  <small>
                    Images: <a target="_blank" href="https://www.weforum.org/agenda/2020/01/the-children-s-continent/">https://www.weforum.org/agenda/2020/01/the-children-s-continent/</a>, <a target="_blank" href="https://istockphoto.com">https://istockphoto.com</a>
                  </small>
                </li>
                </ol>
              </cite>
              <br />

    </section>

  </div>
</template>

<script>
export default {
  name: "HomePage",
  data(){
    return {
      readMoreText: 'Read More'
    }
  },
  mounted(){
    const $this = this;
    switch ($this.$route.query.lang) {
      case "fr":
        (() => {
          $this.$store.commit('setLanguage', 'fr');
        })()
        break;

      case "en":
        (() => {
          $this.$store.commit('setLanguage', 'en');
        })()
        break;
    
      default:
        (() => {
          $this.$store.commit('setLanguage', 'en');
        })()
        break;
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
</style>
