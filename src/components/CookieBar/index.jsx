import React from 'react'
import CookieConsent from "react-cookie-consent";
import { useDispatch } from 'react-redux';
import { changeCookiesConsent } from 'store/users/actions';

const CookieBar = ({ user }) => {
  const dispatch = useDispatch();


  return (
    <CookieConsent
      location='bottom'
      style={{ background: "#2B373B" }}
      enableDeclineButton
      declineButtonText='Je refuse'
      onDecline={() => {
        dispatch(changeCookiesConsent(false))
      }}
      onAccept={() => { dispatch(changeCookiesConsent(true)) }}
      buttonText="J'accepte"
    >
      🍪 Ce site utilise les cookies .{" "}
      <span style={{ fontSize: "10px" }}>
        Si vous vous en fichez acceptez :)
      </span>
    </CookieConsent >

  )
}
export default CookieBar;