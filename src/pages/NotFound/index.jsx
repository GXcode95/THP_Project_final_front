import React from 'react'
import {  Box} from '@mui/material'
import './notFound.scss'
import Dices from './Dices'
const NotFound = () => {

  return (
    <Box 
      position="relative"
      display="flex"
      mt="4em"
      sx={{justifyContent:"center"}} 
    >
      <Dices />
    </Box>
  )
}
    
export default NotFound
