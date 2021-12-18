import React from 'react'
import divider from 'assets/images/divider.svg'
import { Box } from '@mui/material'

const Divider = () => {

  return (
    <Box sx={{ width: '100%', opacity: 0.75 }}>
      <img src={divider} width="100%" height="250px" />
    </Box>
  )
}

export default Divider;