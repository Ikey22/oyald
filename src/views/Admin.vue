<template>
  <div class="w-100 container-fluid">
    <p class="h1 text-primary-color text-center w-100 font-weight-bold">Admin</p>
    <br />

    <hr />

    <b-tabs align="center" pills fill justified>

      <!-- Begin Overview -->
      <b-tab active>
        <template #title>
          <b-icon icon="bar-chart-fill" />
          Overview
        </template>
        <hr />

        <div class="py-4">
          <p class="text-primary-color font-weight-bold h3'">Overview</p>
          <bar-chart
            :height="400"
            :labels="[`Members`, `New Membership Requests`, `Partners`, `Newsletter subscribtions`, `Unread Mails`]" 
            datasetLabel="Statistical overview"
            :datasetData="[16, 6, 1, 5, 3]"
            />
        </div>
      </b-tab>
      <!-- #End Overview -->

      <!-- Begin Members -->
      <b-tab>
        <template #title>
          <b-icon icon="people-fill" />
          Members
          <span class="p-2 rounded-lg bg-danger text-white font-weight-bold">16</span>
        </template>
        <hr />

        <div class="py-4">

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
                    
            <team-member
                    v-for="x in 12"
                    :key="`team-member-${x}`"
                    name="John Doe"
                    role="Regular"
                    :socials="{
                        facebook: true,
                        linkedin: true,
                        twitter: true,
                        instagram: true
                    }" 
                    />
          </team-member-list>

        </div>
      </b-tab>
      <!-- #End Members -->

      <!-- Begin Partners -->
      <b-tab>
        <template #title>
          <b-icon icon="people" />
          Partners
          <span class="p-2 rounded-lg bg-danger text-white font-weight-bold">5</span>
        </template>
        <hr />

        <div class="py-4">
          
          <team-member-list>
            <team-member
                    v-for="x in 4"
                    :key="`team-partner-${x}`"
                    name="Aleko Media"
                    role="Media Compant"
                    :socials="{
                        facebook: true,
                        linkedin: true,
                        twitter: true,
                        instagram: true
                    }" 
                    />
          </team-member-list>

        </div>
      </b-tab>
      <!-- #End Partners -->

      <!-- Begin Newsletter subscribtion -->
      <b-tab>
        <template #title>
          <b-icon icon="book-half" />
          Newsletter subcriptions
          <span class="p-2 rounded-lg bg-danger text-white font-weight-bold">5</span>
        </template>
        <hr />

        <div class="py-4">Newsletter subscribtions</div>
      </b-tab>
      <!-- End Nwsletter subscribion -->

      <!-- Begin Mails -->
      <b-tab>
        <template #title>
          <b-icon icon="envelope-fill" />
          Mails
          <span class="p-2 rounded-lg bg-danger text-white font-weight-bold">3</span>
        </template>
        <hr />

        <div class="py-4">Mails</div>
      </b-tab>
      <!-- #End Mails -->

    </b-tabs>

  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import TeamMember from '@/components/TeamMember.vue';
import TeamMemberList from '@/components/TeamMemberList.vue';

export default {
  components: {
    BarChart,
    TeamMember,
    TeamMemberList
  },
    name: "Admin",
    mounted(){}
}
</script>

<style scoped>
</style>