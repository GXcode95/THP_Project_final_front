import * as React from 'react';
import Slider from '@mui/material/Slider';

const valuetext = (value) => {
  return `${value} ans`;
}


const SearchSliders = ({ value, setValue, min = 0, max, minDistance = 10, sortGames }) => {

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }

    sortGames()
  };


  return (
    <Slider
      getAriaLabel={() => 'Minimum distance'}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      disableSwap
      max={max}
      min={min}
    />
  );
}

export default SearchSliders