import React from 'react'
import {Card, Button,Box, Typography, CardContent, CardActions, CardHeader } from '@mui/material'

const PricingCard = ({tier}) => {
  return(
    <Card elevation={4} sx={{borderRadius: "2px"}}>
      <CardHeader
        title={tier.title}
        subheader={tier.subheader}
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
            {tier.price}€
          </Typography>
          <Typography variant="h6" color="text.secondary">
            /mo
          </Typography>
        </Box>
        <ul>
          {tier.description.map((line) => (
            <Typography
              component="li"
              variant="subtitle1"
              align="center"
              key={line}
            >
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        <Button 
          fullWidth
          variant={tier.buttonVariant}
          color="secondary"
        >
          {tier.buttonText}
        </Button>
      </CardActions>
    </Card>
  )
}
export default PricingCard