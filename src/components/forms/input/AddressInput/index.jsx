import React from 'react';
import { TextField } from '@mui/material';

const AddressInput = (props) => {
  return (
    <TextField
    margin="normal"
    fullWidth
    name="address"
    label="Adresse"
    {...props}
    />
  );
};

export default AddressInput;