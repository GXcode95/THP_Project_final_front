import React from 'react'
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setFilter, filter }) => {
  const handleChange = (e) => {
    let searchQuery = e.target.value.toLowerCase()
    searchQuery ?
      setFilter({ ...filter, search: searchQuery }) :
      setFilter({ ...filter, search: "" })
  }

  return (
    <TextField onChange={handleChange} label="recherche" fullWidth />
  )
}

export default SearchBar
