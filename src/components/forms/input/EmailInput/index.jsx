import React from 'react';
import { TextField } from '@mui/material';

const EmailInput = (props) => {
  return (
    <TextField
      margin="normal"
      fullWidth
      required
      name="email"
      label="Email"
      type="email"
      autoFocus
      {...props}
    />
  );
};

export default EmailInput;