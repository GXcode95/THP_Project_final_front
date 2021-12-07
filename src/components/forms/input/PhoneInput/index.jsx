import React from 'react';
import { TextField } from '@mui/material';

const PhoneInput = (props) => {
  return (
    <TextField
      margin="normal"
      fullWidth
      name="phone"
      label="Téléphone"
      {...props}
    />
  );
};

export default PhoneInput;