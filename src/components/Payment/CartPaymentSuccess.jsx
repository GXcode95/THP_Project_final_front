import { Typography, Box, Button } from '@mui/material';
import CartItem from 'components/CartItem';
import React from 'react';

const CartPaymentSuccess = ({lastCart}) => {
  return (
    <>
      <Typography variant={"h6"} sx={{textAlign: "center", mt: 5}}>
        Votre commande a bien été prise en compte et vous sera livrée dans les plus brefs délaits.
      </Typography>
      <Typography variant={"h6"} sx={{textAlign: "center", mb: 5}}>
        Merci d'avoir choisi PlayBOX!
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button href={"/jeux"}>Revenir à la liste des jeux</Button>
      </Box>
      <Typography variant={"h6"} sx={{textAlign: "center", mt: 5}}>
        Voici le récapitulatif de votre commande:
      </Typography>
      <Box display="flex" justifyContent="center">
        {lastCart && <CartItem games={lastCart.cart_games} quantityButton={false} deleteButton={false} />}
      </Box>
      
    </>
  );
};

export default CartPaymentSuccess;