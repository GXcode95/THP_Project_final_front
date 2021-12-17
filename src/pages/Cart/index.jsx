import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Container, Typography, Button } from '@mui/material'
import {Link} from 'react-router-dom'
import CartItem from 'components/CartItem'
import StripeButton from 'components/buttons/StripeButton'

import { fetchUserRequest, fetchUserError, fetchUpdateCartSuccess, fetchUpdateOrderSuccess, fetchDeleteOrderSuccess } from 'store/users/actions'
import userReducer from 'store/users/reducer'
import gamesReducer from 'store/games/reducer'
import RentButton from 'components/buttons/RentButton'
import APIManager from 'services/Api'
import Progress from 'components/Progress'

const Cart = () => {
  const dispatch = useDispatch()
  const userReducer = useSelector(state => state.userReducer)
  const [cart, setCart] = useState(userReducer.cart)

  const totalPrice = (cart_games) => {
    let total = 0
    cart_games.map( cart_game => total += cart_game.game.price * cart_game.quantity)
    return total
  }

  const handleAdd = async (orderId) => {
    const quantityElement = document.getElementById(orderId).lastChild
    const totalPriceElement = document.getElementById("total_price")

    const quantity = parseInt(quantityElement.textContent.split(' ')[2])
    const price = parseInt(quantityElement.textContent.split(' ')[0])
    const totalPrice = parseInt(totalPriceElement.textContent.split(' ')[1].slice(0, -1))

    dispatch(fetchUserRequest())
    const response = await APIManager.updateOrder(orderId, {quantity: quantity + 1})
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUpdateOrderSuccess(response))
      totalPriceElement.textContent = `Total: ${totalPrice + price}€`
      quantityElement.textContent = `${price}€ x ${quantity + 1} = ${price * (quantity + 1)}€`
    }
  }

  const handleRemove = async (orderId) => {
    const quantityElement = document.getElementById(orderId).lastChild
    const totalPriceElement = document.getElementById("total_price")

    const quantity = parseInt(quantityElement.textContent.split(' ')[2]) > 1 ? parseInt(quantityElement.textContent.split(' ')[2]) : 2
    const price = parseInt(quantityElement.textContent.split(' ')[0])
    const totalPrice = totalPriceElement.textContent.split(' ')[1].slice(0, -1)

    dispatch(fetchUserRequest())
    const response = await APIManager.updateOrder(orderId, {quantity: quantity -1})
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUpdateOrderSuccess(response))
      totalPriceElement.textContent = parseInt(quantityElement.textContent.split(' ')[2]) > 1 ? `Total: ${totalPrice - price}€` : `Total: ${totalPrice}€`
      quantityElement.textContent = `${price}€ x ${quantity - 1} = ${price * (quantity - 1)}€`
    }
  }

  const handleDelete = async (orderId) => {
    const productElement = document.getElementById(orderId).parentElement
    const quantityElement = document.getElementById(orderId).lastChild
    const totalPriceElement = document.getElementById("total_price")

    const price = parseInt(quantityElement.textContent.split(' ')[4].slice(0, -1))
    const totalPrice = parseInt(totalPriceElement.textContent.split(' ')[1].slice(0, -1))

    dispatch(fetchUserRequest())
    const response = await APIManager.deleteOrder(orderId)
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchDeleteOrderSuccess(response))
      totalPriceElement.textContent = `Total: ${totalPrice - price}€`
      productElement.remove()
    }
  }

  useEffect (
    () => {
      const fetchCart = async () => {
        dispatch(fetchUserRequest())
        const response = await APIManager.getCart(userReducer.cart.current_cart.id)
        if(response.error) {
          dispatch(fetchUserError(response.error))
        } else {
          dispatch(fetchUpdateCartSuccess(response.cart))
          setCart(response.cart)
        }
      }
      fetchCart()
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        { userReducer && userReducer.loading ? 
            <Progress /> 
            :
            <>   
              <CartItem
                games={cart.cart_games}
                quantityButton={true}
                deleteButton={true}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                handleDelete={handleDelete}
              />
              <Typography id="total_price" variant="h5" color="primary" mb="0.4em" >
                Total: {cart && totalPrice(cart.cart_games)}€
              </Typography>

              <StripeButton item={"Panier"} quantity={1} type="game" /> 
            </>
        }

      </Box>
    </Container>
  )
}

export default Cart
