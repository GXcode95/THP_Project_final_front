import React from 'react';
import EditInputGrid from '../EditProfile/EditInput';
import NumberField from '../CreateGame/NumberField';
import { Container, Box } from '@mui/material';

const EditGame = () => {
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
          ageInput={<NumberField name="age"/>}
          minPlayersInput={<NumberField name="min players"/>} 
          maxPlayersInput={<NumberField name="max players"/>}
          priceInput={<NumberField name="price"/>}
        />
      </Box>
    </Container>
  )
};

export default EditGame;