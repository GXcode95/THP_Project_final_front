import React from 'react'
import { Grid,  Typography} from '@mui/material'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'

const Comments = ({comments}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
      console.log("ezfjf", e.target.content.value)
  }
  return (
    <Grid container spacing={2} >
      <Grid item md={12}>
        <Typography variant="h4" component="p" align="center" pb={2}>
          Ajouter un commentaire
        </Typography>
        <CommentForm minRows={8} handleSubmit={handleSubmit}/>
      </Grid>
      {comments && comments.map(comment => (
        <Grid item md={12} key={comment.id}>
          <CommentCard comment={comment} />
        </Grid>
      ))}
    
     {console.log("comments",comments)}
     {console.log("comments",comments)}
     {console.log("comments",comments)}
     {console.log("comments",comments)}
     {console.log("comments",comments)}
    </Grid>
  )
}
    
export default Comments
