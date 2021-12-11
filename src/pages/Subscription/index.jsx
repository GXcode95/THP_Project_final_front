import React from 'react'
import isSubscribed from 'helpers/isSubscribed'
import { useSelector } from 'react-redux'
import UserSubscription from 'components/UserSubscription'
import VisitorSubscription from 'components/VisitorSubscription'

const Subscription = () => {
  const user = useSelector(state => state.userReducer)

  return (
    <div className='Subscription'>
      { isSubscribed(user) ?  <UserSubscription user={user}/> : <VisitorSubscription />  }
    </div>
  )
}
    
export default Subscription