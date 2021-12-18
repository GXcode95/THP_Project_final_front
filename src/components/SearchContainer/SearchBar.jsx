import React from 'react'
import {TextField } from '@mui/material'

const SearchBar = ({ handleSearch}) => {

  return (
    <TextField onChange={handleSearch} label="recherche" fullWidth />
  )
}

export default SearchBar
