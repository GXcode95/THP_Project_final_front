import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import APIManager from 'services/Api';
import { useDispatch } from 'react-redux';
import { fetchUserRequest, fetchUserError, endOfLoading } from 'store/users/actions';
import { setSnackbar } from 'store/snackbar/actions';
import CartPaymentSuccess from 'components/Payment/CartPaymentSuccess';
import SubscriptionPaymentSuccess from 'components/Payment/SubscriptionPaymentSuccess';

const Success = () => {
  const dispatch = useDispatch()
  const [lastCart, setLastCart] = useState()

  useEffect (() => {
    const fetchLastCart = async () => {
      dispatch(fetchUserRequest())

      const response = await APIManager.getCartsHistory()
      if (response.error) {
        dispatch(fetchUserError(response.error))
        dispatch(setSnackbar(true, "error", response.error))
      } else {
        setLastCart(response.at(-1))
        dispatch(endOfLoading())
      }
    }
    fetchLastCart()
  },
  []
  )

  return (
    <Container sx={{mt: 15}}>
      <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
      {lastCart && lastCart.cart.package_cart? 
        <SubscriptionPaymentSuccess lastCart={lastCart}/>
        :
        <CartPaymentSuccess lastCart={lastCart}/>
      }
    </Container>
  );
};

export default Success;