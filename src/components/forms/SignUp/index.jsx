import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import APIManager from 'services/Api'
import { fetchUserRequest, fetchUserRegisterSuccess, fetchUserError } from 'store/users/actions'
const SignUp = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [passwordConfirmation,setPasswordConfirmation] = useState()
  const [firstName,setFirstName] = useState()
  const [lastName,setLastName] = useState()
  const [phone, setPhone] = useState()
  const [address,setAddress] = useState()
  const dispatch = useDispatch()
  const store= useSelector(state => state)
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
    console.log(store)
  };

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
          <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              autoFocus
              defaultValue="xavier@gmail.com"
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Mot de passe"
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Confirmation mot de passe"
              type="password"
              name="password_confirmation"
              onChange={e => setPasswordConfirmation(e.target.value)}
            />

            <TextField
              margin="normal"
              fullWidth
              name="last_name"
              label="Nom"
              required
              defaultValue="grenouillet"
              onChange={e => setLastName(e.target.value)}
            />

            <TextField
              margin="normal"
              fullWidth
              name="first_name"
              label="Prénom"
              required
              defaultValue="xavier"
              onChange={e => setFirstName(e.target.value)}
            />
            
            <TextField
              margin="normal"
              fullWidth
              name="address"
              label="Adresse"
              required
              defaultValue="71 rue de Bruges"
              onChange={e => setAddress(e.target.value)}
            />

            <TextField
              margin="normal"
              fullWidth
              name="phone"
              label="Téléphone"
              required
              defaultValue="0622881718"
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
