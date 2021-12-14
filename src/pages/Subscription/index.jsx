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

  useEffect (
    () => {
      const fetchUserInfo = async () => {
        dispatch(fetchUserRequest())
        const response = await APIManager.getUserInfo(userStored.user_info.id)
        if(response.error){
          dispatch(fetchUserError(response.error))
        }else{
          dispatch(fetchUserSignInSuccess(response))
        }
      };
    
      if (userStored && isSigned(userStored)) 
        fetchUserInfo()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]
  )


  return (
    <Box mx="1em">
      { isSubscribed(userStored) ?  <UserSubscription user={userStored}/> : <VisitorSubscription />  }
    </Box>
  )
}
    
export default Subscription