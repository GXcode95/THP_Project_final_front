import * as React from 'react';
import Typography from '@mui/material/Typography';
import APIManager from 'services/Api'
import { Box, Button, Rating } from '@mui/material'
import { setSnackbar } from 'store/snackbar/actions';
import { useDispatch } from 'react-redux'

const RatingGame = ({ game, setGame }) => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch()
  
  const createRate = async () => {
    const response = await APIManager.createRank(game.id, value)
    if (response.error) {
      dispatch(setSnackbar(true, "error", response.error))
    } else {
      setGame(response)
      dispatch(setSnackbar(true, "success", "Jeu noté !"))
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