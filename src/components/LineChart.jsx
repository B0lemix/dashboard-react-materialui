import React from 'react'
import { Line } from 'react-chartjs-2'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import { mockLineData } from '../data/mockData.js'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const LineChart = () => {
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
        text: 'Chart.js Line Chart'
      }
    },
    scales: {
      x: {
        border: {
          display: true,
          color: theme.palette.mode === 'dark' ? 'grey' : 'grey'
        },
        grid: {
          display: true,
          drawOnChartArea: true,
          drawTicks: true,
          color: theme.palette.mode === 'dark' ? 'grey' : 'grey'
        }
      },
      y: {
        border: {
          display: true,
          color: theme.palette.mode === 'dark' ? 'grey' : 'grey'
        },
        grid: {
          display: true,
          color: theme.palette.mode === 'dark' ? 'grey' : 'grey'
        }
      }
    }
  }

  const labels = mockLineData[0].data.map((e) => e.x)

  const filterElements = mockLineData.map((element) => ({
    label: element.id.toUpperCase(),
    data: element.data.map((value) => value.y),
    borderColor: theme.palette.mode === 'dark' ? element.color : element.color2,
    backgroundColor: theme.palette.mode === 'dark' ? element.color2 : element.color
  }))

  const data = {
    labels,
    datasets: filterElements
  }

  return <Line data={data} options={options} />
}

export default LineChart
