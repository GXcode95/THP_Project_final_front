import React from 'react'
import GameCard from 'components/GameCard'
import {Container, Grid} from '@mui/material'

const GameList = ({games}) => {
  
  return (
    <Container>
      <Grid container spacing={3}>
        {games && games.map(game => (
          <Grid key={game.id} item xs={12} md={6}>
            <GameCard game={game}/>
          </Grid>
        ))}
      

      </Grid>
    </Container>
  )
}
    
export default GameList
