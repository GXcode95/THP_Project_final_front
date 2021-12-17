import React from 'react'
import {Box, Typography} from '@mui/material'

const GameCredentials = ({game}) => {

  return (
    <Box>
      <Typography variant="body" > 
        Un jeu créé par 
        <Typography component="span" color="secondary" > 
          {` ${game.creator} `} 
        </Typography>
        et edité par 
        <Typography component="span" color="secondary" > 
          {` ${game.editor}`}
        </Typography>    .
      </Typography>
    </Box>
  )
}
    
export default GameCredentials
