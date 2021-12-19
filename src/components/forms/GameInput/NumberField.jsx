import React from 'react';
import { TextField} from '@mui/material';

const NumberField= ({name, onChange, defaultValue}) => {

  function handleLabel(string) {
    string = string.split('_').join(' ')

    return string.charAt(0).toUpperCase() + string.slice(1); 
  }

  return (
    <TextField
      margin="normal"
      name={name}
      label={handleLabel(name)}
      fullWidth
      type="number"
      defaultValue={defaultValue}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default NumberField;