import React from 'react';
import { TextField } from '@mui/material';

const PhoneInput = (props) => {
  return (
    <TextField
      margin="normal"
      fullWidth
      name="phone"
      label="Téléphone"
      id="phone"
      {...props}
    />
  );
};

export default PhoneInput;