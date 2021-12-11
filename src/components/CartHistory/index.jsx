import React from 'react'
import { Container, Typography } from '@mui/material'
import CartItem from 'components/CartItem'

const CartHistory = ({cart}) => {

  return (
    <div>
      <Typography variant="h2" color="primary" align="center">
        Historique d'achat
      </Typography>

      <Container>
        <CartItem games={cart} quantityButton={false} deleteButton={false}/>
      </Container>
      
    </div>
  )
}
    
export default CartHistory
