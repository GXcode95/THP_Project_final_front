import React from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import APIManager from 'services/Api'
import TagCard from 'components/TagCard';

const ManagingTag = () => {

  const [name, setName] = React.useState('')
  const [tags, setTags] = React.useState()

  React.useEffect(
    () => {
      const getAllTags = async () => {
        const response = await APIManager.getTags()
        response.error ?
          alert(response.error) :
          setTags(response)
      }
      getAllTags()
    }, []
  )

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const createTag = async (e) => {
    const response = await APIManager.createTagsAdmin(name)
    response.error ?
      alert(response.error) :
      setTags(response)
  }

  return (
    <Box>
      <Grid item>
        <TextField id="outlined-basic" label="Nom" variant="outlined" onChange={handleChange} sx={{ m: 2 }} />
        <Button color="primary" onClick={createTag} sx={{ m: 3 }} >
          Ajouter la Catégorie
        </Button>
      </Grid>
      <Grid container>
        {tags && tags.map((tag, i) => (
          <Grid item xs={10} sm={6} md={4} lg={3} key={`tag-${i}`} >
            <TagCard tag={tag} setTags={setTags} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManagingTag;