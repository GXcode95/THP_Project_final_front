import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import APIManager from 'services/Api'
import { fetchUserRequest, fetchUserRegisterSuccess, fetchUserError } from 'store/users/actions'
import { Button,Box, Container } from '@mui/material';
import EmailInput from '../input/EmailInput';
import PasswordInput from '../input/PasswordInput';
import PasswordConfirmationInput from '../input/PasswordConfirmationInput';
import PhoneInput from '../input/PhoneInput';
import FirstNameInput from '../input/FirstNameInput';
import LastNameInput from '../input/LastNameInput';
import AddressInput from '../input/AddressInput';
import validateSignUpForm from 'helpers/validateSignUpForm';
import { setSnackbar } from 'store/snackbar/actions';

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
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      address: address
    }
    
    const errorsMessages = validateSignUpForm(userInfo)
    if (errorsMessages.length > 0) {
      dispatch(setSnackbar(true, "error", errorsMessages))
    }else{
      dispatch(fetchUserRequest())
      const response = await APIManager.registerUser(userInfo)
      if(response){
        response.error ? 
          dispatch(fetchUserError(response.error)) && dispatch(setSnackbar(true, "error", response.error)):
          dispatch(fetchUserRegisterSuccess(response)) && dispatch(setSnackbar(true, "success", "Votre compte a bien été créé! Bienvenue chez PlayBox!"))
      }else {
        alert("Un problème est survenue, merci de réessayer dans quelques instant")
      }
      navigate('/') 
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        noValidate 
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
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
    </Container>
  );
}

export default SignUp
