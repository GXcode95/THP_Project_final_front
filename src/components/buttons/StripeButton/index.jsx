import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import APIManager from 'services/Api'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';


const StripeButton = ({ item, quantity, variant }) => {
  const navigate = useNavigate()

  const handleToken = async (token) => {
    const response = await APIManager.buyPackage(token, item.id, quantity)
    if (!response.error)
      navigate(0)
  }

  return (
    <StripeCheckout
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      token={handleToken}
      className='stripe'
      label="J'en profite"
    />
  )
}

export default StripeButton
