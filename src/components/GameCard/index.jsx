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

const GameCard = ({ game, edit }) => {
  const [editMode, setEditMode] = useState(false)
  const user = useSelector(state => state.userReducer.user_info)

  const cardHeight = window.screen.width / 8
  const navigate = useNavigate()

  const handleRent = async () => {
    if (!isSigned(user)) {
      navigate('/connexion')
    } else if (!isSubscribed(user)) {
      navigate('/abonnement')
    } else {
      const response = await APIManager.createRent({ quantity: 1, user_id: user.user_info.id, game_id: game.id })
      if (!response.error) alert("jeu ajouter au favoris")
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

        <Grid container minHeight={`${cardHeight}px`}>
          <Grid item lg={5} md={4} xs={12} display="flex" justifyContent="center" alignItems="center" overflow="hidden">
            <Image
              cloudName={process.env.REACT_APP_CLOUD_NAME}
              publicId={game.images ? game.images[0] : "default_game"}
              height={cardHeight}
              crop="scale"
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
