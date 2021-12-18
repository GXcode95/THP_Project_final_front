import React from 'react'
import Pricing from 'components/Pricing'
import HowItWorks from 'components/HowItWorks'
import Faq from 'components/Faq'
import {Box} from '@mui/material'
const VisitorSubscription = ({tiers}) => {

  return (
    <div>
      <Pricing tiers={tiers}/>
      <Box py="3em"/>
      <HowItWorks />
      <Box py="3em"/>
      <Faq />
      <Box py="3em"/>
    </div>
  )
}
    
export default VisitorSubscription
