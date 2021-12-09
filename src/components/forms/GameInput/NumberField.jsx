import React from 'react';
import { TextField} from '@mui/material';

const NumberField= (props) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <TextField
      margin="normal"
      name={props.name}
      label={capitalizeFirstLetter(props.name)}
      fullWidth
      type="number"
    >
    </ TextField>
  );
};

export default NumberField;