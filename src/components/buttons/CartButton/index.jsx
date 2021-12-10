import React from 'react' 
import { IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartButton = (props) => {

  return (
    <IconButton >
      <ShoppingCartIcon {...props} className="icon-hover-effect" sx={{fontSize: "1.3em"}}/>
    </IconButton>
  )
}
    
export default CartButton
