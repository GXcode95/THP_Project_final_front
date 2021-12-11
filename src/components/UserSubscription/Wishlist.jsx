import CartItem from 'components/CartItem'
import React from 'react'
import { useDispatch } from 'react-redux'
import APIManager from 'services/Api'
import { fetchUserError, fetchUserRequest, fetchUserSignInSuccess } from 'store/users/actions'

const Wishlist = ({wishlist}) => {
  const dispatch = useDispatch()

  const handleAdd = async (e, rentId, rentQuantity) => {
    dispatch(fetchUserRequest())
    const response = await APIManager.updateRent(rentId, rentQuantity)
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUserSignInSuccess(response))
    }
  }

  const handleRemove = (e) => {

  }

  const handleDelete = (e) => {

  }

  return (
    <CartItem games={wishlist} rent={true} quantityButton={true} deleteButton={true} handleAdd={handleAdd}/>
  )
}

export default Wishlist