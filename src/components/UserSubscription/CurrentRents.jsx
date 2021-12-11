import CartItem from 'components/CartItem'
import React from 'react'

const CurrentRent = ({rents}) => {

    return (
      <CartItem games={rents} rent={true}/>
    )
}

export default CurrentRent