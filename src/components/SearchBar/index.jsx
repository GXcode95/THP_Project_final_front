import React from 'react'
import {Box, TextField, Stack} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = ({games, setGames}) => {
  const handleChange= (e) => {
    let searchQuery = e.target.value.toLowerCase()
    searchQuery ?
      setGames(games.filter( game => game.name.toLowerCase().includes(searchQuery))) : 
      setGames(games)
  }

  return (
    <Box width="60%" ml="20%" mb="3em">
      <Box display="flex" alignItems="center">
        <SearchIcon color="primary" sx={{fontSize: "3em"}} />
        <TextField onChange={handleChange} label="recherche" fullWidth textAlign="center" />
      </Box>
    </Box>
  )
}
    
export default SearchBar
