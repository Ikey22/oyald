<template>
  <div class="container-fluid">

    <section class="text-justify">
      <h1 class="text-left font-weight-bold w-100" style="color: var(--custom-primary-color) !important;">{{ $store.state.language === 'en' ? 'Africa, our continent!' : 'L\'Afrique, notre continent!' }}</h1>
      <br />
      <p> 
        <figure class="float-right">
          <img src="@/assets/img/africa.png" style="width: 100%; max-width: 400px;" class="pl-2 pr-2 pl-lg-4 pr-lg-4" />
          <figcaption class="ml-4"><small>{{ $store.state.language === 'en' ? 'Image source:' : "Source de l'Image" }} <a target="_blank" href="http://www.pngall.com/africa-map-png">http://www.pngall.com/africa-map-png</a> </small> </figcaption>
        </figure>
        
        {{ $store.state.language === 'en' ? 'Africa is the second largest continent, spanning about one-fifth of the total land surface of the earth. It is bounded on the West by the Atlantic Ocean, the Mediterranean Sea on the North, the Red Sea and Indian Ocean on the East, and on the South by the mingling waters of the Atlantic and Indian Oceans. Africa has a total land mass of approximately 11,724,000 square miles (30,365,000 km²), and measures about 5,000 miles (8,000 km) from the north to south, and about 4,600 miles (7,400 km) from east to west.' : `L'Afrique est le deuxième plus grand continent, couvrant environ un cinquième de la surface totale de la terre. Elle est délimitée à l'ouest par l'Océan Atlantique, la Mer Méditerranée au nord, la Mer Rouge et l'Océan Indien à l'est, et au sud par le mélange des eaux des Océans Atlantique et Indien. L'Afrique a une masse terrestre totale d'environ 11.724.000 m2 (30.365.000 km2) et mesure environ 5.000 m2 (7.400 km) d'est en ouest.` }}
      <!-- eslint-disable-next-line vue/no-parsing-error -->
      </p>
      <p> {{ $store.state.language === 'en' ? 'Africa is divided almost equally in two by the equator, making most of the continent lying within the tropical region, which is bounded on the north by the Tropic of Cancer and on the south by the tropic of Capricorn. Due to the bulge formed by West Africa, the greater part of the continent’s territory lies north of the equator.' : `L'Afrique est divisée en deux par l'Équateur. Ainsi, la majeure partie du continent est située dans la région tropicale, qui est délimitée au nord par le Tropique du Cancer et au sud par le Tropique du Capricorne. En raison du renflement formé par l’Afrique de l’Ouest, la plus grande partie du territoire du continent se situe au nord de l’Équateur.` }}</p>

      <b-collapse id="collapse-1" class="mt-2">
        <p>{{ $store.state.language === 'en' ? 'Africa is said to be crossed from north to south by the prime meridian (0 degrees longitude), which passes a short distance to the east of Accra, Ghana. The continent is made up of 54 sovereign countries, with over 1000 official languages. Algeria is the largest African country by land area, while Nigeria is the largest by population. As at January 1, 2021, the United Nations estimates the population of Africa to be about 1.35 billion. ' : `L'Afrique est traversée du nord au sud par le premier méridien (0 degré de longitude), qui passe à une courte distance à l'Est d'Accra, au Ghana. Le continent est composé de 54 pays souverains, avec plus de 1000 langues officielles. L'Algérie est le plus grand pays Africain en termes de superficie, tandis que le Nigéria est le plus grand en termes de population. Au 1er janvier 2021, les Nations Unies estimaient la population de l'Afrique à environ 1,35 milliard d'habitants.` }}</p>
        <p>{{ $store.state.language === 'en' ? 'The Continent is endowed with an abundance of mineral resources, including some of the world’s largest reserves of fossil fuels, metallic ores, gems and precious metals. This is matched by a great diversity of biological resources, including the intensely lush equatorial rainforests of Central Africa, and the world-famous wildlife of the eastern and southern sub-regions. Although agriculture still dominates the economies of many African countries, the exploitation of these resources in the 20th century has become the significant economic activity in Africa. ' : `Le continent est doté d’une abondance de ressources minérales, dont certaines des plus grandes réserves mondiales de combustibles fossiles, de minerais métalliques, de pierres précieuses et de métaux précieux. À cela s'ajoute une grande diversité de ressources biologiques, y compris les forêts tropicales équatoriales intensément luxuriantes de l'Afrique Centrale et la faune de renommée mondiale des sous-régions de l'est et du sud. Bien que l'agriculture domine encore les économies de nombreux pays Africains, l'exploitation de ces ressources au XXe siècle est devenue l'activité économique significative en Afrique.` }}</p>
        <p>{{ $store.state.language === 'en' ? 'Africa is rising once again. The African horizon is growing brighter. Africa is on the march towards a more prosperous future in which all its citizens, of all creeds and backgrounds, are empowered to realize their full potential, and live with satisfaction and pride about their continent. Indeed, Africa is on the verge of a future with healthy, well educated people living in robust, inclusive, and sustainably developed economies. ' : `L'Afrique est à nouveau en train de s'élever. L'horizon Africain s'éclaircit. L'Afrique est en marche vers un avenir plus prospère dans lequel tous ses citoyens, de toutes croyances et origines, sont habilités à réaliser leur plein potentiel et à vivre avec satisfaction et fierté pour leur continent. En effet, l'Afrique est à la veille d'un avenir prospère avec des personnes en bonne santé et bien éduquées vivant dans des économies robustes, inclusives et développées de manières durables.` }}</p>
      </b-collapse>
      <br />
      <b-button v-b-toggle.collapse-1 variant="success"  @click="
            $store.state.language === 'en'
              ? readMoreText === 'Read More'
                ? (readMoreText = 'Read Less')
                : (readMoreText = 'Read More')
              : readMoreTextFrench === 'Lire la suite'
              ? (readMoreTextFrench = 'Lire moins')
              : (readMoreTextFrench = 'Lire la suite')
          " class="bg-success">{{
            $store.state.language == "en" ? readMoreText : readMoreTextFrench
          }}</b-button>
      <br />
      <br />
      <br />
    </section>

      <br />
      <hr />
      <br />

    <section class="text-justify">
      <h1 class="text-left font-weight-bold w-100" style="color: var(--custom-primary-color) !important;">{{ $store.state.language === 'en' ? 'Africa\'s future: A vibrant young population' : 'L’avenir de l’Afrique: Une population jeune et dynamique' }}</h1>
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
          <figcaption class="ml-4"><small>{{ $store.state.language === 'en' ? 'Image source:' : "Source de l'Image" }} <a href="https://www.weforum.org/agenda/2020/01/the-children-s-continent/" target="_blank">https://www.weforum.org/<br />agenda/2020/01/the-children-s-continent/</a> </small> </figcaption>
        </figure>
        <!-- eslint-disable-next-line vue/no-parsing-error -->
           {{ $store.state.language === 'en' ? 'With 60 percent of Africa’s population currently aged 24 and below, it is clear that Africa is a continent of young people. Acknowledging this fact, the leaders of the world decided to give a priority to the young population. This is translated into both the Agenda 2063 of the African Union, and the Agenda 2030 of the United Nations.' : `Avec 60 pourcents de la population Africaine actuellement âgée de 24 ans et moins, il est clair que l’Afrique est un continent de jeunes. Conscients de ce fait, les dirigeants du monde ont décidé de donner la priorité à la jeune population. Cela se traduit à la fois dans l'Agenda 2063 de l'Union Africaine et dans l'Agenda 2030 des Nations Unies.` }} </p>
          <p>{{ $store.state.language === 'en' ? 'The responsibility to build this continent rests with each and every African citizen, especially young leaders at the continental level, and within our countries; responsibility to ensure that decision makers adequately put priority where it is needed. Thus, there is an emphatic call on governments in Africa to transform education and skills development, health and well being, empowerment, employment and entrepreneurship, which lie at the heart of the march of Africa towards progress, sustainable peace and development.' : `La responsabilité de construire ce continent incombe à chaque citoyen Africain, en particulier les jeunes leaders au niveau continental et dans nos pays; responsabilité de veiller à ce que les décideurs accordent la priorité là où cela est nécessaire. Ainsi, il y a un appel catégorique aux gouvernements Africains pour qu'ils transforment l'éducation et le développement des compétences et l'entrepreneuriat, qui sont au cœur de la marche de l'Afrique vers le progrès, la paix durable et le développement.` }} </p>
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
                <u><p><small>{{ $store.state.language == 'en' ? 'Information Sources' : `Sources d'Informations` }}:</small></p></u>
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
      readMoreText: 'Read More',
      readMoreTextFrench: 'Lire la suite'
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
