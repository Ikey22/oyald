<template>
  <div class="w-100 container-fluid">

    <br />
    <br id="team-tag" />

    <h1 id="general-secretariat" class="w-100 text-success font-weight-bold text-center" style="color: var(--custom-primary-color) !important;">
      {{ query == 'general-secretariat' ? 'Our General Secretariat' : query == 'country-secretaries' ? 'Our National Coordinators / Country secretaries' : query == 'partners' ? 'Our Partners' : '' }}
    </h1>
    <br />
    <br >

    <team-member-list v-if="(fetchData.length > 0) && !fetchDataError">

                <team-member
                    v-for="(x, index) in fetchData"
                    :key="`general-secretariat-member-${index + 1}`"
                    :name="`${x.data().firstName + ' ' + (x.data().middleName || '') + ' ' + (x.data().surName || '')}`"
                    :role="x.data().role"
                    :imgURL="x.data().imgURL"
                    :socials="x.data().socials || null" 
                    />

    </team-member-list>
    <team-member-list v-else-if="(fetchData.length < 1) && !fetchDataError">
      <p class="h1 text-center w-100 text-white font-weight-bold">Loading, Please wait</p>
    </team-member-list>
    <team-member-list v-else-if="fetchDataError" class="d-flex align-items-center justify-content-around flex-column">
      <p class="h1 text-danger text-center w-100 font-weight-bold">Network Error</p>
      <p class="h3 text-danger text-center w-100 font-weight-bold">Unable to fetch data, Please wait while we try to reconnect.<br />If nothing happens within 10 seconds, please <b-button @click="refresh" variant="warning">refresh</b-button> or check your network</p>
    </team-member-list>

    <br />
    <br />
    <br />

    <center class="w-100">
        <JoinOYALDButton />
    </center>

    <br />
  </div>
</template>

<script>
import TeamMember from '@/components/TeamMember.vue'
import TeamMemberList from '@/components/TeamMemberList.vue';
import JoinOYALDButton from "@/components/JoinOYALDButton.vue";


export default {
  components: {
      TeamMember,
      TeamMemberList,
      JoinOYALDButton
    },
    props: {
      query: {
        type: String,
        required: true,
        default: 'general-secretariat',
        validate(val){
          return (typeof val == 'string') && (val != '');
        }
      }
    },
    data(){
      return {
        fetchData: [],
        fetchDataError: null
      }
    },
    name: "OurTeam",
    methods: {
      successCallback(res){
              this.fetchData = res.docs;
              this.fetchDataError = false;
            },
      errorCallback(err){
              this.fetchDataError = true
              this.getfetchData();
              return console.error(err);
            },
      getfetchData(){

        const $this = this;

        const ref = $this.$firebase.firestore()
            .collection('members')
            .where('category', '==', $this.query)
            .orderBy('order');

        /* ref.get()
          .then($this.successCallback, $this.errorCallback)
          .catch(err => {
              return setTimeout(() => $this.errorCallback(err), 3000);
            }); */

        ref.onSnapshot(snapshot => {
          if(snapshot.docs.length){
            $this.successCallback(snapshot);
          }
        }, err => {
          console.error(err);
        });
          
      },
      refresh(){
        return window.location.reload();
      }
    },
    mounted(){
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
    }
}
</script>