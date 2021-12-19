import * as React from 'react';
import { useNavigate } from 'react-router';
import { Box, BottomNavigationAction, BottomNavigation, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CasinoIcon from '@mui/icons-material/Casino';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function BottomBar() {
  const [value, setValue] = React.useState();
  let navigate = useNavigate();
  React.useEffect(
    () => {
      if (value) navigate(`${value}`)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, navigate]
  )

  return (
    <Box sx={{ width: 500, zIndex: 10 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          sx={{ bgcolor: 'secondary.main' }}
          color="primary"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" value='/' icon={<HomeIcon />} sx={{ color: 'white.main' }} />
          <BottomNavigationAction label="Louez" value='/abonnement' icon={<CasinoIcon />} sx={{ color: 'white.main' }} />
          <BottomNavigationAction label="Achetez" value='/panier' icon={<ShoppingBagIcon />} sx={{ color: 'white.main' }} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

