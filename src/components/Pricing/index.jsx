import * as React from 'react';
import { Grid, Container } from '@mui/material';
import PricingHero from './PricingHero'
import PricingCard from './PricingCard'
import APIManager from 'services/Api'
import curvy from 'assets/images/curvyLines.png'


const Pricing = () => {
  const [tiers, setTiers] = React.useState()



  const getVariant = (i) => {
    switch (i) {
      case 0:
        return 'text'
      case 1:
        return 'outlined'
      case 2:
        return 'contained'
      default: ;
    }
  }

  const getDescription = (i) => {
    switch (i) {
      case 0:
        return '1 jeu tous les mois'
      case 1:
        return '2 jeux tous les mois'
      case 2:
        return '4 jeux tous les mois'
      default: ;
    }
  }

  React.useEffect(
    () => {
      const fetchAllPackages = async () => {
        const response = await APIManager.getAllPackages()
        setTiers(response)
      }
      fetchAllPackages()
    }, []
  )

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
            { tiers && <PricingCard tier={tier} variant={getVariant(i)} description={getDescription(i)} /> }
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Pricing
