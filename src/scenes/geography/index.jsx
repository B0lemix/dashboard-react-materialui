import { Box } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header'
import { GeoChart } from '../../components/GeoChart'

const Geo = () => {
  return (
      <Box m="20px">
         <Header title="Geo Chart" subtitle="Simple Geo Chart" />
         <Box height="75vh">
            <GeoChart/>
         </Box>
      </Box>
  )
}

export default Geo
