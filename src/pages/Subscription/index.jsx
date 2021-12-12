import React, { useEffect } from 'react'
import isSubscribed from 'helpers/isSubscribed'
import isSigned from 'helpers/isSigned'
import { useSelector, useDispatch } from 'react-redux'
import UserSubscription from 'components/UserSubscription'
import VisitorSubscription from 'components/VisitorSubscription'
import { Box } from '@mui/material'
import APIManager from 'services/Api'
import { fetchUserRequest, fetchUserError, fetchUserSignInSuccess } from 'store/users/actions'
import { useState } from 'react'

const Subscription = () => {
  const dispatch = useDispatch()
  const userStored = useSelector(state => state.userReducer)
  const [user, setUser] = useState(userStored)

  useEffect (
    () => {
      const fetchUser = async () => {
        dispatch(fetchUserRequest())
        const response = await APIManager.getUserInfo(user.user_info.id)
        if(response.error){
          dispatch(fetchUserError(response.error))
        }else{
          dispatch(fetchUserSignInSuccess(response))
          setUser(response)
        }
      };
    
      if (isSigned(user)) 
        fetchUser()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]
  )


  return (
    <Box mx="1em">
      { isSubscribed(user) ?  <UserSubscription user={user}/> : <VisitorSubscription />  }
    </Box>
  )
}
    
export default Subscription