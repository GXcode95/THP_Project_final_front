import React from 'react' 
import { IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartButton = (props) => {

  return (
    <IconButton >
      <ShoppingCartIcon {...props}/>
    </IconButton>


  )
}
    
export default CartButton
