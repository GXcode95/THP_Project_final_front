import CartItem from 'components/CartItem'
import React from 'react'

const Wishlist = ({wishlist}) => {

  return (
    <CartItem games={wishlist} rent={true} quantityButton={true} deleteButton={true}/>
  )
}

export default Wishlist