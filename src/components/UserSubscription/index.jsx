import React, { useEffect, useState} from 'react'
import {Box, Tabs, Tab, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useStore } from 'react-redux';
import { fetchUserRequest, fetchUserError, fetchUserSignInSuccess } from 'store/users/actions';
import APIManager from 'services/Api';
import Wishlist from './Wishlist';
import CurrentRent from './CurrentRents';
import RentHistory from './RentHistory';


const UserSubscription = ({user}) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const wishlist = user.wishlist
  const rents = user.rent_games
  const rentsHistory = user.rented_games

  const TabPanel = () => {
    switch (value) {
      case 0:
        return <Wishlist wishlist={wishlist} user={user}/>
      case 1:
        return <CurrentRent rents={rents} />
      case 2:
        return <RentHistory rentsHistory={rentsHistory}/>
      default:
        return <Wishlist wishlist={wishlist}/>
    }
  }

  const packageName = (user) => {
    switch (user.user_info.package_id) {
      case 1: 
        return "Débutant"
      case 2:
        return "Habitué"
      case 3:
        return ("Confirmé")
      default:
        return ("")
    }
  }


  return (
    <Box display="flex" flexDirection="column" alignItems="center">

      <Typography variant="h2" color="primary" align="center">Mon Abonnement</Typography>

      <Typography align="center" my="1em">
        Abonnement {packageName(user)} valide jusqu'au <Typography component="span" color="error">
                                                         {` ${user.user_info.subscription_ending}`}.
                                                       </Typography>
      </Typography>

      <Box sx={{ bgcolor: 'background.paper', maxWidth:"28em", width:"100%" }} >
        <Tabs value={value} onChange={handleChange} variant="scrollable" scollButtons="auto">
          <Tab label="Wishlist" />
          <Tab label="En cours" />
          <Tab label="Historique de location" />
        </Tabs>
        {TabPanel()}
      </Box>
    </Box>
  )
}
    
export default UserSubscription
