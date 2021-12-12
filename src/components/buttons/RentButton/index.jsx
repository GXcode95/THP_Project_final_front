import React from 'react'
import {IconButton} from '@mui/material'
import CasinoIcon from '@mui/icons-material/Casino';
const RentButton = (props) => {

  return (
    <IconButton >
      <CasinoIcon {...props} className="icon-hover-effect" sx={{fontSize: "1.3em"}}/>
    </IconButton>
  )
}
    
export default RentButton