import React from 'react'
import {Box, Typography} from '@mui/material'


const GameDescription = ({game, limit}) => {
  const handleDescriptionOverflow = (description, limit=300) => {
    return description.length > limit ?  
      description.slice(0, limit) + "..." :
      description
  }

  return (
    <Box >
      <Typography 
        variant="subtitle1" 
        color="primary"
        sx={{fontWeight: "bold", textDecoration: "underline"}}
      >
        Description:
      </Typography>
      <Typography paragraph sx={{ textOverflow: "ellipsis"}}>
        {handleDescriptionOverflow(game.description, limit)}
      </Typography>
    </Box>
  )
}

export default GameDescription