<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
           
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
          datasets: [{
            label: 'Total Orders',
            data: [40, 20, 12, 10, 50, 45, 32, 34, 21, 10, 5],
            backgroundColor: 'rgba(0, 100, 0, 10)' 
          }],
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>
  