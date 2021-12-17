import React from 'react'
import { useSelector } from 'react-redux';
import APIManager from 'services/Api';
import isSigned from 'helpers/isSigned'
import EditProfile from 'components/forms/EditProfile'
import CartHistory from 'components/CartHistory'
import { Grid, Box } from '@mui/material'
import GameList from 'components/GameList';
import { fetchUpdateFavoriteSuccess } from 'store/users/actions';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProfileNav from './ProfileNav';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const BrowserViewProfile = () => {
  const [cartsHistory, setCartsHistory] = React.useState()
  const user = useSelector(state => state.userReducer)
  const [favGames, setFavGames] = React.useState()
  const [value, setValue] = React.useState(0);

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
        return <EditProfile user={user.user_info} />

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
        const response = await APIManager.getCartsHistory()
        if (response.error) {
          alert(response.error)
        } else {
          console.log("history", response)
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
      {isSigned(user) &&
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
