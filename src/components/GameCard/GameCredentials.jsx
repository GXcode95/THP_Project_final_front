import React from 'react'
import {Box, Typography} from '@mui/material'

const GameCredentials = ({game}) => {

  return (
    <Box>
      <Typography variant="body" > 
        Un jeu créer par 
        <Typography component="span" color="secondary" > 
          {` ${game.creator} `} 
        </Typography>
        et editer par 
        <Typography component="span" color="secondary" > 
          {` ${game.editor}`}
        </Typography>    .
      </Typography>
    </Box>
  )
}
    
export default GameCredentials
