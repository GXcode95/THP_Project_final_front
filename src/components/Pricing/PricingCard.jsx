import React from 'react'
import {Card, Button,Box, Typography, CardContent, CardActions, CardHeader } from '@mui/material'
import StripeButton from 'components/buttons/StripeButton'
const PricingCard = ({tier, variant, description}) => {

  const priceInEuro = (priceInCent) => {
    return priceInCent / 100
  }

  return(
    <Card elevation={4} sx={{borderRadius: "2px"}}>
      <CardHeader
        title={tier.name}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{ align: 'center' }}
        sx={{ backgroundColor: 'secondary.main', color: 'white.main'}}
      />
      <CardContent sx={{py:5}}>
        <Box
            display='flex'
            justifyContent='center'
            alignItems='baseline'
            sx={{ mb: 2}}
        >
          <Typography component="h2" variant="h3" color="text.primary">
            {priceInEuro(tier.price)}€
          </Typography>
          <Typography variant="h6" color="text.secondary">
            /mois
          </Typography>
        </Box>
        <ul>
            <Typography
              component="li"
              variant="subtitle1"
              align="center"
            >
              {description}
            </Typography>
        </ul>
      </CardContent>
      <CardActions>
          <StripeButton item={tier} quantity={1} variant={variant}/>
      </CardActions>
    </Card>
  )
}
export default PricingCard