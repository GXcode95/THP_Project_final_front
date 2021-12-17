import React from 'react'
import {Button, Checkbox, FormGroup, FormControlLabel, Typography, Box} from '@mui/material'

const SearchTags = ({tags, handleSubmit}) => {

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
          />
        ))}
      </FormGroup>
      
      <Button variant="contained" onClick={handleSubmit} sx={{marginBottom:"2rem"}}>
        Valider les Catégories
      </Button>
    </Box>
  )
}
export default SearchTags