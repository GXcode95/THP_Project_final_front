import React, {useState} from 'react'
import {Box, Tabs, Tab, Typography, Button} from '@mui/material';
import Wishlist from './Wishlist';
import CurrentRent from './CurrentRents';
import RentHistory from './RentHistory';
import APIManager from 'services/Api';
import Progress from 'components/Progress'

const UserSubscription = ({user, tiers}) => {
  const [value, setValue] = useState(0);
  const [userTier, setUserTier] = useState()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 

  const handleBillingPortal = async () => {
    const response = await APIManager.createBillingPortal()
    window.location.href = response.redirect_url
  }

  const wishlist = user.rent.wishlist
  const wishlist_limit = user.rent.wishlist_limit
  const rents = user.rent.rent_games
  const rentsHistory = user.rent.rented_games
  
  const TabPanel = () => {
    switch (value) {
      case 0:
        return <Wishlist wishlist={wishlist} wishlist_limit={wishlist_limit} user={user} userTier={userTier}/>
      case 1:
        return <CurrentRent rents={rents} />
      case 2:
        return <RentHistory rentsHistory={rentsHistory}/>
      default:
        return <Wishlist wishlist={wishlist} user={user} userTier={userTier}/>
    }
  }

  React.useEffect(
    () => {
      if(tiers)
        setUserTier(tiers.find(tier => tier.id === user.user_info.package_id))
    }, [tiers, user]
  )


  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" color="primary" align="center">Abonnement</Typography>
      {userTier && 
        <>
          <Typography variant="h2" color="secondary" my={2} align="center">
            {userTier.name}
          </Typography>
          <Typography align="center" my="1em">
            Votre abonnement vous permet de louer {userTier.game_number} jeu{userTier.game_number > 1 && 'x'}.
          </Typography>
          <Button onClick={handleBillingPortal}>
            Accéder au portail d'abonnement
          </Button>
        </>
      }
      <Box sx={{ bgcolor: 'background.paper', maxWidth:"28em", width:"100%" }} >
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
          <Tab label="Wishlist" />
          <Tab label="En cours" />
          <Tab label="Historique de location" />
        </Tabs>

        {user && user.loading ? <Progress /> : TabPanel()}
      </Box>
    </Box>
)
}
    
export default UserSubscription
