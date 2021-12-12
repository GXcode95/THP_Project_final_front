import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import AvatarDropdown from './AvatarDropdown'
import LoginButton from 'components/buttons/LoginButton';
import logo from 'assets/images/logo-playbox.svg'
import logoSmall from 'assets/images/logoSmall.svg'
import CartButton from 'components/buttons/CartButton'
import RentButton from 'components/buttons/RentButton'
import isSigned from 'helpers/isSigned'
import { Link } from 'react-router-dom'
import { MobileView, BrowserView } from 'react-device-detect';


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
              <MobileView>
                <img src={logoSmall} alt="playbox logo" height="50px"/>
              </MobileView>
              <BrowserView>         
                <img src={logo} alt="playbox logo" height="50px"/>
              </BrowserView>
            </Link>
            <Link to='/jeux'>
              <Typography variant="h6" component="span">Nos jeux</Typography>
            </Link>
          </Box>
          <Box>
            
            { isSigned(user) && <CartButton color="white"/> }
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
