import React from 'react'
import {Stack} from '@mui/material'
import Tag from 'components/Tag'
const SearchTags = ({tags, handleClick}) => {

  return (
    <Stack direction="row" id="stacked-tags" spacing={2}>
      
      {tags &&  tags.length > 0 && tags.map( (tag,i) => (
        <Tag tag={tag} key={i} onClick={handleClick}/>
      ))}

    </Stack>
  )
}
export default SearchTags