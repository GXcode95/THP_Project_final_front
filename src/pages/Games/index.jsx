import React from 'react'
import GameList from 'components/GameList'
import APIManager from 'services/Api'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@mui/material'
import { fetchGamesRequest, fetchGamesError, fetchGamesSuccess } from 'store/games/actions'
import SearchContainer from 'components/SearchContainer'
import Progress from 'components/Progress'
const Games = ({ edit }) => {
  const [games, setGames] = React.useState()
  const [sortedGames, setSortedGames] = React.useState()
  const dispatch = useDispatch()
  const gamesReducer = useSelector(state => state.gamesReducer)

  React.useEffect(
    () => {
      const fetchAllGames = async () => {
        dispatch(fetchGamesRequest())
        const response = await APIManager.getAllGames()
        if (response.error) {
          dispatch(fetchGamesError(response.error))
        } else {
          dispatch(fetchGamesSuccess(response))
          setGames(response)
          setSortedGames(response)
        }
      }
      fetchAllGames()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )

  return (
    <div>
      <SearchContainer 
        games={games}
        setGames={setSortedGames}
      />
      <Container>
      {gamesReducer.loading ? <Progress /> : <GameList games={sortedGames ? sortedGames : games} edit={edit} />}
      </Container>
    </div>
  )
}

export default Games
