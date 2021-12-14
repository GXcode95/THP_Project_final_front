import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddressInput from '../input/AddressInput';
import PhoneInput from '../input/PhoneInput';
import FirstNameInput from '../input/FirstNameInput';
import LastNameInput from '../input/LastNameInput';
import EmailInput from '../input/EmailInput';
import EditInputGrid from './EditInput';

const EditProfile = ({user}) => {
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
          <Typography variant="h2" color="primary" mb="0.4em" >
            Mon profile
          </Typography>
          <EditInputGrid
            emailInput={<EmailInput defaultValue={user.email} />} 
            lastNameInput={<LastNameInput defaultValue={user.last_name} />}
            firstNameInput={<FirstNameInput defaultValue={user.first_name} />}
            phoneInput={<PhoneInput defaultValue={user.phone} />}
            addInput={<AddressInput defaultValue={user.address} />}
          />
          
          {request ?
          <Button
            fullWidth
            variant="contained"
            onClick={showInfo}
            sx={{ mt: 3, mb: 2,maxWidth:"80%" }}
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