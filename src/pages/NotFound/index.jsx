import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './notFound.scss'
import Dices from './Dices'
const NotFound = () => {

  return (
    <div>
      <Box
        position="relative"
        display="flex"
        mt="4em"
        sx={{ justifyContent: "center" }}
      >
        <Dices />
      </Box>
      <Typography variant="h2" color="error" className="critical" align="center" mt="2em">
        Échec Critique !
      </Typography>
      <Typography variant="h6" align="center" className="critical-sub">
        La page que vous avez demandé n'existe pas ...
      </Typography>
      <Typography variant="h4" color="secondary" align="center" className="critical-sub">
        <Link to="/jeux">Retour aux jeux</Link>
      </Typography>
    </div>
  )
}

export default NotFound
