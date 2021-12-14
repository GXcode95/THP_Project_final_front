import React from 'react' 
import { IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';


const CartButton = (props) => {
  const navigate = useNavigate()

  return (
    <IconButton onClick={e => navigate("/panier")} sx={{display: "none"}}>
      <ShoppingCartIcon {...props} className="icon-hover-effect" sx={{fontSize: "1.3em"}}/>
    </IconButton>
  )
}
    
export default CartButton
