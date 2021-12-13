import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CasinoIcon from '@mui/icons-material/Casino';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router';

export default function BottomBar() {
   const [value, setValue] = React.useState();
   let navigate = useNavigate();
   React.useEffect(
        () => {
           if(value){
            navigate(`${value}`)
           }             
        },[value]
   ) 

  return (
    <Box sx={{ width: 500 , zIndex: 10}}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" value='/' icon={<HomeIcon />} />
        <BottomNavigationAction label="Louez" value='/abonnement' icon={<CasinoIcon />} />
        {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
        <BottomNavigationAction label="Achetez" value='/panier' icon={<ShoppingCartIcon />} />

      </BottomNavigation>
      </Paper>
    </Box>
  );
}

