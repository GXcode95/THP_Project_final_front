import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';

const EditInputGrid = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.parentElement.querySelector(".MuiInputBase-input").value
    console.log(inputValue);
  };

  return (
    <Grid container >
        {Object.values(props).map( component =>
            (
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <Grid item xs={12} sx={{display: 'flex', gap:"10px", alignItems: 'center'}}>
                  {component}
                  <Button type="submit" onClick={handleSubmit} variant="outlined">Edit</Button>
                </Grid>
              </Box>
            )
          )}
    </Grid>
  );
};

export default EditInputGrid;