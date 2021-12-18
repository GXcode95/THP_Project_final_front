import React from 'react'
import { Grid, Slider, Typography } from '@mui/material'
import SearchSliders from './SearchSliders'
const SearchFilters = ({values, setValues, sortGames}) => {


  return (
      <Grid container gap="2em">
        <Grid item lg={3} sm={5} xs={5}>
          <Typography varianet="body1" color="secondary">Prix</Typography>
          {console.log("vlaues price", values.price)}
          {console.log([values.price[0] / 100, values.price[1] / 100])}

          <SearchSliders 
            value={[values.price[0] / 100, values.price[1] / 100]}
            setValue={setValues.handleSetPrice}
            max={200}
            sortGames={sortGames}
          />
        </Grid>

        <Grid item lg={3} sm={5} xs={5}>
          <Typography varianet="body1" color="secondary">Nb de joueurs</Typography>
          <SearchSliders 
            value={values.players}
            setValue={setValues.setPlayers}
            max={20}
            sortGames={sortGames}
            min={1}
            />
        </Grid>


        <Grid item lg={2} sm={5} xs={5}>
          <Typography varianet="body1" color="secondary">Note</Typography>        
          <SearchSliders 
            value={values.rank}
            setValue={setValues.setRank}
            max={5}
            sortGames={sortGames}
            minDistance={0}
            />
        </Grid>
        <Grid item lg={3} sm={5} xs={5}>
          <Typography varianet="body1" color="secondary">Age minimum</Typography>
          <Slider
            value={values.minAge}
            aria-label="age minimum"
            valueLabelDisplay="auto"
            max={99}
            onChange={(e, newValue) => {
              setValues.setMinAge(newValue) 
              sortGames()
            }}
            color="secondary"
          />
        </Grid>
      </Grid>
  )
}
export default SearchFilters