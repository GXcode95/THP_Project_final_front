import React from 'react'
import { useSelector } from 'react-redux';
import APIManager from 'services/Api';
import isSigned from 'helpers/isSigned'
import EditProfile from 'components/forms/EditProfile'
import CartHistory from 'components/CartHistory'
import { Grid, Box, Typography } from '@mui/material'
import GameList from 'components/GameList';
import { fetchUpdateFavoriteSuccess } from 'store/users/actions';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import isAdmin from 'helpers/isAdmin';
const MobileViewProfile = () => {
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
        <Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Mon profil</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <EditProfile user={user.user_info} />
            </AccordionDetails>
          </Accordion>
          {(!isAdmin(user)) &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Mes Commandes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {cartsHistory && <CartHistory carts={cartsHistory} />}
              </AccordionDetails>
            </Accordion>
          }
          {(!isAdmin(user)) &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Mes Favoris</Typography>
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
