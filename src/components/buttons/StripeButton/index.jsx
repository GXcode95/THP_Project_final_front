import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import APIManager from 'services/Api'
import {Button} from '@mui/material'

const StripeButton = ({item, quantity, variant}) => {

  const handleToken = async (token) => {
    console.log({token})
    const response = await APIManager.buyPackage(token, item.id, quantity)
  
    console.log("Paiement: ",response)
  }

  return (
    <Button 
      fullWidth
      color="secondary"
      variant={variant}
    >
      J'en profite
      <StripeCheckout 
        stripeKey={process.env.REACT_APP_PUBLIC_KEY}
        token={handleToken}
        className='stripe'
      />
    </Button>
  )
}
    
export default StripeButton
