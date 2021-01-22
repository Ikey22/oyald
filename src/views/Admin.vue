<template>
  <div class="w-100 m-0 p-0">

    <!-- begin auth admin section -->
    <div class="w-100 container-fluid" v-if="$store.state.authAdmin">
    <p class="h1 text-primary-color text-center w-100 font-weight-bold">
      Admin
      </p>
    <center>
      <b-list-group style="max-width: 300px;">
              <b-list-group-item class="d-flex align-items-center">
                <b-avatar class="mr-3"></b-avatar>
                <span class="mr-auto">Ikechukwu Achom</span>
              </b-list-group-item>
           </b-list-group>
    </center>
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
          <center>
            <bar-chart
            :height="400"
            :labels="labels" 
            datasetLabel="Statistical overview"
            :datasetData="datasetData"
            style="max-width: 950px !important;"
            />
          </center>
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
          
          <br />

          <b-button
          to="/membership"
          class="bg-primary-color"
          >Add new member <b-icon icon="person-plus" class="text-white" /></b-button>

          <br />
          <br />

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
          
          <br />

          <b-button
          to="/membership"
          class="bg-primary-color"
          >Add new partner <b-icon icon="person-plus-fill" class="text-white" /></b-button>

          <br />
          <br />
          
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

        <div class="py-4">
          
          <center>
            <b-table
            striped
            class="w-100"
            bordered
            outlined
            caption-top
            sort-icon-left
            caption="List of individuals who signed up for the Newsletter"
            responsive="sm"
            hover
            selectable
            select-mode="multi"
            :fields="newsletterTableFields"
            :items="newsletterSubscribtion"
            />
          </center>

        </div>
      </b-tab>
      <!-- End Nwsletter subscribion -->

    </b-tabs>

  </div>
  <!-- #end auth admin section -->






  <!-- begin login form -->
  <div class="w-100 container-fluid" v-else-if="$store.state.authAdmin == null">
    <br />
    <p class="text-center w-100 font-weight-bold text-primary-color h2">Admin section, login!</p>
    <br />

    <b-form
      @submit.stop.prevent
      class="card shadow-md rounded p-3 d-block text-left"
      >
        <b-form-group></b-form-group>
      </b-form>

  </div>
  <!-- #end login form -->

  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import TeamMember from '@/components/TeamMember.vue';
import TeamMemberList from '@/components/TeamMemberList.vue';

//import Overview from '@/components/Admin/Overview.vue';

export default {
  components: {
    BarChart,
    TeamMember,
    TeamMemberList,
    //Overview
  },
    name: "Admin",
    data(){
      return {
        membershipRequests: 0,
        members: [],
        newsletterSubscribtions: 0,
        datasetData: [],
        labels: [`Members`, `New Membership Requests`, `Partners`, `Newsletter subscribtions`, `Unread Mails`],
        newsletterTableFields: [
          {
            key: "name",
            label: "Name in full",
            sortable: true,
          },
          {
            key: "field_of_interest",
            label: "Field of interest",
            sortable: true
          },
          {
            key: "email",
            sortable: true
          }
        ],
        newsletterSubscribtion: [
          {
            name: "John Matthew Doe",
            field_of_interest: "Sustainable development goals",
            email: "dohn.doe@gmail.com"
          },
          {
            name: "Jane Matthew Doe",
            field_of_interest: "Sustainable development goals",
            email: "dohn.doe@gmail.com"
          },
          {
            name: "James Matthew Doe",
            field_of_interest: "Sustainable development goals",
            email: "dohn.doe@gmail.com"
          }
        ]
      }
    },
    methods: {
      makeDatabaseRequest(){}
    }
}
</script>

<style scoped>
</style>