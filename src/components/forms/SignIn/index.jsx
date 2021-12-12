import * as React from 'react';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router';
import APIManager from 'services/Api'
import { fetchUserRequest, fetchUserSignInSuccess, fetchUserError } from 'store/users/actions'
import { Button,Box, Container } from '@mui/material';
import EmailInput from '../input/EmailInput';
import PasswordInput from '../input/PasswordInput';

const SignIn = () => {
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault()
    dispatch(fetchUserRequest())
    const response = await APIManager.signInUser(email, password)
    response.error ? 
      dispatch(fetchUserError(response.error)) :
      dispatch(fetchUserSignInSuccess(response))
    navigate('/')
  };

  return (
    <Container component="main" maxWidth="xs" >
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
        <PasswordInput  onChange={e => setPassword(e.target.value)} />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Valider
        </Button>
      </Box>
    </Container>
  );
}

export default SignIn
