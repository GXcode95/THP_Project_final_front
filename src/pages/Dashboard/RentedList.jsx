import React from 'react'
import APIManager from 'services/Api'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { setSnackbar } from 'store/snackbar/actions';

const AdminRent = ({rented}) => {
  const [rentsInfo, setRentsInfo] = React.useState()
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      const fetchRentedGameInfo = async (rent) => {
        const response = await APIManager.getGame(rent.game_id)
        if (response.error) {
          dispatch(setSnackbar(true, "error", response.error))
          return
        } 
        const currentGame = response
    
        const currentUser = await APIManager.getUserAdmin(rent.user_id)
        if (currentUser.error) {
          dispatch(setSnackbar(true, "error", response.error))
          return
        }
    
        const formattedRent = {
          rent: rent,
          game: currentGame,
          user: currentUser,
        }

        return (formattedRent)
      }
      const fillRented = async () => {
        let tmp = []
        rented.map(async (rent, i) => {
           let response = await fetchRentedGameInfo(rent)
           tmp.push(response)
           if(i === rented.length -1) {
             setRentsInfo(tmp)
           }
        })
      }
      if(rented) {
        fillRented()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rented]
  )

  return (
    <>
    { rented && 
      <TableContainer>
        <Table sx={{ minWidth: "90%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Jeux</TableCell>
              <TableCell align="left">Clients</TableCell>
              <TableCell align="left">Adresses</TableCell>
              <TableCell align="left">Téléphone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rentsInfo && rentsInfo.map( (rent,i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  <Link to={`jeu/${rent.game.id}`}>
                    { rent.game.name }
                  </Link>
                </TableCell>
                <TableCell align="left">
                  {rent.user.user_info.first_name + " " + rent.user.user_info.first_name}
                </TableCell>
                <TableCell align="left">
                  {rent.user.user_info.address}
                </TableCell>
                <TableCell align="left">
                  {rent.user.user_info.phone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    }
    </>
  )
}
export default AdminRent