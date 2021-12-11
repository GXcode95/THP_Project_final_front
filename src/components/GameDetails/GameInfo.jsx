import React from 'react';
import { Typography, Grid } from '@mui/material'
import Rating from '@mui/material/Rating';
import RentButton from 'components/buttons/RentButton';


const GameInfo = ({ game }) => {
  return (
    <>
      <Typography variant="h3" noWrap py="0.5em" >
        {game && game.name}
      </Typography>
      <Typography noWrap py="0.5em" >
        Créateur: {game && game.creator}
      </Typography>
      <Typography noWrap py="0.5em" >
        Editeur: {game && game.editor}
      </Typography>
      <Typography noWrap py="0.5em" >
        Age: {game && game.min_age} et +
      </Typography>
      <Typography noWrap py="0.5em" >
        Nombre de joueur: {game && game.min_player} - {game && game.max_player}
      </Typography>
      <Typography noWrap py="0.5em" >
        Moyenne des notes: <sub><Rating name="disabled" value={5} disabled /></sub>
      </Typography>
      <Typography noWrap py="0.5em" >
        Date de sortie: {game && game.release_date}
      </Typography>
      <Typography noWrap py="0.5em" >
        Disponible à la location: {game && game.rent_stock}
      </Typography>
      <Typography noWrap py="0.5em" >
        Disponible à l'achat: {game && game.sell_stock}
      </Typography>
      <Typography noWrap py="0.5em" >
        {game && game.price} €
      </Typography>
      <Typography noWrap py="0.5em" >
        <RentButton />
      </Typography>
    </>
  );
}

export default GameInfo;