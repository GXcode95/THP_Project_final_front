import React from 'react'
import APIManager from 'services/Api'
import { useDispatch } from 'react-redux'
import { fetchGamesRequest, fetchGamesError, fetchGamesSuccess } from 'store/games/actions'
import { Link } from 'react-router-dom'
import Faq from 'components/Faq'
import HowItWorks from 'components/HowItWorks'
import GameList from 'components/GameList'
import HeroBanner from 'components/navigation/NavBar/HeroBanner'
import { Box, Button, Container, Typography } from '@mui/material'
import Progress from 'components/Progress'
import Pricing from 'components/Pricing'
import Divider from 'components/Divider'
import Footer from 'components/Footer'


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
    <Box mb="0" pb="0">
      <HeroBanner />
      <HowItWorks />
      <Box sx={{ pt: 8, pb: 6 }} >
        <Typography variant="h3" align="center" component="h2" sx={{ fontWeight: '800', marginBottom: 4, paddingTop: 4 }} className="title-pb">
          LES JEUX
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p" className="title-pb" sx={{ mb: 8 }}>
          Découvrez tous nos jeux en location ou à l'achat.
        </Typography>
        {games ? (
          <Container>
            <GameList games={games.slice(0, 6)} />
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
      </Box>
      <Divider />

      <Pricing sx={{
        mb: 8
      }} />
      <Typography variant="h3" align="center" component="h2" sx={{ fontWeight: '800', marginBottom: 4, mt: 8, paddingTop: 4 }} className="title-pb">
        QUESTIONS / REPONSES
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p" className="title-pb" sx={{ mb: 8 }}>
        Vous avez des questions, on a certainement une réponse.
      </Typography>
      <Faq />
      <Footer />
    </Box >
  )
}

export default Home
