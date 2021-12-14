import React from 'react'
import GameCard from 'components/GameCard'
import { Grid } from '@mui/material'

const GameList = ({ games, edit }) => {

  return (
    <Grid container spacing={3}>
      {games && games.map((game, i) => (
        <Grid key={i} item xs={12} md={6} lg={6}>
          <GameCard game={game} edit={edit} />
        </Grid>
      ))}
    </Grid>
  )
}

export default GameList
