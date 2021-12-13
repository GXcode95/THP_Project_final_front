import React from 'react'
import { Avatar, Box, Button, Card, Grid, Typography, IconButton, TextField } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import CommentForm from './CommentForm'
const CommentCard = ({ comment }) => {
  const [editMode, setEditMode] = React.useState(false)

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const handleDelete = () => {
    console.log("handleDelete:", comment.id)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit:",e.target)
    console.log("CommentId",comment.id)
  }
  const CommentUpdateDate = () => {
    if (comment.created_at !== comment.updated_at) {
      return (
        <Typography variant="span">
          {` -  Édité le ${comment.updated_at}`}
        </Typography>
      )
    }
  }
  
  return (
    <Card sx={{position:"relative"}}>
      <Grid container sx={{py:"2.5em", px:"0.5em", bgcolor:"grey.300"}}>
        <Grid item md={1} >
          <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
            <Avatar>A</Avatar>
          </Box>
        </Grid>
        <Grid item md={11}>
          <Box sx={{position: "absolute", top: 0, right: 0}} display="flex" gap={2}>
            <IconButton  onClick={toggleEditMode}>
              { editMode ? <EditOffIcon/> :<EditIcon/> }
            </IconButton> 
            
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon/>
            </IconButton> 
          </Box>
          
          <Typography variant="p" color="grey.500" display="block" fontSize="0.9rem">
            Écrit le {comment.created_at} {CommentUpdateDate()}
          </Typography>
          {editMode ?
            <CommentForm comment={comment} handleSubmit={handleSubmit}/>
            :
            <Typography variant="paragraph" fontSize="1.1rem">
              {comment.content}
            </Typography> 
          }
        </Grid>
      </Grid>
    </Card>
  )
}
export default CommentCard