import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import APIManager from 'services/Api'
import { fetchUserRequest, fetchUserSignInSuccess, fetchUserError } from 'store/users/actions'
import { Button,Box, Container } from '@mui/material';
import EmailInput from '../input/EmailInput';
import PasswordInput from '../input/PasswordInput';

const SignIn = () => {
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  const dispatch = useDispatch()
  const store= useSelector(state => state)

  const handleSubmit = async(event) => {
    event.preventDefault()
    dispatch(fetchUserRequest())
    const response = await APIManager.signInUser(email, password)
    if(response){
      response.error ? 
        dispatch(fetchUserError(response.error)) :
        dispatch(fetchUserSignInSuccess(response))
    }else {
      alert("Un problème est survenue, merci de réessayer dans quelques instant")
    }
    console.log(store)
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
