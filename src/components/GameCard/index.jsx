import React, { useState } from 'react'
import { Image } from 'cloudinary-react'
import { Card, Box, Typography, Button, Stack, Grid } from '@mui/material'
import GameIconsInfos from './GameIconsInfos'
import { Link, useNavigate } from 'react-router-dom';
import APIManager from 'services/Api'
import { useDispatch, useSelector } from 'react-redux';
import isSigned from 'helpers/isSigned'
import isSubscribed from 'helpers/isSubscribed'
import EditGameForm from 'components/forms/EditGame/EditGameForm';
import FavoriteButton from 'components/buttons/FavoriteButton';
import { fetchPostWishListSuccess, fetchUserError, fetchUserRequest } from 'store/users/actions';
import { setSnackbar } from 'store/snackbar/actions';
const GameCard = ({ game, edit }) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const userReducer = useSelector(state => state.userReducer)
  const user = userReducer.user_info
  const cart = userReducer.cart
  const rent = userReducer.rent

  const handleCardHeight = () => {
    const screen = window.screen.width
    if (screen < 1500) {
      return 150
    } else if (screen < 1900) {
      return 250
    } else if (580 < screen < 900) {
      return 200
    } else {
      return 200
    }
  }
  const navigate = useNavigate()
  
  const handleRent = async () => {
    let wishListLength = 0  
    rent.wishlist && rent.wishlist.map(game => wishListLength += game.quantity)
    
    if (!isSigned(userReducer)) {
      navigate('/connexion')
    } else if (!isSubscribed(userReducer)) {
      navigate('/abonnement')
    } else if (wishListLength >= rent.wishlist_limit) {
      dispatch(setSnackbar(true, "error","Vous avez atteint la limite de jeux autorisés par votre abonnement"))
    } else if (rent.wishlist.find(wishedGame => wishedGame.game.id === game.id)){
      dispatch(setSnackbar(true, "error","Ce jeu a déjà été ajouté à votre liste de jeux pour le mois prochain!"))
    } else {
      dispatch(fetchUserRequest())
      const response = await APIManager.createRent({ quantity: 1, user_id: user.id, game_id: game.id })
      if(response.error){
        dispatch(fetchUserError(response.error))
        dispatch(setSnackbar(true, "error",  response.error))
      }else{
        dispatch(fetchPostWishListSuccess(response.wishlist))
        dispatch(setSnackbar(true, "success", "Le jeu a bien été ajouté a votre liste de jeux pour le mois prochain!"))
      }
    }
  }

  const handleBuy = async () => {
    if (!isSigned(userReducer)) {
      navigate('/connexion')
    } else {
      const response = await APIManager.createOrder({ quantity: 1, cart_id: cart.current_cart.id, game_id: game.id })
      if (!response.error) dispatch(setSnackbar(true, "success","Jeu ajouté au au panier!"))
    }
  }


  const toggleEditMode = () => {
    setEditMode(!editMode)
    document.querySelector("body").classList.toggle("fixed")
  }

  return (
    <>
      <Card elevation={6}
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

        <Grid container minHeight={`${handleCardHeight()}px`}>
          <Grid item lg={6} md={5} xs={12} display="flex" justifyContent="center" alignItems="center" overflow="hidden">
            <Box sx={{ padding: '10px' }}>
              <Image
                cloudName={process.env.REACT_APP_CLOUD_NAME}
                publicId={game.images && game.images.length > 0 ? game.images[0] : "default_game"}
                height={handleCardHeight()}
                crop={game.images && game.images.length > 0 ? "crop" : "scale" }
              />
            </Box>
          </Grid>
          <Grid item lg={6} md={7} xs={12} >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              height="100%"
              className='card-game-list'
            >
              <Link to={`/jeu/${game.id}`}>
                <Typography variant="h5" align="left" noWrap className="game-title-card">
                  {game.name}
                </Typography>
              </Link>
              <GameIconsInfos game={game} />
              <Typography variant="subtitle2" align="left" noWrap color="primary">
                <strong className="price">
                  {game.price}€
                </strong>
                <sup>    <span className="badge">{game.sell_stock > 0 && `${game.sell_stock} en stock`}</span></sup>
              </Typography>
              <Stack direction="row" justifyContent="space-evenly" sx={{ marginBottom: "1em" }}>
                <FavoriteButton gameID={game.id} userReducer={userReducer} />
                <Button onClick={handleBuy} color="primary" className="buttons-card">Acheter</Button>
                <Button onClick={handleRent} color="secondary" className="buttons-card"> Louer</Button>
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
