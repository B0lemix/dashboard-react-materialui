import React from 'react'
import { Pie } from 'react-chartjs-2'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import { mockPieData } from '../data/mockData.js'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export const PieChart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Pie Chart'
      }
    },

    scales: {
      x: {
        display: false,
        border: {
          display: false,
          color: theme.palette.mode === 'dark' ? 'white' : 'black'
        },
        grid: {
          display: false,
          drawOnChartArea: true,
          drawTicks: true,
          color: theme.palette.mode === 'dark' ? 'white' : 'black'
        }
      },
      y: {
        display: false,
        border: {
          display: false,
          color: theme.palette.mode === 'dark' ? 'white' : 'black'
        },
        grid: {
          display: false,
          color: theme.palette.mode === 'dark' ? 'white' : 'black'
        }
      }
    }
  }

  const labels = mockPieData.map((element) => element.label)

  const data = {
    labels,
    datasets: [
      {
        label: 'Popularity of colours',
        data: mockPieData.map((element) => element.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderWidth: 3,
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ]
      }
    ]
  }

  return <Pie data={data} options={options} />
}

export default PieChart