import React from 'react'
import { Card, Button, Box, Typography, CardContent, CardHeader } from '@mui/material'
import StripeButton from 'components/buttons/StripeButton'
import { useSelector } from 'react-redux'
import isSigned from 'helpers/isSigned'
import {Link} from 'react-router-dom'
const PricingCard = ({ tier, variant, description }) => {
  const user = useSelector(state => state.userReducer)
  
  const priceInEuro = (priceInCent) => {
    return priceInCent / 100
  }

  
  
  return (
    <Card elevation={4} sx={{ borderRadius: "2px" }}>
      <CardHeader
        title={tier.name}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{ align: 'center' }}
        sx={{ backgroundColor: 'secondary.main', color: 'white.main' }}
      />
      <CardContent sx={{ py: 5 }}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='baseline'
          sx={{ mb: 2 }}
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
      {user && isSigned(user) ? 
        <StripeButton item={tier} quantity={1} variant={variant} /> :
        <Button className="stripe stripe-package" sx={{fontWeight: 600, mb: "0.5em"}}>
          <Link to='/connexion'>
            J'en profite
          </Link>    
        </Button>
      }

    </Card>
  )
}
export default PricingCard
