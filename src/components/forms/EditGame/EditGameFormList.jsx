import React from 'react';
import { Grid, Box } from '@mui/material';


const EditGameFormList = (props) => {
  return (
    <Grid container display="flex" alignItems="center" flexDirection="column">
      {Object.values(props).map((component, i) =>
      (
        <Box key={i} component="form" noValidate sx={{ mt: 1 }} >
          <Grid item xs={12} sx={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
            {component}
          </Grid>
        </Box>
      )
      )}
    </Grid>
  );
};

export default EditGameFormList;