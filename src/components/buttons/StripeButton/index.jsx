import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import APIManager from 'services/Api'
import { useNavigate } from 'react-router-dom'


const StripeButton = ({ item, quantity, type }) => {
  const navigate = useNavigate()

  const handleTokenPackage = async (token) => {
    const response = await APIManager.buyPackage(token, item.id, quantity)
    if (response.error)
      alert(response.errror)
    else
      navigate(0)
  }

  const handleTokenGame = async (token) => {
    const response = await APIManager.buyCart(token)
    if (response.error)
      alert(response.errror)
    else
      navigate('/')
  }

  return (
    <StripeCheckout
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      token={ (type === "game") ? handleTokenGame : handleTokenPackage}
      className={ (type === "game" ) ? 'stripe' : 'stripe stripe-package'}
      label={ (type === "game") ? "Payer" : "J'en profite" }
    />
  )
}

export default StripeButton
