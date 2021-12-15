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

const GameCard = ({ game, edit }) => {
  const dispatch = useDispatch()
  const userReducer = useSelector(state => state.userReducer)
  const user = userReducer.user_info
  const rent = userReducer.rent
  let wishListLength = 0 
  rent.wishlist && rent.wishlist.map(game => wishListLength += game.quantity) 
  const [wishListSpaceLeft, setWishListSpaceLeft] = useState(rent.wishlist_limit - wishListLength)
  const [editMode, setEditMode] = useState(false)

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
    } else if (wishListSpaceLeft <= 0) {
      alert("Vous avez atteint la limite de jeux autorisés par votre abonnement")
    } else {
      dispatch(fetchUserRequest())
      const response = await APIManager.createRent({ quantity: 1, user_id: user.id, game_id: game.id })
      if(response.error){
        dispatch(fetchUserError(response.error))
      }else{
        dispatch(fetchPostWishListSuccess(response.wishlist))
        alert("jeu ajouter au favoris")
        setWishListSpaceLeft(wishListSpaceLeft - 1)
      }
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
                <Button disabled>Acheter</Button>
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
