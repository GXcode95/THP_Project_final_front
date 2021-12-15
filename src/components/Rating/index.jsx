import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function RatingGame({ game }) {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        fontSize: "1em"
      }}
    >
      <Typography variant="caption">Noter ce jeu : <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /></Typography>


    </Box>
  );
}
