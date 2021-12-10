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


  return (
    <div className=''>
      <HowItWorks />
      <button onClick={e => console.log("salut",games )}></button>
      {games ? 
        <GameList games={games}/> :
        <h2>Loading ...</h2>
      }
      <Faq />
      {console.log("digjijg",process.env.REACT_APP_BASE_URL)}
    </div>
  )
}

export default Home
