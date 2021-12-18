import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import BrowserViewProfile from 'components/browserViewProfile'
import MobileViewProfile from 'components/mobileViewProfile';

const Profile = () => {
  return (
    <>
      <MobileView>
        <MobileViewProfile />
      </MobileView>
      <BrowserView>
        <BrowserViewProfile />
      </BrowserView>
    </>
  )
}

export default Profile
