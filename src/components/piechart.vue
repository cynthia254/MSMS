<template>
    <div class="" style="width: 100%;">
      <Doughnut :data="data" :options="options" />
    </div>
  </template>
  
  <script>
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Doughnut } from 'vue-chartjs'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'DughnutChart',
    components: {
      Doughnut
    },
    data() {
      return {
        data: {
          datasets: [{
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [100, 20, 80, 10]
          }],
          labels: ['Kiambu Store', 'Thika Store', 'Nakuru Store', 'Kisumu Store']
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
            }
          }
        }
      }
    }
  }
  </script>
  