import * as React from 'react';
import {Grid, Container} from '@mui/material';
import PricingHero from './PricingHero'
import PricingCard from './PricingCard'
const tiers = [
  {
    title: 'Novice',
    price: '10',
    description: [
      '1 jeu tous les mois',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'text',
  },
  {
    title: 'Habitué',
    price: '15',
    description: [
      '2 jeux tous les mois',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Expert',
    price: '20',
    description: [
      '4 jeu tous les mois',
    ],
    buttonText: 'J\'en profite',
    buttonVariant: 'contained',
  },
];

const Pricing = () => {
  return (
  <Container maxWidth="md" component="main">
    <PricingHero />
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Enterprise' ? 12 : 6}
            md={4}
          >
            <PricingCard tier={tier}/>
          </Grid>
        ))}
      </Grid>
  </Container>
  );
}

export default Pricing
