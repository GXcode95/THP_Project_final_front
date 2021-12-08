import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const SelectNumber = (props) => {
  const numbers = Array.from({length: 100}, (x, i) => i+1)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <TextField
      margin="normal"
      select
      name={props.name}
      label={capitalizeFirstLetter(props.name)}
      fullWidth
      value={props.value}
      onChange={props.handleChange}
    >
      {numbers.map((number) => (
        <MenuItem
        key={number}
        value={number}
        >
          {number}
        </MenuItem>
      ))}
    </ TextField>
  );
};

export default SelectNumber;