import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import logoSmall from 'assets/images/logoSmall.svg'
const Progress = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <Box position="relative">
        <CircularProgress  size={150}  sx={{position:"absolute", top:0, left: 0, color: "secondary.light", opacity: 0.75}}/>
        <Box sx={{position:"absolute", top:20, left: 20, opacity: 0.8}}>
          <img src={logoSmall} width="100px" alt="logo_playbox" />
        </Box>
      </Box>

    </Box>
  );
}
    
export default Progress
