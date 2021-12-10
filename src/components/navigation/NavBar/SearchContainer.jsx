import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const SearchContainer = () => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        left: 0, 
        right: 0 
      }}
    >
      <TextField fullWidth label="Search" id="fullWidth" />
      
    </Box>
  );
}

export default SearchContainer