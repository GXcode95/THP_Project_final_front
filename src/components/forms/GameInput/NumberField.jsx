import React from 'react';
import { TextField} from '@mui/material';

const NumberField= ({name, onChange, defaultValue}) => {
  function handleLabel(string) {
    string = string.split('_').join(' ') // replace underscore with space

    return string.charAt(0).toUpperCase() + string.slice(1); // capitalize the string
  }
  console.log()
  return (
    <TextField
      margin="normal"
      name={name}
      label={handleLabel(name)}
      fullWidth
      type="number"
      defaultValue={defaultValue}
      onChange={onChange}
    >
    </ TextField>
  );
};

export default NumberField;