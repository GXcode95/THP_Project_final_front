import React, { useState } from 'react';
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
  const [request, setRequest] = useState(true)

  const showInfo = (e) => {
    setRequest(false)
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
          <EditInputGrid 
            emailInput={<EmailInput defaultValue={`john.doe@email.com`} />} 
            lastNameInput={<LastNameInput defaultValue={`Doe`} />}
            firstNameInput={<FirstNameInput defaultValue={`John`} />}
            phoneInput={<PhoneInput defaultValue={`1234567890`} />}
            addInput={<AddressInput defaultValue={`52 rue de paris 78570 Andrésy`} />}
          />
          
          {request ?
          <Button
            fullWidth
            variant="contained"
            onClick={showInfo}
            sx={{ mt: 3, mb: 2 }}
          >
            Changer de mot de passe
          </Button>:
          <p>Un email de réinitialisation a été envoyé à {`john.doe@email.com`}</p>
          }
        </Box>
      </Container>
  );
};

export default EditProfile;