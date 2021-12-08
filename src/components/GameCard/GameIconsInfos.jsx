import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StarRateIcon from '@mui/icons-material/StarRate';
import ChildCareIcon from '@mui/icons-material/ChildCare'

const GameIconsInfos = ({game}) => {

  return (
    <Stack direction="row" justifyContent="space-evenly">
      <Box display="flex" alignItems="center" jsutifyContent="center">
        <AccountBoxIcon />
        <Typography variant="body" ml="0.3rem">
          {game.min_player}-{game.max_player}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <StarRateIcon />
        <Typography variant="body" ml="0.3rem">
          {game.rank} / 5
        </Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <ChildCareIcon />
        <Typography variant="body" ml="0.3rem">
          {game.min_age} ans et +
        </Typography>
      </Box>
    </Stack>

  )
}
    
export default GameIconsInfos
