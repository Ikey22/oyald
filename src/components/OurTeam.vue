<template>
  <div class="w-100 container-fluid">
    <br />
    <br id="team-tag" />

    <h1
      id="general-secretariat"
      class="w-100 text-success font-weight-bold text-center"
      style="color: var(--custom-primary-color) !important"
    >
      {{
        query == "general-secretariat"
          ? $store.state.language === "en"
            ? "Our General Secretariat"
            : "Notre Secrétariat Général"
          : query == "country-secretaries"
          ? $store.state.language === "en"
            ? "Our National Coordinators / Country Secretaries"
            : "Nos Coordonnateurs/Secrétaires Nationaux"
          : query == "partners"
          ? $store.state.language === "en"
            ? "Our Partners"
            : "Nos Partenaires"
          : ""
      }}
    </h1>
    <br />
    <br />

    <team-member-list v-if="fetchData.length > 0 && !fetchDataError">
      <team-member
        v-for="(x, index) in fetchData"
        :key="`member-tile-${index + 1}`"
        :name="`${
          x.data().firstName +
          ' ' +
          (x.data().middleName || '') +
          ' ' +
          (x.data().surName || '')
        }`"
        :country="x.data().country ? x.data().country : ''"
        :role="$store.state.language == 'en' ? (x.data().role || '') : (x.data().french_role || '')"
        :imgURL="x.data().imgURL || ''"
        :socials="x.data().socials || null"
      />
    </team-member-list>

    <team-member-list v-else-if="fetchData.length < 1 && !fetchDataError">
      <p
        class="h3 text-center w-100 text-primary-color font-weight-bold"
        style="color: #004400 !important"
      >
        Loading, Please wait
      </p>
    </team-member-list>

    <team-member-list
      v-else-if="fetchDataError"
      class="d-flex align-items-center justify-content-around flex-column"
    >
      <p class="h2 text-danger text-center w-100 font-weight-bold">
        Network Error
      </p>
      <p class="h3 text-danger text-center w-100 font-weight-bold">
        Unable to fetch data, Please wait while we try to reconnect.<br />If
        nothing happens within 10 seconds, please
        <b-button @click="refresh" variant="warning">refresh</b-button> or check
        your network
      </p>
    </team-member-list>

    <br v-if="$route.path != '/__admin'" />
    <br v-if="$route.path != '/__admin'" />
    <br />

    <center class="w-100" v-if="$route.path != '/__admin'">
      <JoinOYALDButton />
    </center>

    <br />
  </div>
</template>

<script>
import TeamMember from "@/components/TeamMember.vue";
import TeamMemberList from "@/components/TeamMemberList.vue";
import JoinOYALDButton from "@/components/JoinOYALDButton.vue";

export default {
  components: {
    TeamMember,
    TeamMemberList,
    JoinOYALDButton,
  },
  props: {
    query: {
      type: String,
      required: true,
      default: "general-secretariat",
      validate(val) {
        const isValid = typeof val === "string" && val !== "";
        if (!isValid) {
          console.warn("No valid query passed for team members");
        }
        return isValid;
      },
    },
  },
  data() {
    return {
      fetchData: [],
      fetchDataError: null,
    };
  },
  name: "OurTeam",
  methods: {
    successCallback(res) {
      this.fetchData = res.docs;
      this.fetchDataError = false;
    },
    errorCallback(err) {
      this.fetchDataError = true;
      this.getfetchData();
      return console.error(err);
    },
    getfetchData() {
      const $this = this;

      const ref = $this.$firebase
        .firestore()
        .collection("members")
        .where("category", "==", $this.query)
        .orderBy("order");

      /* ref.get()
          .then($this.successCallback, $this.errorCallback)
          .catch(err => {
              return setTimeout(() => $this.errorCallback(err), 3000);
            }); */

      ref.onSnapshot(
        (snapshot) => {
          if (snapshot.docs.length) {
            $this.successCallback(snapshot);
          }
        },
        (err) => {
          console.error(err);
        }
      );
    },
    refresh() {
      return window.location.reload();
    },
  },
  mounted() {
    /* const $this = this;
      if (window.navigator.onLine){
          try {
            $this.getfetchData(); 
          } catch (err) {
            $this.errorCallback(err);
          }
      } else {
        $this.fetchDataError = true;
        window.addEventListener('online', () => {
          $this.getfetchData();
        });
      } */
    return setTimeout(() => this.getfetchData(), 1);
  },
};
</script>