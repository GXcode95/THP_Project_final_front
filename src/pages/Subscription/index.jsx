import React from 'react'
import isSigned from 'helpers/isSigned'
import { useSelector } from 'react-redux'
import UserSubscription from 'components/UserSubscription'
import VisitorSubscription from 'components/VisitorSubscription'

const Subscription = () => {
  const user = useSelector(state => state.userReducer)

  return (
    <div className='Subscription'>
      { isSigned(user) ?  <VisitorSubscription /> : <UserSubscription user={user}/> }
    </div>
  )
}
    
export default Subscription