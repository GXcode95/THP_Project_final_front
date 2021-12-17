import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import APIManager from 'services/Api';
import isSigned from 'helpers/isSigned'
import EditProfile from 'components/forms/EditProfile'
import CartHistory from 'components/CartHistory'
import { Grid, Box, Typography } from '@mui/material'
import GameList from 'components/GameList';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import isAdmin from 'helpers/isAdmin';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { fetchUserRequest, fetchUserError, fetchUpdateFavoriteSuccess, endOfLoading } from 'store/users/actions';
import Progress from 'components/Progress';
import { setSnackbar } from 'store/snackbar/actions';

const MobileViewProfile = () => {
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
    <div className=''>
      {isSigned(userReducer) &&
        <Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography><sub><PermIdentityOutlinedIcon /></sub> Mon profil</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <EditProfile user={userReducer.user_info} />
            </AccordionDetails>
          </Accordion>
          {(!isAdmin(userReducer)) &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography><sub><LocalMallOutlinedIcon /></sub> Mes Commandes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {cartsHistory && <CartHistory carts={cartsHistory} />}
              </AccordionDetails>
            </Accordion>
          }
          {(!isAdmin(userReducer)) &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography><sub><FavoriteBorderIcon /></sub> Mes Favoris</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {favGames && favGames.length > 0 && <GameList games={favGames} />}
              </AccordionDetails>
            </Accordion>
          }
        </Box>
      }
    </div>
  )
}

export default MobileViewProfile;
