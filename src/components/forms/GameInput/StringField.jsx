import React from 'react';
import { TextField } from '@mui/material';

const StringField = (props) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      {...props}
    />
  );
}

export default StringField;