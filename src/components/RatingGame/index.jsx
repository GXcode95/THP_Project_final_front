import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import APIManager from 'services/Api'
import { Button } from '@mui/material'

const RatingGame = ({ game, setGame }) => {
  const [value, setValue] = React.useState(0);

  const createRate = async () => {
    const response = await APIManager.createRank(game.id, value)
    if (response.error) {
      alert(response.error)
    } else {
      setGame(response)
    }
  }

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        fontSize: "1em"
      }}
    >
      <Typography variant="caption">Noter ce jeu : <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => handleChange(newValue)}

      />
        <Button
          color="secondary"
          onClick={createRate}
        >
          Noter
        </Button>
      </Typography>


    </Box>
  );
}
export default RatingGame