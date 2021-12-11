import React from 'react'
import { useSelector } from 'react-redux';
import APIManager from 'services/Api';
import isSigned from 'helpers/isSigned'
import EditProfile from 'components/forms/EditProfile'
import CartHistory from 'components/CartHistory'
import {Grid} from '@mui/material'


const Profile = () => {
  const [cartsHistory, setCartsHistory] = React.useState()
  const user = useSelector(state => state.userReducer)

  React.useEffect(
    () => {
      const fetchCartsHistory = async () => {
        const response = await APIManager.getCartsHistory()
        if(!response.error) {
          setCartsHistory(response)
        }
      }
      fetchCartsHistory()
    },[]
  )
  return (
    <div className=''>
      {console.log("USER :", user)}
      {console.log("USERSIGN :", isSigned(user))}

      { isSigned(user) && 
        <Grid container spacing={8}>

          <Grid item xs={12} md={6} >
            <EditProfile user={user.user_info} /> 
          </Grid>
          <Grid item xs={12} md={6} >
            <CartHistory carts={cartsHistory} />
          </Grid>
        </Grid>  
      }
    </div>
  )
}
    
export default Profile
