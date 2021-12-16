import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField, IconButton, Typography, Button, Box } from '@mui/material';
import APIManager from 'services/Api'
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';

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
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {editionMode ?
        <div>
          <TextField label="Nom" variant="outlined" value={name} onChange={handleChange} />
          <Button color="primary" onClick={editTag}>Editer</Button>
        </div>
        :
        <Typography>{tag.name}</Typography>}
      <IconButton aria-label="delete" onClick={e => deleteTag(e, tag.id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={e => setEditionMode(!editionMode)}>
        {editionMode ? <EditOffIcon /> : <EditIcon />}
      </IconButton>
    </Box>
  );
};

export default TagCard;