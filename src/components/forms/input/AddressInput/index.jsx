import React from 'react';
import { TextField } from '@mui/material';

const AddressInput = (props) => {
  return (
    <TextField
      margin="normal"
      fullWidth
      name="address"
      label="Adresse"
      id="address"
      {...props}
    />
  );
};

export default AddressInput;
