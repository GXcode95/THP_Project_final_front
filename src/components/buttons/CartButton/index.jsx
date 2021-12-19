import React from 'react' 
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { IconButton, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartButton = (props) => {
  const navigate = useNavigate()
  const cartItems = useSelector(state => state.userReducer.cart.cart_games)
  return (
    <IconButton onClick={e => navigate("/panier")}>
      {console.log("cart", cartItems.length)}
      <Badge badgeContent={cartItems && cartItems.length} color="ternary" 
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <ShoppingCartIcon {...props} className="icon-hover-effect" sx={{fontSize: "1.3em"}}/>
      </Badge>
    </IconButton>
  )
}
    
export default CartButton
