import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Rating from '@mui/material/Rating';
import centToEuro from 'helpers/CentToEuro'


const GameInfo = ({ game }) => {
  return (
    <>
      <Typography variant="h3" noWrap py="0.5em" >
        {game && game.name}
      </Typography>
      <Stack direction="row" justifyContent="flex-start" align="left" className="card-game-list">
        <Box display="flex" alignItems="left" jsutifyContent="center" color="action">
          <Typography variant="caption" ml="0.3rem" mr="0.5rem" color="action" >
            <GroupAddIcon color="action" /><sup>  {game && game.min_player}-{game && game.max_player}</sup>
          </Typography>
          |
          <Typography variant="caption" ml="0.3rem" mr="0.5rem" color="action">
            <sub><Rating name="read-only" value={game && game.rank ? game.rank : 0} readOnly size="small" /></sub>
          </Typography>
          |
          <Typography variant="caption" ml="0.3rem" mr="0.5rem" color="action">
            <ChildCareIcon color="action" />
            <sup>  {game && game.min_age} ans+</sup>
          </Typography>
        </Box>
      </Stack>
      <Typography variant="subtitle2" align="left" noWrap color="ternary">
        <sup>    <span className="badge badge-rent">{game && game.rent_stock > 0 && `${game.rent_stock} en location`}</span></sup>
      </Typography>
      <Typography align="left" noWrap color="secondary">
        <span>{(game && game.tags) && `Categories : ` + game.tags.map(element => { return element.name })}</span>
      </Typography>
      <Typography noWrap >
        Créateur: {game && game.creator},
        Editeur: {game && game.editor}
      </Typography>
      <Typography noWrap py="0.5em" >
        Date de sortie: {game && game.release_date}
      </Typography>
      <Typography variant="subtitle2" align="left" noWrap color="secondary">
        <strong className="price">
          {game && centToEuro(game.price)}€
        </strong>
        <sup>    <span className="badge">{game && game.sell_stock > 0 && `${game.sell_stock} en stock`}</span></sup>
      </Typography>
      <br />
    </>
  );
}

export default GameInfo;