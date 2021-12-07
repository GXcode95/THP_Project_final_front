import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import { useSelector } from 'react-redux';
// import AvatarDropdown from './AvatarDropdown'
import LoginButton from 'components/buttons/LoginButton';
import {Toolbar} from '@mui/material'
import logo from 'assets/images/logo.png'

const NavBar = ()  => {
  // const user = useSelector(state => state.userReducer.user)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <Box 
            sx={{
              display: "flex",
              justifyContent: "space-between", 
              alignItems: "center",  
              width: "100%"
            }}
          >
            <img src={logo} alt="playbox logo" height="50px"/> 
            {/* {
              user && user.id ?
              <AvatarDropdown /> : <LoginButton /> 
            } */}
            <LoginButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
