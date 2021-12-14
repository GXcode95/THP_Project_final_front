import React from 'react'
import {List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image'

const ImagesList = ({files, setFiles}) => {
  const deleteFile = (fileToDelete) => {
    const tempFiles = files.filter(file => file.name !== fileToDelete.name )
    setFiles(tempFiles)
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {files.map( (file,i) => ( 
      <ListItem key={i}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary={file.name} secondary={`${file.size} kb`} />
        
        <IconButton onClick={e=> deleteFile(file)}>
          <CloseIcon color="error"/>
        </IconButton>
      </ListItem>
    ))}
  </List>
  )
}

export default ImagesList