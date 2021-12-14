import React, { useState, useEffect } from 'react'
import CartItem from 'components/CartItem'
import RentButton from 'components/buttons/RentButton'
import APIManager from 'services/Api'
import { useDispatch, useSelector } from 'react-redux'
import userReducer from 'store/users/reducer'
import gamesReducer from 'store/games/reducer'
import { fetchUserRequest, fetchUserError, fetchUpdateCartSuccess, fetchUpdateOrderSuccess, fetchDeleteOrderSuccess } from 'store/users/actions'
import { Box, Container, Typography } from '@mui/material'
       
const Cart = () => {
  const dispatch = useDispatch()
  const storedCart = useSelector(state => state.userReducer.cart)
  const store = useSelector(state => state)
  const [cart, setCart] = useState(storedCart)
  
  console.log("STOOOOOORE", store)

  const handleAdd = async (orderId) => {
    const quantityElement = document.getElementById(orderId).lastChild
    const quantity = parseInt(quantityElement.textContent.split(' ')[2])
    const price = parseInt(quantityElement.textContent.split(' ')[0])

    dispatch(fetchUserRequest())
    const response = await APIManager.updateOrder(orderId, {quantity: quantity + 1})
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUpdateOrderSuccess(response))
      console.log("REEEEESPONse",response)
      quantityElement.textContent = `${price}€ x ${quantity + 1} = ${price * (quantity + 1)}€`
    }
  }

  const handleRemove = async (orderId) => {
    const quantityElement = document.getElementById(orderId).lastChild
    const quantity = parseInt(quantityElement.textContent.split(' ')[2]) > 1 ? parseInt(quantityElement.textContent.split(' ')[2]) : 2
    const price = parseInt(quantityElement.textContent.split(' ')[0])
    
    dispatch(fetchUserRequest())
    const response = await APIManager.updateOrder(orderId, {quantity: quantity -1})
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUpdateOrderSuccess(response))
      quantityElement.textContent = `${price}€ x ${quantity - 1} = ${price * (quantity - 1)}€`
    }
  }

  const handleDelete = async (orderId) => {
    const quantityElement = document.getElementById(orderId).parentElement
    dispatch(fetchUserRequest())
    const response = await APIManager.deleteOrder(orderId)
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchDeleteOrderSuccess(response))
      quantityElement.remove()
    }
  }

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
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Typography variant="h2" color="primary" mb="0.4em" >
          Mon panier
        </Typography>
        <CartItem 
          games={cart.cart_games} 
          quantityButton={true} 
          deleteButton={true} 
          handleAdd={handleAdd} 
          handleRemove={handleRemove} 
          handleDelete={handleDelete}
        />
      </Box>
    </Container>
  )
}
    
export default Cart
