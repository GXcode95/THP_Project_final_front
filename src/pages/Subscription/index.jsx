import React, { useEffect } from 'react'
import isSubscribed from 'helpers/isSubscribed'
import isSigned from 'helpers/isSigned'
import { useSelector, useDispatch } from 'react-redux'
import UserSubscription from 'components/UserSubscription'
import VisitorSubscription from 'components/VisitorSubscription'
import { Box } from '@mui/material'
import APIManager from 'services/Api'
import { fetchUserRequest, fetchUserError, fetchUserSignInSuccess } from 'store/users/actions'
import Progress from 'components/Progress'


const Subscription = () => {
  const [tiers, setTiers] = React.useState()
  const dispatch = useDispatch()
  const userReducer = useSelector(state => state.userReducer)

  React.useEffect(
    () => {
      const fetchAllPackages = async () => {
        const response = await APIManager.getAllPackages()
        setTiers(response)
      }
      fetchAllPackages()
    }, []
  )

  useEffect (
    () => {
      const fetchUser = async () => {
        dispatch(fetchUserRequest())
        const response = await APIManager.getUserInfo(userReducer.user_info.id)
        if(response.error){
          dispatch(fetchUserError(response.error))
        }else{
          dispatch(fetchUserSignInSuccess(response))
        }
      };
    
      if (userReducer && isSigned(userReducer)) 
        fetchUser()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]
  )


  return (
    <>
    {(userReducer &&  userReducer.loading ) ? 
      <Progress /> : 
      <Box mx="1em">
      { isSubscribed(userReducer) ?  <UserSubscription user={userReducer} tiers={tiers}/> : <VisitorSubscription tiers={tiers}/>  }
      </Box>
    }
    </>
  )
}
    
export default Subscription