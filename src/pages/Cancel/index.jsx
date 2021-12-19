import React from 'react';
import { Grid, Typography, Button, Container } from '@mui/material';

const Cancel = () => {
  return (
    <>
      <Typography variant={"h1"} sx={{textAlign: "center", mt: 5}}>
        Oups...
      </Typography>
      <Typography variant={"h6"} sx={{textAlign: "center", mt: 5}}>
        Une erreur est survenue lors du payement.
      </Typography>
      <Container sx={{ maxWidth: "18em"}}>
        <Grid sx={{mt: 6}} container rowSpacing={5} width="100%">
        <Grid item xs={0} lg={1}/>
          <Grid item xs={12} lg={4}>
            <Button href={"/panier"} sx={{fontSize: "1em", textAlign:"center"}} fullWidth>Revenir dans le panier</Button>
          </Grid>
          <Grid item xs={0} lg={2}/>
          <Grid item xs={12} lg={4}>
            <Button href={"/abonnement"} sx={{fontSize: "1em", textAlign:"center"}} fullWidth >Revenir sur la page abonnement</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cancel;