import React from 'react'
import {IconButton} from '@mui/material'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
const RentButton = (props) => {

  return (
    <IconButton >
      <LoyaltyIcon {...props}/>
    </IconButton>
  )
}
    
export default RentButton
