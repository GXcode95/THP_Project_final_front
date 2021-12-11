import EditProfile from 'components/forms/EditProfile'
import React from 'react'
import { useSelector } from 'react-redux';
import isSigned from 'helpers/isSigned'
import {Grid} from '@mui/material'
import CartHistory from 'components/CartHistory'
const Profile = () => {
  const user = useSelector(state => state.userReducer)

  return (
    <div className=''>
      {console.log("USER :", user)}
      {console.log("USERSIGN :", isSigned(user))}

      { isSigned(user) && 
        <Grid container>

          <Grid item xs={12} md={6} spacing={8}>
            <EditProfile user={user.user_info} /> 
          </Grid>
          <Grid item xs={12} md={6} spacing={8}>
            <CartHistory cart={user.cart} /> 
          </Grid>
        </Grid>  
      }
    </div>
  )
}
    
export default Profile
