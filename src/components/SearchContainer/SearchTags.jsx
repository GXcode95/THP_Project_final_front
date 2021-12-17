import React from 'react'
import {Button, Checkbox, FormGroup, FormControlLabel,  Box} from '@mui/material'

const SearchTags = ({tags, handleChange}) => {

  return (
    <Box>
      <FormGroup 
        id="form-group-checkboxs-tags"
        sx={{
          flexDirection: 'row'
        }}
        
      >
        {tags && tags.map(tag => (
          <FormControlLabel 
            control={<Checkbox name={tag.id} />}
            label={tag.name}
            key={tag.id}
            onChange={handleChange}
          />
        ))}
      </FormGroup>
      
    </Box>
  )
}
export default SearchTags