import * as React from 'react';
import { Grid, Container } from '@mui/material';
import PricingHero from './PricingHero'
import PricingCard from './PricingCard'
import APIManager from 'services/Api'
import curvy from 'assets/images/curvyLines.png'


const Pricing = ({tiers}) => {


  return (
    <Container maxWidth="md" component="main" sx={{
      mb: 8, background: `url(${curvy}) repeat`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <PricingHero />
      <Grid container spacing={5} alignItems="flex-end">
        {tiers && tiers.length > 0 && tiers.map((tier, i) => (
          <Grid
            item
            key={tier.name}
            xs={12}
            sm={6}
            md={4}
          >
            { tiers && <PricingCard tier={tier} description={tier.description} /> }
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Pricing
