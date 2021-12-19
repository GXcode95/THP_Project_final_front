import { Carousel } from 'react-carousel-minimal';
import React from 'react';
import APIManager from 'services/Api'
import GameTabs from './GameTabs';
import GameInfo from './GameInfo'
import { Button, Grid, Stack } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import FavoriteButton from "components/buttons/FavoriteButton"
import isSigned from 'helpers/isSigned'
import isSubscribed from 'helpers/isSubscribed'
import { fetchPostWishListSuccess, fetchPostOrderSuccess, fetchUserError, fetchUserRequest } from 'store/users/actions';
import { setSnackbar } from 'store/snackbar/actions';

const GameDetails = () => {
  const { gameID } = useParams();
  const [game, setGame] = React.useState();
  const userReducer = useSelector(state => state.userReducer)
  const rent = userReducer.rent
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [imageFromCloudinary, setImageFromCloudinary] = React.useState()
  const DEFAULT_CLOUD_IMAGE_URL="http://res.cloudinary.com/thefinalproject/image/upload/c_scale,h_200/default_game"
  
  const handleRent = async () => {
    let wishListLength = 0
    rent.wishlist && rent.wishlist.map(game => wishListLength += game.quantity)

    if (!isSigned(userReducer)) {
      navigate('/connexion')
    } else if (!isSubscribed(userReducer)) {
      navigate('/abonnement')
    } else if (wishListLength >= rent.wishlist_limit) {
      dispatch(setSnackbar(true, "error", "Vous avez atteint la limite de jeux autorisés par votre abonnement"))
    } else if (rent.wishlist.find(wishedGame => wishedGame.game.id === game.id)) {
      dispatch(setSnackbar(true, "error", "Ce jeu a déjà été ajouté à votre liste de jeux pour le mois prochain!"))
    } else {
      dispatch(fetchUserRequest())
      const response = await APIManager.createRent({ quantity: 1, user_id: userReducer.user_info.id, game_id: game.id })
      if (response.error) {
        dispatch(fetchUserError(response.error))
        dispatch(setSnackbar(true, "error", response.error))
      } else {
        dispatch(fetchPostWishListSuccess(response.wishlist))
        dispatch(setSnackbar(true, "success", "Le jeu a bien été ajouté a votre liste de jeux pour le mois prochain!"))
      }
    }
  }
  
  const handleBuy = async () => {
    if (!isSigned(userReducer)) {
      navigate('/connexion')
    } else {
      const response = await APIManager.createOrder({ quantity: 1, cart_id: userReducer.cart.current_cart.id, game_id: game.id })
      if (response.error) {
        dispatch(setSnackbar(true, "error", response.error))
      }else {
        dispatch(setSnackbar(true, "success", "Jeu ajouté au au panier!"))
        dispatch(fetchPostOrderSuccess(response))
      }
    }
  }
  React.useEffect(
    () => {
      const getGame = async (gameID) => {
        const response = await APIManager.getGame(gameID)
        if (response.error) {
          alert(response.error)
        } else {
          setGame(response)
        }
      }
      getGame(gameID)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )

  React.useEffect(
    () => {
      if (game) {
        const tmpImage = game.images.length > 0 ?
          game.images.map(image => { return { "image": `http://res.cloudinary.com/thefinalproject/image/upload/c_scale,h_200/v1/${image}` } }) 
          :
          [{"image": DEFAULT_CLOUD_IMAGE_URL}]
          
        setImageFromCloudinary(tmpImage);
      }
    }, [game]
  )

  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="">
      <Grid container spacing={2} alignContent="center">
        {imageFromCloudinary &&
          <Grid item xs={12} md={6} lg={4}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                padding: "0 20px"
              }}>
                <Carousel
                  data={imageFromCloudinary}
                  time={3000}
                  width="800px"
                  height="400px"
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  automatic={true}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="white"
                  slideImageFit="contain"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                  }}
                />
              </div>
            </div>
          </Grid>
        }
        <Grid item xs={12} md={6} lg={8}>
          <GameInfo game={game && game} className="game-info-details" />
          <Stack spacing={2} direction="row">
            <FavoriteButton gameID={game && game.id} userReducer={userReducer} />
            <Button onClick={handleBuy} color="primary" className="buttons-card">Acheter</Button>
            <Button onClick={handleRent} color="secondary" className="buttons-card"> Louer</Button>
          </Stack>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <GameTabs game={game && game} setGame={setGame} />
    </div >
  );
}

export default GameDetails;
