<template>
  <div class="container-fluid">
    <div class="row w-100">
      <section class="col-12">
        <h1 class="w-100 text-left text-success font-weight-bold">
          {{ $store.state.language === "en" ? "Why OYALD" : "Pourquoi OJLAD" }}?
        </h1>
        <p class="pl-4 text-justify">
          <figure class="float-right">
            <img
              class="w-100 p-2 p-lg-4"
              alt="Elliptical Image depicting the 17 sustainable development goals as laid down by the United Nations Organisation"
              title="Elliptical Image depicting the 17 sustainable development goals as laid down by the United Nations Organisation"
              width="300"
              align="right"
              style="width: 100%; max-width: 350px"
              src="@/assets/img/sdg-circle.png"
            />
            <figcaption class="ml-4">
              <small
                >{{
                  $store.state.language === "en"
                    ? "Image source:"
                    : "Source de l'Image"
                }}
                <br /><a
                  target="_blank"
                  href="https://www.edf-feph.org/newsroom-news-what-have-we-done-so-far-about-sustainable-development-goals/"
                  >https://www.edf-feph.org/newsroom-news-what-have<br />-we-done-so-far-about-sustainable-development-goals/</a
                >
              </small>
            </figcaption>
          </figure>
          <b-icon icon="caret-right-fill" />
          <span
            class="text-justify"
            v-html="
              $store.state.language === 'en'
                ? 'Given the commitments made by the African Heads of State to support the implementation of the main development Agenda in Africa;'
                : 'Compte tenu des engagements pris par les Chefs D\'État Africains pour soutenir la mise en œuvre du principal programme de développement en Afrique;'
            "
          />
          <br /><br />
          <b-icon icon="caret-right-fill" />
          <span
            class="text-justify"
            v-html="
              $store.state.language === 'en'
                ? 'Acknowledging the importance of the Agenda 2063, <b><q>The Africa We Want</q></b> in building a united and prosperous Africa;'
                : 'Reconnaissant l\'importance de l\'Agenda 2063, <q>L\'Afrique Que Nous Voulons</q> dans la construction d\'une Afrique unie et prospère;'
            "
          />
          <br /><br />
          <b-icon icon="caret-right-fill" />
          <span
            class="text-justify"
            v-html="
              $store.state.language === 'en'
                ? 'Understanding the strategic contributions of the Agenda 2030, <b><q>Leaving No One Behind</q></b> to the enhancement of the living conditions of Africans;'
                : 'Comprendre les contributions stratégiques de l\'Agenda 2030, « Ne Laisser Personne De Côté» à l\'amélioration des conditions de vie des Africains;'
            "
          />
          <br />
          <!-- eslint-disable-next-line vue/no-parsing-error -->
        </p>

        <b-collapse id="collapse-1" class="mt-2">
          <p class="pl-1 text-justify">
            <b-icon icon="caret-right-fill" />
            <span
              class="text-justify"
              v-html="
                $store.state.language === 'en'
                  ? 'Considering the critical role of young Africans in ameliorating the narrative through their meaningful participation in, and contributions to, the decisions on the continent;'
                  : 'Considérant le rôle critique des jeunes Africains dans l\'amélioration du récit grâce à leur participation significative et leurs contributions aux décisions sur le continent;'
              "
            />
            <br /><br />
            <b-icon icon="caret-right-fill" />
            <span
              class="text-justify"
              v-html="
                $store.state.language === 'en'
                  ? 'Convinced that collaboration between young Africans, the Civil Society Organizations (CSO), and other decision makers in the region can influence policies and enable better life for all;'
                  : 'Convaincus que la collaboration entre les jeunes Africains, les organisations de la société civile (OSC) et d\'autres décideurs de la région peut influencer les politiques et permettre une vie meilleure pour tous;'
              "
            />
            <br /><br />
            <b-icon icon="caret-right-fill" />
            <span
              class="text-justify"
              v-html="
                $store.state.language === 'en'
                  ? 'With the resolve, as young Africans, to contribute to the positive transformation of our communities, and the improvement of the living conditions of our people;'
                  : 'Avec la résolution, en tant que jeunes Africains, de contribuer à la transformation positive de nos communautés et à l\'amélioration des conditions de vie de notre peuple;'
              "
            />
            <br />
          </p>

          <br />

          <p class="text-justify">
            {{
              $store.state.language === "en"
                ? "OYALD was established to unite young leaders, professionals and entrepreneurs as collaborators towards the achievement of sustainable development in Africa. "
                : "OJLAD a été créé pour unir les jeunes leaders, professionnels et entrepreneurs en tant que collaborateurs pour la réalisation du développement durable en Afrique"
            }}
          </p>
        </b-collapse>

        <br />
        <b-button
          v-b-toggle.collapse-1
          variant="success"
          class="bg-success"
          @click="
            $store.state.language === 'en'
              ? readMoreText === 'Read More'
                ? (readMoreText = 'Read Less')
                : (readMoreText = 'Read More')
              : readMoreTextFrench === 'Lire la suite'
              ? (readMoreTextFrench = 'Lire moons')
              : (readMoreTextFrench = 'Lire la suite')
          "
          >{{
            $store.state.language == "en" ? readMoreText : readMoreTextFrench
          }}</b-button
        >
        <!-- bookmark -->
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
          alt="Image depicting members of OYALD-OJLAD"
          title="Image depicting members of OYALD-OJLAD"
          src="@/assets/img/oyald-collage.jpeg"
        />
        <!-- <small class="pl-2 pl-lg-4 d-block w-100">{{ $store.state.language === 'en' ? 'Image source:' : "Source de l'Image" }} <a href="https://www.un.org/en/africa/osaa/peace/youth.shtml" target="_blank">https://www.un.org/en/<wbr />africa/osaa/peace/<wbr />youth.shtml</a></small> -->
      </section>

      <section class="col-12 col-md-6 col-lg-8 col-xl-8">
        <h1 class="text-left text-success font-weight-bold w-100">
          {{
            $store.state.language === "en" ? "Who we are" : "Qui nous sommes"
          }}
        </h1>

        <p class="text-justify">
          {{
            $store.state.language === "en"
              ? "OYALD is a non-partisan, not-for-profit, and non-discriminatory network established to equip young Africans for the inclusive transformation of the continent. "
              : "OJLAD est un réseau non partisan, à but non lucratif et non discriminatoire établi pour équiper les jeunes Africains pour la transformation inclusive du continent."
          }}
        </p>

        <p class="text-justify">
          {{
            $store.state.language === "en"
              ? "Comprising young leaders, professionals and entrepreneurs of African descent/citizenship collaborating for sustainable development, we are a union of national chapters, organized and registered in the countries of Africa. "
              : "Composé de jeunes leaders, professionnels et entrepreneurs d'ascendance/citoyenneté Africaine collaborant pour le développement durable, nous sommes une union de sections nationales, organisées et enregistrées dans les pays d'Afrique."
          }}
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
        {{
          $store.state.language === "en" ? "What we do" : "Ce que nous faisons"
        }}
      </h1>

      <p>
        {{
          $store.state.language === "en"
            ? "Towards the realisation of the driving vision, OYALD: "
            : "Vers la réalisation de la vision, OJLAD:"
        }}
      </p>

      <ul>
        <li>
          <p>
            {{
              $store.state.language === "en"
                ? "Establishes a strong network of young African leaders, professionals, and entrepreneurs to serve as a reliable and effective human resource pool for inclusive and sustainable development in Africa."
                : "Établit un solide réseau de jeunes leaders, professionnels et entrepreneurs Africains pour servir de pool de ressources humaines fiable et efficace pour un développement inclusif et durable en Afrique."
            }}
          </p>
        </li>

        <li>
          <p>
            {{
              $store.state.language === "en"
                ? "Provides capacity development and mentoring opportunities to the African youth as agents of good leadership."
                : "Fournit des opportunités de développement et de mentorat aux jeunes Africains dans l'optique de devenir de bons leaders."
            }}
          </p>
        </li>

        <li>
          <p>
            {{
              $store.state.language === "en"
                ? "Provides opportunities for peaceful and humanity-focused interaction, for the sharing of ideas and knowledge resources among young Africans, towards enhanced unity, ethno-cultural tolerance and peaceful co-existence."
                : "Fournit des opportunités d'interaction pacifique et centrée sur l'humanité, pour le partage d'idées et de connaissances entre les jeunes Africains, vers une unité renforcée, la tolérance ethnoculturelle et la coexistence pacifique."
            }}
          </p>
        </li>

        <li>
          <p>
            {{
              $store.state.language === "en"
                ? "Stimulates the establishment of technology, arts and business incubation platforms and opportunities for young Africans towards environment-conscious socio-economic and technological development in Africa."
                : "Stimule la création des plateformes d'incubation de technologies, d'arts et d'entreprises, et des opportunités pour les jeunes Africains vers un développement socio-économique et technologique respectueux de l'environnement en Afrique."
            }}
          </p>
        </li>

        <li>
          <p>
            {{
              $store.state.language === "en"
                ? "Facilitates realistically streamlined projects targeted at achieving the 17 Sustainable Development Goals and their 169 targets in Africa."
                : "Facilite des projets rationalisés de manière réaliste visant à atteindre les 17 objectifs de développement durable et leurs 169 cibles en Afrique."
            }}
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      readMoreText: "Read More",
      readMoreTextFrench: "Lire la suite",
    };
  },
};
</script>

<style scoped>
:root {
  --custom-primary-color: #002200;
  --custom-secondary-color: #b99e00;
  --custom-gradient: linear-gradient(
    to right,
    var(--custom-green),
    var(--custom-gold) 80%
  );
}

.bg-success {
  background-color: var(--custom-primary-color) !important;
}

.text-success {
  color: var(--custom-primary-color) !important;
}

.bg-secondary {
  background-color: var(--custom-secondary-color) !important;
}
</style>