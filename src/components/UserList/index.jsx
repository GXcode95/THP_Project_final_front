import React from 'react'
import { Paper } from '@mui/material'
import Progress from 'components/Progress'
import APIManager from 'services/Api'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserError, fetchUserRequest } from 'store/users/actions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const UserList = () => {
  const [users, setUsers] = React.useState()
  const dispatch = useDispatch()
  const userReducer = useSelector(state => state.userReducer)

  React.useEffect(
    () => {
      const fetchAllUsers = async () => {
        dispatch(fetchUserRequest())
        const response = await APIManager.getUsersAdmin()
        if (response.error) {
          dispatch(fetchUserError(response.error))
        } else {
          dispatch(fetchUserRequest(response))
          setUsers(response)
        }
      }
      fetchAllUsers()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )


  return (
    <>
      {userReducer &&
        <TableContainer>
          <Table sx={{ minWidth: "90%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Prénom</TableCell>
                <TableCell align="left">Nom</TableCell>
                <TableCell align="left">Téléphone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && users.map((user, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.first_name}</TableCell>
                  <TableCell align="left">{user.last_name}</TableCell>
                  <TableCell align="left">{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </>
  )
}

export default UserList
