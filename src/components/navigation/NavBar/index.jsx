import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import AvatarDropdown from './AvatarDropdown'
import LoginButton from 'components/buttons/LoginButton';
import logo from 'assets/images/logo-playbox.svg'
import CartButton from 'components/buttons/CartButton'
import RentButton from 'components/buttons/RentButton'
import isSigned from 'helpers/isSigned'
import { Link } from 'react-router-dom'
const NavBar = ()  => {
  const user = useSelector(state => state.userReducer)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar  
          sx={{
            display: "flex",
            justifyContent: "space-between", 
            alignItems: "center",  
            width: "100%"
          }} 
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Link to='/'>
              <img src={logo} alt="playbox logo" height="50px"/>
            </Link>
            <Link to='/jeux'>
              <Typography variant="h6" component="span">Voir les jeux</Typography>
            </Link>
          </Box>
          <Box>
            <CartButton color="white"/>
            { isSigned(user) && <RentButton color="white"/> }
            {
              isSigned(user) ?
              <AvatarDropdown /> :
              <LoginButton />
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
