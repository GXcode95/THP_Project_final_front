import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import AvatarDropdown from './AvatarDropdown'
import LoginButton from 'components/buttons/LoginButton';
import {Toolbar} from '@mui/material'
import logo from 'assets/images/logo-playbox.svg'
import CartButton from 'components/buttons/CartButton'
import RentButton from 'components/buttons/RentButton'
import isSigned from 'helpers/isSigned'

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
          <img src={logo} alt="playbox logo" height="50px"/> 
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
