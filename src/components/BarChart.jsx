import React from 'react'
import { Bar } from 'react-chartjs-2'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
/* import { mockBarData as data } from '../data/mockData.js' */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
  Filler,
  LineController,
  LineElement,
  PointElement
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
  Filler,
  LineController,
  LineElement,
  PointElement
)

export const BarChart = () => {
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
        text: 'Chart.js Bar Chart'
      }
    },
    scales: {
      x: {
        border: {
          display: true,
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
        border: {
          display: true,
          color: theme.palette.mode === 'dark' ? 'white' : 'black'
        },
        grid: {
          display: false,
          color: theme.palette.mode === 'dark' ? 'white' : 'black'
        }
      }
    }
  }

  const labels = ['Red', 'Orange', 'Blue', 'Pink']

  const data = {
    labels,
    datasets: [
      {
        label: 'Popularity of colours',
        data: [55, 23, 96, 13],
        backgroundColor:
               theme.palette.mode === 'dark'
                 ? colors.redAccent[500]
                 : colors.redAccent[200],
        borderWidth: 3,
        borderColor: theme.palette.mode === 'dark' ? 'white' : 'black'
      }
    ]
  }

  return <Bar data={data} options={options} />
}

export default BarChart
