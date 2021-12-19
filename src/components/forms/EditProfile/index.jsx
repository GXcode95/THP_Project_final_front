import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddressInput from 'components/forms/input/AddressInput';
import PhoneInput from 'components/forms/input/PhoneInput';
import FirstNameInput from 'components/forms/input/FirstNameInput';
import LastNameInput from 'components/forms/input/LastNameInput';
import EmailInput from 'components/forms/input/EmailInput';
import EditInputGrid from './EditInput';
import { Box, Container, Typography } from '@mui/material';

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