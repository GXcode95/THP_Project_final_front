import { Carousel } from 'react-carousel-minimal';
import React from 'react';
import APIManager from 'services/Api'
import { Typography, Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useSelector, useDispatch } from 'react-redux'
import { fetchGamesRequest, fetchGamesError, fetchGamesSuccess } from 'store/games/actions'
import { useParams } from 'react-router-dom'

const GameDetails = () => {
  const { gameID } = useParams();
  const [game, setGame] = React.useState();
  const [value, setValue] = React.useState('1');



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch()

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
      console.log(getGame(gameID))
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Typography variant="h3" noWrap py="0.5em" >
            {game && game.name}
          </Typography>
          <Typography noWrap py="0.5em" >
            Créateur: {game && game.creator}
          </Typography>
          <Typography noWrap py="0.5em" >
            Editeur: {game && game.editor}
          </Typography>
          <Typography noWrap py="0.5em" >
            Age: {game && game.min_age} et +
          </Typography>
          <Typography noWrap py="0.5em" >
            Nombre de joueur: {game && game.min_player} - {game && game.max_player}
          </Typography>
          <Typography noWrap py="0.5em" >
            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <Typography component="legend">Pas encore de notes</Typography>
              <Rating name="disabled" value={5} disabled />
            </Box>
          </Typography>
          <Typography noWrap py="0.5em" >
            Date de sortie: {game && game.release_date}
          </Typography>
          <Typography noWrap py="0.5em" >
            Disponible à la location: {game && game.rent_stock}
          </Typography>
          <Typography noWrap py="0.5em" >
            Disponible à l'achat: {game && game.sell_stock}
          </Typography>
          <Typography noWrap py="0.5em" >
            {game && game.price} €
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        <Box sx={{ width: '90%', typography: 'body1' }}>
          <TabContext value={value} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange}>
                <Tab label="Description" value="1" />
                <Tab label="Commentaire" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">{game && game.description}</TabPanel>
            <TabPanel value="2">Pas encore de commentaires</TabPanel>
          </TabContext>
        </Box>
      </Grid>

    </div>
  );
}

export default GameDetails;
