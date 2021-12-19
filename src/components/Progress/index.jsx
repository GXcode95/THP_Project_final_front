import React from 'react'
import {Box, CircularProgress } from '@mui/material';
import logoSmall from 'assets/images/logoSmall.svg'
const Progress = () => {

  return (
    <Box 
      sx={{ 
        display: 'flex',
        width: "100%",
        height: "100%",
        justifyContent: "center",
        minHeight: "150px",
        minWidth: "150px",
      }}
    >

      <Box position="relative" sx={{right:"50px"}}> 
        <CircularProgress  
          size={150}  
          sx={{
            position:"absolute",
            top:0,
            left: 0,
            color: "secondary.light",
            opacity: 0.75
          }}
        />
        <Box sx={{position:"absolute", top:25, left: 25, opacity: 0.8}}>
          <img src={logoSmall} width="100px" alt="logo_playbox" />
        </Box>
      </Box>

    </Box>
  );
}
    
export default Progress
