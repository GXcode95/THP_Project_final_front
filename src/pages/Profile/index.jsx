import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import APIManager from 'services/Api';
import EditProfile from 'components/forms/EditProfile'
import CartHistory from 'components/CartHistory'
import { Grid, Typography } from '@mui/material'
import GameList from 'components/GameList';
import { fetchUserRequest, fetchUserError, fetchUpdateFavoriteSuccess, endOfLoading } from 'store/users/actions';
import Progress from 'components/Progress';
import { setSnackbar } from 'store/snackbar/actions';

const Profile = () => {
  const [cartsHistory, setCartsHistory] = React.useState()
  const userReducer = useSelector(state => state.userReducer)
  const [favGames, setFavGames] = React.useState()
  const dispatch = useDispatch()
  
  React.useEffect(
    () => {
      const fetchCartsHistory = async () => {
        dispatch(fetchUserRequest())
        const response = await APIManager.getCartsHistory()
        if (response.error) {
          dispatch(fetchUserError(response.error))
          dispatch(setSnackbar(true, "error", response.error))
        } else {
          setCartsHistory(response)
          dispatch(endOfLoading())
        }
      }
      fetchCartsHistory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )

  React.useEffect(
    () => {
      const fetchFavorites = async () => {
        dispatch(fetchUserRequest())
        const response = await APIManager.getFavorites()
        if (response.error) {
          dispatch(fetchUserError(response.error))
          dispatch(setSnackbar(true, "error", response.error))
        } else {
          fetchUpdateFavoriteSuccess(response)
          setFavGames(response.favorites)
        }
      }
      fetchFavorites()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )

  return (
    <div>
      {userReducer && userReducer.loading ?
        <Progress />
        :
        <Grid container spacing={8}>

          <Grid item xs={12} md={6} >
            <EditProfile user={userReducer.user_info} />
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
