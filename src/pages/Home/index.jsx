import React from 'react'
import APIManager from 'services/Api'
import { useSelector, useDispatch } from 'react-redux'
import {fetchGamesRequest, fetchGamesError,fetchGamesSuccess} from 'store/games/actions'
import Faq from 'components/Faq'
import HowItWorks from 'components/HowItWorks'
import GameList from 'components/GameList'

const Home = () => {
  const [games, setGames] = React.useState()
  const dispatch = useDispatch()
  const gameStore = useSelector(state => state.gamesReducer)

  React.useEffect(
    () => {
      const fetchAllGames = async () => {
        dispatch(fetchGamesRequest())
        const response = await APIManager.getAllGames()
        if(response.error) {
          dispatch(fetchGamesError(response.error))
        } else {
          dispatch(fetchGamesSuccess(response))
          setGames(response)
        }
      }
      fetchAllGames()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]
  )
  React.useEffect(
    () => {
      console.log("effect store",gameStore)
    }, [gameStore]
  )

  return (
    <div className=''>
      <HowItWorks />
      <button onClick={e => console.log("salut",games )}></button>
      <GameList games={games}/>
      <Faq />
      {/* {gameStore && console.log("gamesStore", gameStore)} */}
    </div>
  )
}

export default Home
