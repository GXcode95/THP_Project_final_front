import React from 'react'
import { Box,Card, Grid, Typography, IconButton} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import CommentForm from './CommentForm'
import APIManager from 'services/Api'
import isAdmin from 'helpers/isAdmin'
import isAuthor from 'helpers/isAuthor';
import UserAvatar from 'components/UserAvatar'

const CommentCard = ({comment, setGame, user}) => {
  const [editMode, setEditMode] = React.useState(false)
  const [author, setAuthor] = React.useState()
  const toggleEditMode = () => {
    setEditMode(!editMode)
  }
  const handleDelete = async () => {
    const response = await APIManager.deleteComment(comment.id)
    response.error ? alert(response.error) : setGame(response)
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await APIManager.updateComment(comment.id, e.target.content.value)
    if(response.error){
      alert(response.error)
    } else {
      setGame(response)
      toggleEditMode()
    }
  }
  const CommentUpdateDate = () => { // return edit date only if comment was edited
    if (comment.created_at !== comment.updated_at) {
      return (
        <Typography variant="span">
          {` -  Édité le ${comment.updated_at}`}
        </Typography>
      )
    }
  }
  
  React.useEffect(
    () => {
      const getCommentAuthor = async () => {
        const response = await APIManager.getUserInfo(comment.user_id)
        response.error ?  setAuthor("?") : setAuthor(response.user_info)
      }
      getCommentAuthor()
    },[comment.user_id]
  )

  return (
    <Card sx={{position:"relative"}}>
      <Grid container sx={{py:"2.5em", px:"0.5em", bgcolor:"grey.300"}}>
        
        <Grid item md={1} >
          <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
          { author && <UserAvatar email={author.email} />}
          </Box>
        </Grid>

        <Grid item md={11}>
          <Box sx={{position: "absolute", top: 0, right: 0}} display="flex" gap={2}>
            {isAuthor(user, comment) &&
              <IconButton  onClick={toggleEditMode}>
                { editMode ? <EditOffIcon/> :<EditIcon/> }
              </IconButton> 
            }
            {( isAuthor(user,comment) || isAdmin(user) ) &&
                <IconButton onClick={handleDelete}>
                  <DeleteForeverIcon/>
                </IconButton> 
            }
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