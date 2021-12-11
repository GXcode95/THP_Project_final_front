import React from 'react'
import {Typography} from '@mui/material'
const CartHistory = ({cart}) => {

  return (
    <div>
      <Typography variant="h2" color="primary" align="center">
        Historique d'achat
      </Typography>
      {console.log(cart)}
    </div>
  )
}
    
export default CartHistory
