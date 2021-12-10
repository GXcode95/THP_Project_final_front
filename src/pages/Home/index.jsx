import React from 'react'
import APIManager from 'services/Api'
import { useDispatch } from 'react-redux'
import {fetchGamesRequest, fetchGamesError,fetchGamesSuccess} from 'store/games/actions'
import Faq from 'components/Faq'
import HowItWorks from 'components/HowItWorks'
import GameList from 'components/GameList'
import {Box, Button, Container} from '@mui/material'
import { Link } from 'react-router-dom'

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
      {games ? (
        <Container>
          <GameList games={games.slice(0,4)}/> 
          
          <Box display="flex" justifyContent="center" py="2.5em">
            <Button color="ternary" sx={{color: "primary.main"}}>
              <Link to="/games">
                Plus de jeux
              </Link>
            </Button>
          </Box>
        </Container>) 
        : 
        <h2>Loading ...</h2>
      }
      
      <Faq />
    </div>
  )
}

export default Home
