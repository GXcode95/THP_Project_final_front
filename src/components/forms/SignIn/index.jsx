import * as React from 'react';
import { Button, Box, Container } from '@mui/material';
import EmailInput from 'components/forms/input/EmailInput';
import PasswordInput from 'components/forms/input/PasswordInput';
import CookieBar from 'components/CookieBar';
import APIManager from 'services/Api'
import { fetchUserRequest, fetchUserSignInSuccess, fetchUserError } from 'store/users/actions'
import { setSnackbar } from 'store/snackbar/actions';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

const SignIn = () => {
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  const [banner, setBanner] = React.useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const consent = useSelector(state => state.userReducer.consentCookies)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (consent) {
      dispatch(fetchUserRequest())
      const response = await APIManager.signInUser(email, password)
      if(response.error) {
        dispatch(fetchUserError(response.error)) && dispatch(setSnackbar(true, "error", "Email et/ou mot de passe sont incorrect(s) "))
      } else {
        dispatch(fetchUserSignInSuccess(response)) && dispatch(setSnackbar(true, "success", "Vous êtes maintenant connecté(e)"))
        navigate('/')
      }
    } else {
      dispatch(setSnackbar(true, "error", "vous devez accepter les cookies pour vous connecter"))
      setBanner(true)
      Cookies.remove('CookieConsent')
    }
  };

  return (
    <Container component="main" maxWidth="xs" >
      {console.log(banner)}
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <EmailInput
          required
          onChange={e => setEmail(e.target.value)}
        />
        <PasswordInput onChange={e => setPassword(e.target.value)} />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Valider
        </Button>
      </Box>
      {banner && <CookieBar />}
    </Container>


  );
}

export default SignIn
