import { Box } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header'
import { LineChart } from '../../components/LineChart'

const Line = () => {
  return (
      <Box m="20px">
         <Header title="Line Chart" subtitle="Simple Line Chart" />
         <Box height="75vh">
            <LineChart/>
         </Box>
      </Box>
  )
}

export default Line
