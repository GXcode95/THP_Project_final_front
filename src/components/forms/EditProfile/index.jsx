import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material'
import AddressInput from '../input/AddressInput';
import PhoneInput from '../input/PhoneInput';
import FirstNameInput from '../input/FirstNameInput';
import LastNameInput from '../input/LastNameInput';
import EmailInput from '../input/EmailInput';

const EditProfile = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      passwor_confirmation: data.get('password_confirmation'),
      last_name: data.get('last_name'),
      first_name: data.get('first_name'),
      phone: data.get('phone')
    });
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
          <Grid container >
            <Typography variant="h2" color="primary" >
              Mon profile
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

              <Grid item xs={12} sx={{display: 'flex', gap:"10px", alignItems: 'center'}}>
                <EmailInput defaultValue={"email@email.com"} />
                <Button variant="outlined">Edit</Button>
              </Grid>

              <Grid item xs={12} sx={{display: 'flex', gap:"10px", alignItems: 'center'}}>
                <LastNameInput defaultValue={"Doe"} />
                <Button variant="outlined">Edit</Button>
              </Grid>

              <Grid item xs={12} sx={{display: 'flex', gap:"10px", alignItems: 'center'}}>
                <FirstNameInput defaultValue={"John"} />
                <Button variant="outlined">Edit</Button>
              </Grid>

              <Grid item xs={12} sx={{display: 'flex', gap:"10px", alignItems: 'center'}}>
                <PhoneInput defaultValue={"0605070908"}/>
                <Button variant="outlined">Edit</Button>
              </Grid>

              <Grid item xs={12} sx={{display: 'flex', gap:"10px", alignItems: 'center'}}>
                <AddressInput defaultValue={`52 rue de paris`}/>
                <Button variant="outlined">Edit</Button>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Valider
              </Button>
            </Box>
          </Grid>
        </Box>
      </Container>
  );
};

export default EditProfile;