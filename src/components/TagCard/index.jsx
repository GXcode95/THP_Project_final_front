import React from 'react';
import { TextField, IconButton, Typography, Grid } from '@mui/material';
import APIManager from 'services/Api'
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import DeleteButton from 'components/buttons/DeleteButton';

const TagCard = ({ setTags, tag }) => {

  const [editionMode, setEditionMode] = React.useState(false)
  const [name, setName] = React.useState(tag.name)

  const deleteTag = async (e, tagID) => {
    const response = await APIManager.deleteTagsAdmin(tagID)
    response.error ?
      alert(response.error) :
      setTags(response)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const editTag = async (e) => {
    const response = await APIManager.updateTagsAdmin(tag.id, name)
    response.error ?
      alert(response.error) :
      setTags(response)
  }

  return (

    <Grid container>
      <Grid item xs={8}>
        {editionMode ?
          <TextField label="Nom" variant="outlined" value={name} onChange={handleChange} /> :
          <Typography noWrap>{tag.name}</Typography>}
      </Grid>
      <Grid item xs={4}>
        <IconButton aria-label="delete" onClick={e => setEditionMode(!editionMode)}>
          {editionMode ? <EditOffIcon color="error" /> : <EditIcon color="secondary" />}
        </IconButton>
        {editionMode ?
          <IconButton aria-label="edit" onClick={editTag} color="success">
            <GradingOutlinedIcon />
          </IconButton>
          :
          <DeleteButton aria-label="delete" onClick={e => deleteTag(e, tag.id)} color="error" />
        }
      </Grid>
    </Grid>
  );
};

export default TagCard;