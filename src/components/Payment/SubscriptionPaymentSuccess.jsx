import React, { useEffect, useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import APIManager from 'services/Api';
import { fetchUserRequest, fetchUserError, fetchUserSignInSuccess } from 'store/users/actions';
import isSigned from 'helpers/isSigned';

const SubscriptionPaymentSuccess = () => {
  const dispatch = useDispatch()
  const [userPackage, setUserPackage] = useState()
  const userReducer = useSelector(state => state.userReducer)


  useEffect (
    () => {
      const fetchUser = async () => {
        dispatch(fetchUserRequest())
        const response = await APIManager.getUserInfo(userReducer.user_info.id)
        if(response.error){
          dispatch(fetchUserError(response.error))
        }else{
          dispatch(fetchUserSignInSuccess(response))
        }
      };
    
      if (userReducer && isSigned(userReducer)){
        fetchUser()
      }
    },
    []
  )

  React.useEffect(
    () => {
      const fetchAllPackages = async () => {
        const response = await APIManager.getAllPackages()
        setUserPackage(response.find(packageType => packageType.id === userReducer.user_info.package_id))
      }
      fetchAllPackages()
    }, [userReducer]
  )

  return (
    <>
    
      <Typography variant={"h6"} sx={{textAlign: "center", mt: 5}}>
        Votre souscription à l'abonnement {userPackage && userPackage.name} a bien été prise en compte!
      </Typography>
      <Typography variant={"h6"} sx={{textAlign: "center", mb: 5}}>
        Merci d'avoir choisi PlayBOX!
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button href={"/jeux"}>Revenir à la liste des jeux</Button>
      </Box>
    </>
  );
};

export default SubscriptionPaymentSuccess;