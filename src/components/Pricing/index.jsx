import * as React from 'react';
import { Grid, Container } from '@mui/material';
import PricingHero from './PricingHero'
import PricingCard from './PricingCard'


const Pricing = ({tiers}) => {


  return (
    <Container maxWidth="md" component="main">
      <PricingHero />
      <Grid container spacing={5} alignItems="flex-end">
        {tiers && tiers.map((tier, i) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={tier.name}
            xs={12}
            sm={6}
            md={4}
          >
            <PricingCard tier={tier} description={tier.description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Pricing
