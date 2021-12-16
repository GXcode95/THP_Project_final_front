import React from 'react'
import { useSelector } from 'react-redux';
import APIManager from 'services/Api';
import isSigned from 'helpers/isSigned'
import EditProfile from 'components/forms/EditProfile'
import CartHistory from 'components/CartHistory'
import { Grid, Typography } from '@mui/material'
import GameList from 'components/GameList';
import { fetchUpdateFavoriteSuccess } from 'store/users/actions';
import Snack from 'components/Snack'

const Profile = () => {
  const [cartsHistory, setCartsHistory] = React.useState()
  const user = useSelector(state => state.userReducer)
  const [favGames, setFavGames] = React.useState()
  
  

  React.useEffect(
    () => {
      const fetchCartsHistory = async () => {
        const response = await APIManager.getCartsHistory()
        if (response.error) {
          alert(response.error)
        } else {
            console.log("history",  response)
          setCartsHistory(response)
        }
      }
      fetchCartsHistory()
    }, []
  )

  React.useEffect(
    () => {
      const fetchFavorites = async () => {
        const response = await APIManager.getFavorites()
        if (!response.error) {
          fetchUpdateFavoriteSuccess(response)
          setFavGames(response.favorites)
        }
      }
      fetchFavorites()
    }, []
  )

  return (
    <div className=''>
      <Snack />
      {isSigned(user) &&
        <Grid container spacing={8}>
          
          <Grid item xs={12} md={6} >
            <EditProfile user={user.user_info} />
          </Grid>
          <Grid item xs={12} md={6} >
            {cartsHistory && <CartHistory carts={cartsHistory} /> }
          </Grid>
          <Grid item xs={12} md={12} >
            <Typography variant="h2" align="center" color="primary">
              Mes Favoris
            </Typography>
            {favGames && favGames.length > 0 && <GameList games={favGames} /> }
          </Grid>

        </Grid>
      }
    </div>
  )
}

export default Profile
