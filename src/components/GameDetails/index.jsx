import { Carousel } from 'react-carousel-minimal';
import React from 'react';
import APIManager from 'services/Api'
import GameTabs from './GameTabs';
import GameInfo from './GameInfo'
import { Button,Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGamesRequest, fetchGamesError, fetchGamesSuccess } from 'store/games/actions'
import { useParams } from 'react-router-dom'

const GameDetails = () => {
  const { gameID } = useParams();
  const [game, setGame] = React.useState();
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user_info)
  
  const handleRent = () => {
    
    const response = APIManager.createRent({quantity: 1, user_id: user.id , game_id: game.id})
    if(!response.error) alert("jeu ajouter au favoris")

  }

  React.useEffect(
    () => {
      const getGame = async (gameID) => {
        dispatch(fetchGamesRequest())
        const response = await APIManager.getGame(gameID)
        if (response.error) {
          dispatch(fetchGamesError(response.error))
        } else {
          dispatch(fetchGamesSuccess(response))
          setGame(response)
        }
      }
      getGame(gameID)
    }, []
  )
  const imageFromCloudinary = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    }
  ];

  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="">

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              padding: "0 20px"
            }}>
              <Carousel
                data={imageFromCloudinary}
                time={3000}
                width="850px"
                height="500px"
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
        <Grid item xs={6}>
          <GameInfo game={game} />
          <Button onClick={handleRent}>Louer</Button>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <GameTabs game={game} />
    </div>
  );
}

export default GameDetails;
