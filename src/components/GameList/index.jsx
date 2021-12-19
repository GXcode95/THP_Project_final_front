import React from 'react'
import { Grid, IconButton, Typography} from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Progress from 'components/Progress'
import GameCard from 'components/GameCard'
import { useSelector } from 'react-redux'
import './gamelist.scss'
const GameList = ({ games, edit }) => {
  const gamesReducer = useSelector(state => state.gameReducer)
  const [gamesToShow, setGamesToShow] = React.useState(10)

  const handleClick = () => {
    setGamesToShow(gamesToShow + 10)
  }

  return (
    <>
      {gamesReducer && gamesReducer.loading ?
        <Progress />
        :
        <Grid container spacing={3} pb={10}>
          {games && games.slice(0,gamesToShow).map((game, i) => (
            <Grid key={i} item xs={12} md={6} lg={6}>
              <GameCard game={game} edit={edit} />
            </Grid>
          ))}

          {games && gamesToShow <= games.length && 
            <Grid item xs={12} display="flex" justifyContent="center">
              <IconButton 
                className="double-arrow-box"
                sx={{display:"flex",flexDirection:"column"}}
                onClick={handleClick}
              >
                <Typography variant="body1" color="secondary">afficher plus de jeux</Typography>
                <DoubleArrowIcon 
                  className="double-arrow"
                  color="secondary"
                  fontSize="large"
                />
              </IconButton>
            </Grid>
          }
        </Grid>
      }
    </>
  )
}

export default GameList
