import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const  About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems = "center">
        <Typography sx={{fontFamliy:"fantasy"}}variant="h2">This is CRUD Application</Typography>
        <Typography variant="h2">By MERN STACK</Typography>

      </Box>
    </div>
  )
}

export default About