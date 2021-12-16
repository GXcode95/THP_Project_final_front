import React from 'react'
import GameDetails from 'components/GameDetails/'
import { useSelector } from 'react-redux'
import Progress from 'components/Progress'

const Game = () => {
  const gamesReducer = useSelector(state => state.gamesReducer)

  return (
    <>
      {gamesReducer.loading ? <Progress /> : <GameDetails /> }
    </>
  )
}

export default Game
