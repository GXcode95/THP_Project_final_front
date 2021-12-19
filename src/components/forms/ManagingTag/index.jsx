import React from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import TagCard from 'components/TagCard';
import APIManager from 'services/Api'
import { useDispatch } from 'react-redux'
import { setSnackbar } from 'store/snackbar/actions';

const ManagingTag = () => {
  const [name, setName] = React.useState('')
  const [tags, setTags] = React.useState()
  const dispatch = useDispatch()

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

  const createTag = async (e) => {
    const response = await APIManager.createTagsAdmin(name)
    if(response.error) {
      dispatch(setSnackbar(true, "error", "Une erreur est survenue"));
    } else {
      dispatch(setSnackbar(true, "success", `Tag ${name} crée avec succèss`))
      setTags(response)
    }

  }

  return (
    <Box>
      <Grid item>
        <TextField 
          id="outlined-basic"
          label="Nom"
          variant="outlined"
          onChange={e => setName(e.target.value)} 
          sx={{ m: 2 }} />
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