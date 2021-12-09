import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import APIManager from 'services/Api'
import { fetchUserRequest, fetchUserRegisterSuccess, fetchUserError } from 'store/users/actions'
import { Button,Box, Typography, Container } from '@mui/material';
import EmailInput from '../input/EmailInput';
import PasswordInput from '../input/PasswordInput';
import PasswordConfirmationInput from '../input/PasswordConfirmationInput';
import PhoneInput from '../input/PhoneInput';
import FirstNameInput from '../input/FirstNameInput';
import LastNameInput from '../input/LastNameInput';
import AddressInput from '../input/AddressInput';

const SignUp = () => {
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [phone, setPhone] = useState()
  const [address,setAddress] = useState()
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInfo = {
      email,
      password,
      password_confirmation: passwordConfirmation,
      first_name: firstName,
      last_name: lastName,
      phone,
      address
    }
    dispatch(fetchUserRequest())
    const response = await APIManager.registerUser(userInfo)
    if(response){
      response.error ? 
        dispatch(fetchUserError(response.error)) :
        dispatch(fetchUserRegisterSuccess(response))
    }else {
      alert("Un problème est survenue, mercide réessayer dans quelques instant")
    }
    navigate('/') 
  }

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" color="primary" >
            S'inscrire
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <EmailInput 
              required
              onChange={e => setEmail(e.target.value)} 
            />
            <PasswordInput 
              onChange={e => setPassword(e.target.value)} 
            />
            <PasswordConfirmationInput
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
            <LastNameInput
              required
              onChange={e => setLastName(e.target.value)}
            />
            <FirstNameInput
              required
              onChange={e => setFirstName(e.target.value)}
            />
            <AddressInput
              required
              onChange={e => setAddress(e.target.value)}
            />
            <PhoneInput
              required
              onChange={e => setPhone(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Valider
            </Button>
          </Box>

        </Box>
      </Container>
  );
}

export default SignUp
