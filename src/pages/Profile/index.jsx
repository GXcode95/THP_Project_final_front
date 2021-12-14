import React from 'react'
import { useSelector } from 'react-redux';
import APIManager from 'services/Api';
import isSigned from 'helpers/isSigned'
import EditProfile from 'components/forms/EditProfile'
import CartHistory from 'components/CartHistory'
import { Grid, Typography } from '@mui/material'
import GameList from 'components/GameList';

const Profile = () => {
  const [cartsHistory, setCartsHistory] = React.useState()
  const user = useSelector(state => state.userReducer)
  const [favGames, setFavGames] = React.useState()
  
  

  React.useEffect(
    () => {
      const fetchCartsHistory = async () => {
        const response = await APIManager.getCartsHistory()
        if (!response.error) {
          setCartsHistory(response)
        }
      }
      fetchCartsHistory()
    }, []
  )

  React.useEffect(
    () => {
      const getFavoritesGames = async () => {
        if (user.favorites.length > 0) {
          return user.favorites.map( async (game) => {
            const response = await APIManager.getGame(game.id)
            favGames ? 
              setFavGames([...favGames, response]) :
              setFavGames([response])
          })
        }
      }
      getFavoritesGames()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]
  )
  return (
    <div className=''>
      {isSigned(user) &&
        <Grid container spacing={8}>

          <Grid item xs={12} md={6} >
            <EditProfile user={user.user_info} />
          </Grid>
          <Grid item xs={12} md={6} >
            <CartHistory carts={cartsHistory} />
          </Grid>
          <Grid item xs={12} md={12} >
            <Typography variant="h2" align="center" color="primary">
              Mes Favoris
            </Typography>
            {favGames && <GameList games={favGames} /> }
          </Grid>

        </Grid>
      }
    </div>
  )
}

export default Profile
