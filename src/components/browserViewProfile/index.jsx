import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import APIManager from 'services/Api';
import EditProfile from 'components/forms/EditProfile'
import CartHistory from 'components/CartHistory'
import { Grid, Box } from '@mui/material'
import GameList from 'components/GameList';
import { fetchUserRequest, fetchUserError, fetchUpdateFavoriteSuccess, endOfLoading } from 'store/users/actions';
import Progress from 'components/Progress';
import { setSnackbar } from 'store/snackbar/actions';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProfileNav from './ProfileNav';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const BrowserViewProfile = () => {
  const [cartsHistory, setCartsHistory] = React.useState()
  const userReducer = useSelector(state => state.userReducer)
  const [favGames, setFavGames] = React.useState()
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const TabPanel = () => {
    switch (value) {
      case 0:
        return <EditProfile user={userReducer.user_info} />

      case 1:
        return cartsHistory && <CartHistory carts={cartsHistory} />
      case 2:
        return favGames && favGames.length > 0 && <GameList games={favGames} />
      case 3:
        return <Box>'rien'</Box>
      default: ;
    }
  }

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
    <div className=''>
      {userReducer && userReducer.loading ?

        <Progress />
        :
        <Box
          sx={{ flexGrow: 1, display: 'flex', height: 224 }}
        >
          <ProfileNav />
          <Grid sx={{ mr: 3 }}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab icon={<PermIdentityOutlinedIcon />} label="Profil" {...a11yProps(0)} />
              <Tab icon={<LocalMallOutlinedIcon />} label="Achats" {...a11yProps(1)} />
              <Tab icon={<FavoriteBorderIcon />} label="Favoris" {...a11yProps(2)} />
              <Tab label="??????" {...a11yProps(3)} />
            </Tabs>
          </Grid>
          {TabPanel()}
        </Box>
      }
    </div>
  )
}

export default BrowserViewProfile;
