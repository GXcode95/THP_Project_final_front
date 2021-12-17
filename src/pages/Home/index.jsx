import React from 'react'
import APIManager from 'services/Api'
import { useDispatch } from 'react-redux'
import { fetchGamesRequest, fetchGamesError, fetchGamesSuccess } from 'store/games/actions'
import { Link } from 'react-router-dom'
import Faq from 'components/Faq'
import HowItWorks from 'components/HowItWorks'
import GameList from 'components/GameList'
import BannerTitle from 'components/BannerTitle'
import HeroBanner from 'components/navigation/NavBar/HeroBanner'
import { Box, Button, Container } from '@mui/material'
import Progress from 'components/Progress'

const Home = () => {
  const [games, setGames] = React.useState()
  const dispatch = useDispatch()

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
        }
      }
      fetchAllGames()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )
  return (
    <div className=''>
      <HeroBanner />
      <HowItWorks />
      <BannerTitle textColor="white.main" text="Nos Jeux" />
      {games ? (
        <Container>
          <GameList games={games.slice(0, 4)} />
          <Box display="flex" justifyContent="center" pt="3em">
            <Button color="ternary" sx={{ color: "primary.main" }}>
              <Link to="/jeux">
                Plus de jeux
              </Link>
            </Button>
          </Box>
        </Container>)
        :
        <Progress />
      }
      <BannerTitle textColor="white.main" text="F.A.Q" />
      <Faq />
    </div>
  )
}

export default Home
