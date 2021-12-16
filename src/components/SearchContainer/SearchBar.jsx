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
    <Box width="100%">
      <Box display="flex" alignItems="center">
        <SearchIcon color="primary" sx={{ fontSize: "3em" }} />
        <TextField onChange={handleChange} label="recherche" fullWidth />
      </Box>
    </Box>
  )
}

export default SearchBar
