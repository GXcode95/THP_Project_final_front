import React from 'react'
import GameCard from 'components/GameCard'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import Progress from 'components/Progress'

const GameList = ({ games, edit }) => {
  const gamesReducer = useSelector(state => state.gameReducer)

  return (
    <>
      {gamesReducer && gamesReducer.loading ?
        <Progress />
        :
        <Grid container spacing={3} pb={10}>
          {games && games.map((game, i) => (
            <Grid key={i} item xs={12} md={6} lg={6}>
              <GameCard game={game} edit={edit} />
            </Grid>
          ))}
        </Grid>
      }
    </>
  )
}

export default GameList
