import React from 'react'
import { Grid,  Typography} from '@mui/material'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'
import APIManager from 'services/Api'
import { useSelector } from 'react-redux'

const Comments = ({comments,game, setGame}) => {
  const user = useSelector(state => state.userReducer.user_info)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.content.value
    const response = await APIManager.createComment(game.id, content, user.id)
    
    if(response.error){
      alert(response.error)
    } else {
      setGame(response)
    }
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
          <CommentCard comment={comment} setGame={setGame} />
        </Grid>
      ))}
    </Grid>
  )
}
    
export default Comments
