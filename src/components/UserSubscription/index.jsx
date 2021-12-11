import React from 'react'
import {Box, Tabs, Tab, Typography} from '@mui/material';
const UserSubscription = () => {
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

  return (
    <div>
     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>

        {TabPanel()}
        
      

     </Box>
    </div>
  )
}
    
export default UserSubscription
