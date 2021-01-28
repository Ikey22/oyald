<template>
  <div class="w-100 container-fluid">

    <br />
    <br id="team-tag" />

    <h1 id="general-secretariat" class="w-100 text-success font-weight-bold text-center" style="color: var(--custom-primary-color) !important;">General Secretariat</h1>
    <br />
    <br >

    <team-member-list v-if="generalSecretariat.length && (!generalSecretariatError)">

                <team-member
                    v-for="(x, index) in generalSecretariat"
                    :key="`general-secretariat-member-${index + 1}`"
                    :name="`${x.data().firstName + ' ' + (x.data().middleName || '') + ' ' + x.data().surName}`"
                    :role="x.data().role"
                    :imgURL="x.data().imgURL"
                    :socials="{
                        facebook: true,
                        linkedin: true,
                        twitter: true,
                        instagram: true
                    }" 
                    />

    </team-member-list>
    <team-member-list v-else-if="generalSecretariat.length < 1">
      <p class="h1 text-center w-100 text-white font-weight-bold">Loading, Please wait</p>
    </team-member-list>
    <team-member-list v-else-if="generalSecretariatError" class="d-flex align-items-center justify-content-around flex-column">
      <p class="h1 text-danger text-center">Network Error</p>
      <p class="h3 text-danger text-center">Unable to fetch General secretariat, Please wait while we try to reconnect. If nothing happens within 20 seconds, please refresh your browser or check your network</p>
    </team-member-list>

    <br />
    <br />
    <br />

    <h1 id="national-coordinators" class="w-100 text-success font-weight-bold text-center" style="color: var(--custom-primary-color) !important;">National Coordinators</h1>
    <br />
    <br >

    <team-member-list>

                <team-member
                    v-for="x in 12"
                    :key="`team-member-${x}`"
                    name="John Doe"
                    role="Regular Member"
                    :socials="{
                        facebook: true,
                        linkedin: true,
                        twitter: true,
                        instagram: true
                    }" 
                    />

    </team-member-list>

    <br />
    <br id="partners-tag" />

    <h1 id="partners" class="w-100 text-success font-weight-bold text-center" style="color: var(--custom-primary-color) !important;">Our partners</h1>
    <br />

     <team-member-list>

                <team-member
                    v-for="x in 4"
                    :key="`team-partner-${x}`"
                    name="Aleko Media"
                    role="Media company"
                    :socials="{
                        facebook: true,
                        linkedin: true,
                        twitter: true,
                        instagram: true
                    }" 
                    />

     </team-member-list>

    <br />
    <br />
    <br />

    <center>
        <b-button
        style="background: var(--custom-primary-color);"
        type="button"
        to="/membership"
        >JOIN OYALD</b-button>
    </center>

    <br />
  </div>
</template>

<script>
import TeamMember from '@/components/TeamMember.vue'
import TeamMemberList from '@/components/TeamMemberList.vue';


export default {
  components: {
      TeamMember,
      TeamMemberList
    },
    data(){
      return {
        generalSecretariat: [],
        countryCoordinators: [],
        generalSecretariatError: null
      }
    },
    name: "OurTeam",
    methods: {
      getGeneralSecretariat(){
        const ref = this.$firebase.firestore()
            .collection('members')
            .where('category', '==', 'general-secretariat');

        ref.get()
          .then(res => {
            this.generalSecretariat = res.docs;
          })
          .catch(() => alert('Network Error'));
      }
    },
    mounted(){
      this.getGeneralSecretariat();
    }
}
</script>

<style scoped>
  </style>