import React from 'react'
import {Card, Typography,} from '@mui/material'
const BannerTitle = ({text, bgColor="primary.main"}) => {

  return (
    <Card elevation={8} sx={{borderRadius:"0", margin: "3em 0"}}>
      <Typography 
        variant="h2"
        component="p"
        align="center" 
        py="0.3em"
        sx={{backgroundColor: bgColor , color: "white.main"}}
      >
        {text}
      </Typography>
  </Card>
  )
}
    
export default BannerTitle
