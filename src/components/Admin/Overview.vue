<template>
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
</template>

<script>
import BarChart from '@/components/BarChart.vue';

export default {
    name: "Overview",
    components: {
      BarChart
    }
}
</script>

<style scoped>
</style>