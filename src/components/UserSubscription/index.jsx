import React from 'react'
import {Box, Tabs, Tab, Typography} from '@mui/material';
const UserSubscription = ({user}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = () => {
    switch (value) {
      case 0:
        return "wishlist"
      case 1:
        return "rents"
      case 2:
        return "rents_history"
      default:
        return "wishlist"
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
    <div>

      <Typography variant="h2" color="primary" align="center">Mon Abonnement</Typography>

      <Typography align="center" my="1em">
        Abonnement {packageName(user)} valide jusqu'au <Typography component="span" color="error">
                                                         {` ${user.user_info.subscription_ending}`}.
                                                       </Typography>
      </Typography>

      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Wishlist" />
            <Tab label="En cours" />
            <Tab label="Historique de location" />
          </Tabs>

          {TabPanel()}

      </Box>
    </div>
  )
}
    
export default UserSubscription
