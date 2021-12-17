import { Carousel } from 'react-carousel-minimal';
import React from 'react';
import APIManager from 'services/Api'
import GameTabs from './GameTabs';
import GameInfo from './GameInfo'
import { Button, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const GameDetails = () => {
  const { gameID } = useParams();
  const [game, setGame] = React.useState();
  const user = useSelector(state => state.userReducer.user_info)
  const [imageFromCloudinary, setImageFromCloudinary] = React.useState()
  const handleRent = async () => {
    const response = await APIManager.createRent({ quantity: 1, user_id: user.id, game_id: game.id })
    if (!response.error) alert("jeu ajouté au favoris")
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
        const tmpImage = game.images.map(image => { return { "image": `http://res.cloudinary.com/thefinalproject/image/upload/c_crop,h_200/v1/seed/${image}` } });
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
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
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
          <Button onClick={handleRent}>Louer</Button>
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
