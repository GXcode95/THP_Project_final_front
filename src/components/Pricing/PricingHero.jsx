import React from 'react'
import {Container, Typography} from '@mui/material'

const PricingHero = () => {
  return (
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="secondary"
        gutterBottom
        sx={{border:'1px solid', borderColor: 'secondary.main'}}
      >
        Nos offres
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Que vous soyez du genre pro du jeux de société, ou plutôt petit jeux à l'occasion, playbox
        s'adapate à tous les joueurs.
      </Typography>
    </Container>
  )
}
export default PricingHero