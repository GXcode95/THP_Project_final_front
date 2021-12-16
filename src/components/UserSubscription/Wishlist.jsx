import CartItem from 'components/CartItem'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import APIManager from 'services/Api'
import { fetchUserError, fetchUserRequest, fetchPostWishListSuccess } from 'store/users/actions'
import { setSnackbar } from 'store/snackbar/actions'

const Wishlist = (props) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  let wishListLength = 0 
  props.wishlist.map(game => wishListLength += game.quantity) 
  const [wishListSpaceLeft, setWishListSpaceLeft] = useState(props.wishlist_limit - wishListLength)
  console.log(wishListSpaceLeft)

  const handleAdd = async (rentId) => {
    const quantityElement = document.getElementById(rentId).lastChild
    const quantity = parseInt(quantityElement.textContent.split(' ')[1])

    if(wishListSpaceLeft <= 0){
      dispatch(setSnackbar(true, "error","Vous avez atteint la limite de jeux autorisés par votre abonnement"))
      return
    }
    
    dispatch(fetchUserRequest())
    const response = await APIManager.updateRent(rentId, {quantity: quantity + 1})
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchPostWishListSuccess(response.wishlist))
      wishListSpaceLeft > 0 && setWishListSpaceLeft(wishListSpaceLeft - 1)
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
      dispatch(fetchPostWishListSuccess(response.wishlist))
      parseInt(quantityElement.textContent.split(' ')[1]) > 1 && setWishListSpaceLeft(wishListSpaceLeft + 1)
      quantityElement.textContent = `Quantité: ${quantity - 1}`
    }
  }

  const handleDelete = async (rentId) => {
    const quantityElement = document.getElementById(rentId).lastChild
    const quantity = parseInt(quantityElement.textContent.split(' ')[1])
    const rentElement = document.getElementById(rentId).parentElement

    dispatch(fetchUserRequest())
    const response = await APIManager.deleteRent(rentId)
    if(response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchPostWishListSuccess(response.wishlist))
      setWishListSpaceLeft(wishListSpaceLeft + quantity)
      rentElement.remove()
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