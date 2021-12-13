import React from 'react';
import { TextField } from '@mui/material';

const StringField = (props) => {
  return (
    <TextField
      margin="normal"on
      required
      fullWidth
      {...props}
    />
  );
}

export default StringField;