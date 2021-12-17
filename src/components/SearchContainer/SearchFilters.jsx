import React from 'react'
import {Grid} from '@mui/material'
import SearchSelect from './SearchSelect'

const SearchFilters = (props) => {

  return (
    <Grid container sx={{marginBottom:'0.7rem'}}>
      <Grid item xs={2}>
        <SearchSelect name="Prix-Min" selectList={props.min_prices} setFilter={props.setFilter} filter={props.filter} />
      </Grid>

      <Grid item xs={2}>
        <SearchSelect name="Prix-Max" selectList={props.max_prices} setFilter={props.setFilter} filter={props.filter} />
      </Grid>
    
      <Grid item xs={2}>
        <SearchSelect name="Age-Min" selectList={props.min_ages} setFilter={props.setFilter} filter={props.filter} />
      </Grid>
    
      <Grid item xs={2}>
        <SearchSelect name="Players-Min" selectList={props.min_players} setFilter={props.setFilter} filter={props.filter} />
      </Grid>
    
      <Grid item xs={2}>
        <SearchSelect name="Players-Max" selectList={props.max_players} setFilter={props.setFilter} filter={props.filter} />
      </Grid>
    
      <Grid item xs={2}>
        <SearchSelect name="Rank-Min" selectList={props.min_rank} setFilter={props.setFilter} filter={props.filter} />
      </Grid>
    </Grid> 
  )
}
export default SearchFilters