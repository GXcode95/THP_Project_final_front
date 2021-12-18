import React from 'react'
import APIManager from 'services/Api'
import { useDispatch } from 'react-redux'
import { fetchGamesRequest, fetchGamesError, fetchGamesSuccess } from 'store/games/actions'
import { Link, useNavigate } from 'react-router-dom'
import Faq from 'components/Faq'
import HowItWorks from 'components/HowItWorks'
import GameList from 'components/GameList'
import BannerTitle from 'components/BannerTitle'
import HeroBanner from 'components/navigation/NavBar/HeroBanner'
import { Box, Button, Container } from '@mui/material'

const Home = () => {
  const [games, setGames] = React.useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const handlePayment = async () => {
    const stripeParams = {
      line_items: {
        price: 'price_1K81H5DzWhv05aHOWgjjlK5J',
        quantity: 1
      },
      mode: 'subscription'
    }
  // const stripeParams = {
  //   mode: 'payment'
  // }

    const response = await APIManager.createCheckout(stripeParams)
      console.log("RRRRRREEEEEEPPPPPOOOOOO?NNNNNNNSSSSSEEEEEEE", response)
      window.location.href = response.redirect_url
  }

  const handleBillingPortal = async () => {
    const response = await APIManager.createBillingPortal()
    console.log("BIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIILLING",response)
    window.location.href = response.redirect_url
  }

  const handlePrice = async () => {
    const response = await APIManager.updatePrice("price_1K5oEgDzWhv05aHOikcoWFCf", {amount: 10000})
  }

  return (
    <div className=''>
      <Button onClick={handlePayment}>
        PAYMENT ABONNEMENT
      </Button>
      <Button onClick={handleBillingPortal}>
        POOOOOOORTAL
      </Button>
      <Button onClick={handlePrice}>
        CHANGE PRICE
      </Button>
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
        <h2>Loading ...</h2>
      }
      <BannerTitle textColor="white.main" text="F.A.Q" />
      <Faq />
    </div>
  )
}

export default Home
