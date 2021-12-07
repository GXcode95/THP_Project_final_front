import React from 'react';
import { TextField } from '@mui/material';

const FirstNameInput = (props) => {
  return (
    <TextField
      margin="normal"
      fullWidth
      name="first_name"
      label="Prénom"
      id="first_name"
      {...props}
    />
  );
};

export default FirstNameInput;