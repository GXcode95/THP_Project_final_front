import React from 'react'
import { Link } from  'react-router-dom'
import { IconButton } from '@mui/material'
import CasinoIcon from '@mui/icons-material/Casino';
const RentButton = (props) => {

  return (
    <Link to="/abonnement">
      <IconButton >
        <CasinoIcon {...props} className="icon-hover-effect" sx={{fontSize: "1.3em"}}/>
      </IconButton>
    </Link>
  )
}
    
export default RentButton