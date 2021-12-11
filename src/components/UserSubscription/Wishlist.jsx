import CartItem from 'components/CartItem'
import React from 'react'
import { useDispatch } from 'react-redux'
import APIManager from 'services/Api'
import { fetchUserError, fetchUserRequest, fetchUserSignInSuccess } from 'store/users/actions'

const Wishlist = (props) => {
  const dispatch = useDispatch()

  const handleAdd = async (rentId, rentQuantity) => {
    dispatch(fetchUserRequest())
    const response = await APIManager.updateRent(rentId, rentQuantity)
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUserSignInSuccess(response))
    }
  }

  const handleRemove = async (rentId, rentQuantity) => {
    dispatch(fetchUserRequest())
    const response = await APIManager.updateRent(rentId, rentQuantity)
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUserSignInSuccess(response))
    }
  }

  const handleDelete = async (rentId) => {
    dispatch(fetchUserRequest())
    const response = await APIManager.deleteRent(rentId)
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUserSignInSuccess(response))
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