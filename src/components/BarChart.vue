<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  name: "BarChart",
  props: {
      datasetBackgroundColor: {
          required: false,
          type: String,
          default: "#002200"
      },
      labels: {
          type: Array,
          required: false
      },
      datasetLabel: {
          type: String,
          required: false
      },
      datasetData: {
          type: Array,
          required: false
      }
  },
  mounted () {
    
    const $this = this;

    // Overwriting base render method with actual data.
    this.renderChart({
      labels: $this.labels || ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: $this.datasetLabel || 'GitHub Commits',
          backgroundColor: $this.datasetBackgroundColor || '#f87979',
          data: $this.datasetData || [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>