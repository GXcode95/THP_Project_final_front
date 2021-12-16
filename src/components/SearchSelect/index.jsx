import React from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const SearchSelect = ({ selectList, name, setFilter, filter }) => {

  const [value, setValue] = React.useState("Aucun Filtre")

  const changeFilters = (value) => {
    switch (name) {
      case "Prix-Min":
        return setFilter({
          ...filter,
          min_price: value
        })

      case "Prix-Max":
        return setFilter({
          ...filter,
          max_price: value
        })

      case "Age-Min":
        return setFilter({
          ...filter,
          min_age: value
        })

      case "Players-Min":
        return setFilter({
          ...filter,
          min_player: value
        })

      case "Players-Max":
        return setFilter({
          ...filter,
          max_player: value
        })

      case "Rank-Min":
        return setFilter({
          ...filter,
          min_rank: value
        })

      default:
        return filter
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    changeFilters(e.target.value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-input-label`}>{name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id={`${name}-select`}
        value={value}
        label={name}
        onChange={handleChange}
      >
        {selectList && selectList.map((item, i) => (
          <MenuItem value={item} key={`${name}-${item}-select-item${i}`}>{item}</MenuItem>
        ))}

      </Select>
    </FormControl>
  );
};

export default SearchSelect;