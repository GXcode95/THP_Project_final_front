import CartItem from 'components/CartItem'
import React from 'react'
import { useDispatch } from 'react-redux'
import APIManager from 'services/Api'
import { fetchUserError, fetchUserRequest, fetchUserSignInSuccess } from 'store/users/actions'

const Wishlist = (props) => {
  const dispatch = useDispatch()

  const handleAdd = async (rentId) => {
    const quantityElement = document.getElementById(rentId).lastChild
    const quantity = parseInt(quantityElement.textContent.split(' ')[1])
    dispatch(fetchUserRequest())
    const response = await APIManager.updateRent(rentId, {quantity: quantity + 1})
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUserSignInSuccess(response))
      quantityElement.textContent = `Quantité: ${quantity + 1}`
    }
  }

  const handleRemove = async (rentId) => {
    const quantityElement = document.getElementById(rentId).lastChild
    const quantity = parseInt(quantityElement.textContent.split(' ')[1]) > 1 ? parseInt(quantityElement.textContent.split(' ')[1]) : 2
    dispatch(fetchUserRequest())
    const response = await APIManager.updateRent(rentId, {quantity: quantity -1})
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUserSignInSuccess(response))
      quantityElement.textContent = `Quantité: ${quantity - 1}`
    }
  }

  const handleDelete = async (rentId) => {
    const quantityElement = document.getElementById(rentId).parentElement
    dispatch(fetchUserRequest())
    const response = await APIManager.deleteRent(rentId)
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUserSignInSuccess(response))
      quantityElement.remove()
    }
  }

  return (
    <CartItem 
      games={props.wishlist}
      user={props.user} 
      rent={true} 
      quantityButton={true} 
      deleteButton={true} 
      handleAdd={handleAdd} 
      handleRemove={handleRemove} 
      handleDelete={handleDelete}
    />
  )
}

export default Wishlist