import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Rating from '@mui/material/Rating';

const GameIconsInfos = ({ game }) => {
  return (
    <Stack direction="row" justifyContent="flex-start" align="left">
      <Box display="flex" alignItems="left" jsutifyContent="center" color="action">
        <Typography variant="caption" ml="0.3rem" mr="0.5rem" color="action" >
          <GroupAddIcon color="action" /><sup>  {game.min_player}-{game.max_player}</sup>
        </Typography>
        |
        <Typography variant="caption" ml="0.3rem" mr="0.5rem" color="action">
          <sub><Rating name="read-only" value={game.rank} readOnly size="small" /></sub>
        </Typography>
        |
        <Typography variant="caption" ml="0.3rem" mr="0.5rem" color="action">
          <ChildCareIcon color="action" />
          <sup>  {game.min_age} ans et +</sup>
        </Typography>
      </Box>
    </Stack>

  )
}

export default GameIconsInfos
