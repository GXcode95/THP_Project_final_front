import CartItem from 'components/CartItem'
import React from 'react'

const RentHistory = ({rentsHistory}) => {

    return (
      <CartItem games={rentsHistory} rent={true}/>
    )
}

export default RentHistory