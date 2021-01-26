<template>
  <div class="w-100 container-fluid">

    <br />
    <br id="team-tag" />

    <h1 id="general-secretariat" class="w-100 text-success font-weight-bold text-center" style="color: var(--custom-primary-color) !important;">General Secretariat</h1>
    <br />
    <br >

    <team-member-list>

                <team-member
                    v-for="x in 4"
                    :key="`team-admin-${x}`"
                    name="Admin"
                    role="Administrator"
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
      TeamMemberList,
    },
    name: "OurTeam"
}
</script>

<style scoped>
  </style>