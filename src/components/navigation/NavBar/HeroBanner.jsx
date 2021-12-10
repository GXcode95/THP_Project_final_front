import React from 'react'
import {Card, Box, Typography} from '@mui/material'
import { Button } from '@mui/material'

const HeroBanner = () => {

  return (
    <Card sx={{mb:"3em", borderRadius:"0"}} className="HeroBanner">
      <Box 
        width="100vw" 
        height="350px" 
        display= "flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          background:"url(https://i.ibb.co/6myGXwV/chess-g5aae200df-1920-3.jpg) no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          }}
      >
        <Typography 
          variant="h2" 
          sx={{
            fontSize: "1.5rem", 
            letterSpacing: "0.3rem",
            textShadow: 2
          }}
          align="center"
          color="white.main"
          fontWeight="600"
          >
          Parce qu'il n'y a pas que des échecs dans la vie
          
        </Typography>
        <Typography 
          variant="h2" 
          sx={{
            fontSize: "4rem", 
          }}
          align="center"
          color="secondary.main"
          fontWeight="600"
         >
          Louez, testez, achetez !
        </Typography>
        <Button
           sx={{marginTop: "2rem", fontSize: "1.5rem"}}
           color="secondary"
        >
          S'abonner
        </Button>
      </Box>
    </Card>
  )
}
    
export default HeroBanner