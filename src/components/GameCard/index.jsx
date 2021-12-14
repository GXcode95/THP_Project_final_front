import React, { useState } from 'react'
import { Image } from 'cloudinary-react'
import { Card, Box, Typography, Button, Stack, Grid } from '@mui/material'
import GameIconsInfos from './GameIconsInfos'
import { Link, useNavigate } from 'react-router-dom';
import APIManager from 'services/Api'
import { useSelector } from 'react-redux';
import isSigned from 'helpers/isSigned'
import isSubscribed from 'helpers/isSubscribed'
import EditGameForm from 'components/forms/EditGame/EditGameForm';
import FavoriteButton from 'components/buttons/FavoriteButton';

const GameCard = ({ game, edit }) => {
  const [editMode, setEditMode] = useState(false)
  const userReducer = useSelector(state => state.userReducer)
  const user = useSelector(state => state.userReducer.user_info)
  const cart = useSelector(state => state.userReducer.cart)

  const handleCardHeight = () => {
    const screen = window.screen.width
    if (screen > 1500) {
       return 350
    } else if(screen > 1900) {
      return 200
    } else {
      return 300
    }
  }
  const navigate = useNavigate()

  const handleRent = async () => {
    if (!isSigned(userReducer)) {
      navigate('/connexion')
    } else if (!isSubscribed(userReducer)) {
      navigate('/abonnement')
    } else {
      const response = await APIManager.createRent({ quantity: 1, user_id: user.id, game_id: game.id })
      if (!response.error) alert("Jeu ajouté à la Wish List!")
    }
  }

  const handleBuy = async () => {
    if (!isSigned(userReducer)) {
      navigate('/connexion')
    } else {
      const response = await APIManager.createOrder({ quantity: 1, cart_id: cart.current_cart.id, game_id: game.id })
      if (!response.error) alert("Jeu ajouté au au panier!")
    }
  }

  const toggleEditMode = () => {
    setEditMode(!editMode)
    document.querySelector("body").classList.toggle("fixed")
  }

  return (
    <>
      <Card elevation={8}
        sx={{
          padding: "0em",
          borderRadius: '6px'

        }}
      >
        <Link to={`/jeu/${game.id}`}>
          <Typography variant="h4" align="center" noWrap py="0.5em" >
            {game.name}
          </Typography>
        </Link>
        {console.log("GAME", game)}
        <Grid container minHeight={`${handleCardHeight()}px`}>
            <Grid item lg={5} md={4} xs={12} display="flex" justifyContent="center" alignItems="center" overflow="hidden">

            <Image
              cloudName={process.env.REACT_APP_CLOUD_NAME}
              publicId={game.images && game.images.length > 0 ? "/seed/" + game.images[0] : "default_game"}
              height={handleCardHeight()}
              crop="crop"
            />
          </Grid>
          <Grid item md={7} xs={12} >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              height="100%"
              pr="0.2em" pl="0.8em"
            >
              <Link to={`/jeu/${game.id}`}>
                <Typography variant="h5" align="left" noWrap className="game-title-card">
                  {game.name}
                </Typography>
              </Link>
              <GameIconsInfos game={game} />
              <Typography variant="subtitle2" align="left" noWrap color="secondary">
                <strong className="price">
                  {game.price}€
                </strong>
                <sup>    <span className="badge">{game.sell_stock > 0 && `${game.sell_stock} en stock`}</span></sup>
              </Typography>
              <Stack direction="row" justifyContent="space-evenly">
                <FavoriteButton gameID={game.id} userReducer={userReducer} />
                <Button onClick={handleBuy} color="primary">Acheter</Button>
                <Button onClick={handleRent} color="secondary"> Louer</Button>
                {edit && <Button onClick={toggleEditMode}> Éditer</Button>}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Card>
      {editMode && <EditGameForm toggleEditMode={toggleEditMode} game={game} />}
    </>
  )
}

export default GameCard
