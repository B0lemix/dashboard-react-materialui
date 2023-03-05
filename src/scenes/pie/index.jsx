import { Box } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header'
import { PieChart } from '../../components/PieChart'

const Pie = () => {
  return (
      <Box m="20px">
         <Header title="Pie Chart" subtitle="Simple Pie Chart" />
         <Box height="75vh" display="flex" justifyContent="center">
            <PieChart />
         </Box>
      </Box>
  )
}

export default Pie
