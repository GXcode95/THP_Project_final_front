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
import EditInputGrid from './EditInput';

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
          <EditInputGrid 
            emailInput={<EmailInput defaultValue={`john.doe@email.com`} />} 
            lastNameInput={<LastNameInput defaultValue={`Doe`} />}
            firstNameInput={<FirstNameInput defaultValue={`John`} />}
            phoneInput={<PhoneInput defaultValue={"1234567890"} />}
            addInput={<AddressInput defaultValue={"52 rue de paris 78570 Andrésy"} />}
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
};

export default EditProfile;