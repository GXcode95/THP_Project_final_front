import React from 'react'
import {IconButton} from '@mui/material'
import CasinoIcon from '@mui/icons-material/Casino';
const RentButton = (props) => {

  return (
    <IconButton >
      <CasinoIcon {...props} className="icon-hover-effect"/>
    </IconButton>
  )
}
    
export default RentButton