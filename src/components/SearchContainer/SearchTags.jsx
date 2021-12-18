import React from 'react'
import {Box} from '@mui/material'
import Tag from 'components/Tag'
const SearchTags = ({tags, handleClick}) => {

  return (
    <Box 
      display="flex"
      id="stacked-tags"
      gap={2} 
      flexWrap="wrap"
    >
      {tags && tags.map( (tag,i) => (
        <Tag tag={tag} key={i} onClick={handleClick}/>
      ))}
    </Box>
  )
}
export default SearchTags