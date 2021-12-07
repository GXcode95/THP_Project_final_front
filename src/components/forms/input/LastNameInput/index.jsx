import React from 'react';
import { TextField } from '@mui/material';

const LastNameInput = (props) => {
  return (
    <TextField
      margin="normal"
      fullWidth
      name="last_name"
      label="Nom"
      {...props}
    />
  );
};

export default LastNameInput;