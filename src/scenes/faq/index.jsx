import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Header from '../../Components/Header'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
      <Box m="20px">
         <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  1 Question
               </Typography>
            </AccordionSummary>

            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore
                  reprehenderit ut, rerum eveniet nostrum? Inventore id, nisi earum error soluta
                  quasi delectus incidunt reiciendis expedita animi officiis minima ad.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  1 Question
               </Typography>
            </AccordionSummary>

            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore
                  reprehenderit ut, rerum eveniet nostrum? Inventore id, nisi earum error soluta
                  quasi delectus incidunt reiciendis expedita animi officiis minima ad.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  1 Question
               </Typography>
            </AccordionSummary>

            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore
                  reprehenderit ut, rerum eveniet nostrum? Inventore id, nisi earum error soluta
                  quasi delectus incidunt reiciendis expedita animi officiis minima ad.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  1 Question
               </Typography>
            </AccordionSummary>

            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore
                  reprehenderit ut, rerum eveniet nostrum? Inventore id, nisi earum error soluta
                  quasi delectus incidunt reiciendis expedita animi officiis minima ad.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  1 Question
               </Typography>
            </AccordionSummary>

            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore
                  reprehenderit ut, rerum eveniet nostrum? Inventore id, nisi earum error soluta
                  quasi delectus incidunt reiciendis expedita animi officiis minima ad.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  1 Question
               </Typography>
            </AccordionSummary>

            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore
                  reprehenderit ut, rerum eveniet nostrum? Inventore id, nisi earum error soluta
                  quasi delectus incidunt reiciendis expedita animi officiis minima ad.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  1 Question
               </Typography>
            </AccordionSummary>

            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore
                  reprehenderit ut, rerum eveniet nostrum? Inventore id, nisi earum error soluta
                  quasi delectus incidunt reiciendis expedita animi officiis minima ad.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </Box>
  )
}

export default FAQ
