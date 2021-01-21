<template>
  <div class="w-100 container-fluid">
    <p class="h1 text-primary-color text-center w-100 font-weight-bold">Admin</p>
    <br />

    <hr />

    <b-tabs align="center" pills fill justified>
      <b-tab active>
        <template #title>
          <b-icon icon="bar-chart-fill" />
          Overview
        </template>
        <hr />

        <div class="py-4">
          <p class="text-primary-color font-weight-bold h3'">Overview</p>
          <bar-chart
            height="400"
            :labels="[`Members`, `New Membership Requests`, `Partners`, `Newsletter subscribtions`, `Unread Mails`]" 
            datasetLabel="Statistical overview"
            :datasetData="[12, 6, 1, 5, 3]"
            />
        </div>
      </b-tab>

      <b-tab>
        <template #title>
          <b-icon icon="people-fill" />
          Members
        </template>
        <hr />

        <div class="py-4">Members</div>
      </b-tab>

      <b-tab>
        <template #title>
          <b-icon icon="people" />
          Partners
        </template>
        <hr />

        <div class="py-4">Partners</div>
      </b-tab>

      <b-tab>
        <template #title>
          <b-icon icon="book-half" />
          Newsletter subcriptions
        </template>
        <hr />

        <div class="py-4">Newsletter subscribtions</div>
      </b-tab>

      <b-tab>
        <template #title>
          <b-icon icon="envelope-fill" />
          Mails
        </template>
        <hr />

        <div class="py-4">Mails</div>
      </b-tab>
    </b-tabs>

  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
export default {
  components: { BarChart },
    name: "Admin"
}
</script>

<style scoped>
</style>