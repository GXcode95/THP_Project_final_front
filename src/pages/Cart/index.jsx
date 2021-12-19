import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Container, Typography, Button } from '@mui/material'
import CartItem from 'components/CartItem'
import { fetchUserError, fetchUpdateCartSuccess, fetchUpdateOrderSuccess, fetchDeleteOrderSuccess } from 'store/users/actions'
import APIManager from 'services/Api'
import Progress from 'components/Progress'
import processTextToPrice from 'helpers/ProcessTextForPrice'

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
    const price = quantityElement.textContent.split(' ')[0]
    const totalPrice = totalPriceElement.textContent.split(' ')[1].slice(0, -1)

    const response = await APIManager.updateOrder(orderId, {quantity: quantity + 1})
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUpdateOrderSuccess(response))
      totalPriceElement.textContent = `Total: ${processTextToPrice(price, 1, totalPrice)}€`
      quantityElement.textContent = `${processTextToPrice(price)}€ x ${quantity + 1} = ${processTextToPrice(price, quantity + 1)}€`
    }
  }

  const handleRemove = async (orderId) => {
    const quantityElement = document.getElementById(orderId).lastChild
    const totalPriceElement = document.getElementById("total_price")

    const quantity = parseInt(quantityElement.textContent.split(' ')[2]) > 1 ? parseInt(quantityElement.textContent.split(' ')[2]) : 2
    const price = quantityElement.textContent.split(' ')[0]
    const totalPrice = totalPriceElement.textContent.split(' ')[1].slice(0, -1)

    const response = await APIManager.updateOrder(orderId, {quantity: quantity -1})
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUpdateOrderSuccess(response))
      totalPriceElement.textContent = parseInt(quantityElement.textContent.split(' ')[2]) > 1 ? `Total: ${processTextToPrice(price, 1, totalPrice, -1)}€` : `Total: ${processTextToPrice(totalPrice)}€`
      quantityElement.textContent = `${processTextToPrice(price)}€ x ${quantity - 1} = ${processTextToPrice(price, (quantity - 1))}€`
    }
  }

  const handleDelete = async (orderId) => {
    const productElement = document.getElementById(orderId).parentElement
    const quantityElement = document.getElementById(orderId).lastChild
    const totalPriceElement = document.getElementById("total_price")

    const price = quantityElement.textContent.split(' ')[4].slice(0, -1)
    const totalPrice = totalPriceElement.textContent.split(' ')[1].slice(0, -1)

    const response = await APIManager.deleteOrder(orderId)
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchDeleteOrderSuccess(response))
      totalPriceElement.textContent = `Total: ${processTextToPrice(price, 1, totalPrice, -1)}€`
      productElement.remove()
    }
  }

  const handlePayment = async () => {
    const response = await APIManager.createCheckout({ mode: 'payment' })
      window.location.href = response.redirect_url
  }

  useEffect (
    () => {
      const fetchCart = async () => {
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
                Total: {cart && (totalPrice(cart.cart_games))/100}€
              </Typography>

              <Button onClick={e => handlePayment()}>
               Payer
              </Button>
            </>
        }

      </Box>
    </Container>
  )
}

export default Cart
