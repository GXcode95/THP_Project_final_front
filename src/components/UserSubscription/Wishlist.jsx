import CartItem from 'components/CartItem'
import React from 'react'

const Wishlist = ({wishlist}) => {
  const handleAdd = (e) => {
    
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