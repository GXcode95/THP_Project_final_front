import React from 'react'
import { Image } from 'cloudinary-react'
import { Card, Box, Typography, Button, Stack, Grid } from '@mui/material'
import GameIconsInfos from './GameIconsInfos'
import { Link } from 'react-router-dom';
import APIManager from 'services/Api'
import { useSelector } from 'react-redux';


const GameCard = ({ game }) => {
  const user = useSelector(state => state.userReducer.user_info)
  const cardHeight = window.screen.width / 10
  // window.screen.width / 3

  const handleRent = () => {
    const response = APIManager.createRent({ quantity: 1, user_id: user.id, game_id: game.id })
    if (!response.error) alert("jeu ajouter au favoris")

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
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default GameCard
