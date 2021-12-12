import React, { useState, useEffect } from 'react'
import CartItem from 'components/CartItem'
import RentButton from 'components/buttons/RentButton'
import APIManager from 'services/Api'
import { useDispatch, useSelector } from 'react-redux'
import userReducer from 'store/users/reducer'
import gamesReducer from 'store/games/reducer'
import { fetchUserRequest, fetchUserError, fetchUpdateCartSuccess } from 'store/users/actions'
import { Container } from '@mui/material'
       
const Cart = () => {
  const dispatch = useDispatch()
  const storedCart = useSelector(state => state.userReducer.cart)
  const [cart, setCart] = useState(storedCart)

  useEffect (
    () => {
      const fetchCart = async () => {
        dispatch(fetchUserRequest())
        const response = await APIManager.getCart(storedCart.current_cart.id)
        if(response.error) {
          dispatch(fetchUserError(response.error))
        } else {
          dispatch(fetchUpdateCartSuccess(response.cart))
          setCart(response.cart)
        }
      }
      fetchCart()
  },
  []
  )

  return (
    <Container>
      <CartItem games={cart.cart_games} quantityButton={true} deleteButton={true}/>
    </Container>
  )
}
    
export default Cart
