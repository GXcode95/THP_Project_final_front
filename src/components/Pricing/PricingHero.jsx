import React from 'react'
import { Container, Typography, Box } from '@mui/material'

const PricingHero = () => {
  return (
    <Box component="main" sx={{
      pt: 8, pb: 8,
    }}>
      <Typography variant="h3" align="center" component="h2" sx={{ fontWeight: '800', marginBottom: 4, paddingTop: 4 }} className="title-pb">
        ABONNEMENTS
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Que vous soyez du genre pro du jeux de société, ou plutôt petit jeux à l'occasion, playbox
        s'adapate à tous les joueurs.
      </Typography>
    </Box>
  )
}
export default PricingHero