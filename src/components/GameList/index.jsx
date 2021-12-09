import React from 'react'
import GameCard from 'components/GameCard'
import {Container, Grid} from '@mui/material'

const GameList = () => {
  

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sx={12} md={6}>
          <GameCard />
        </Grid>
        <Grid item sx={12} md={6}>
          <GameCard />
        </Grid>
        <Grid item sx={12} md={6}>
          <GameCard />
        </Grid>
        <Grid item sx={12} md={6}>
          <GameCard />
        </Grid>
        <Grid item sx={12} md={6}>
          <GameCard />
        </Grid>
        <Grid item sx={12} md={6}>
          <GameCard />
        </Grid>

      </Grid>
    </Container>
  )
}
    
export default GameList
